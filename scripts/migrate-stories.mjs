
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, '../components');

// Components to skip (already done or manual)
// The user said they did "till button group from top"
// Alphabetically: WmAccordion, WmAlert..., WmBottomSheet, WmBubbleChart, WmButton, WmButtonGroup.
// So we want to process everything AFTER WmButtonGroup.
const START_AFTER = 'WmAccordion';

async function migrateStories() {
    console.log('Starting migration of remaining stories...');

    if (!fs.existsSync(componentsDir)) {
        console.error('Components directory not found:', componentsDir);
        return;
    }

    const componentFolders = fs.readdirSync(componentsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .sort();

    let shouldProcess = false;

    for (const folder of componentFolders) {
        if (folder === START_AFTER) {
            shouldProcess = true;
            continue;
        }

        if (!shouldProcess) {
            // console.log(`Skipping ${folder} (already done)`);
            continue;
        }

        const folderPath = path.join(componentsDir, folder);
        const files = fs.readdirSync(folderPath);

        // Find the stories file (e.g., WmButton.stories.tsx)
        const storiesFile = files.find(f => f.endsWith('.stories.tsx'));

        if (!storiesFile) {
            console.warn(`No stories file found in ${folder}`);
            continue;
        }

        const filePath = path.join(folderPath, storiesFile);
        let content = fs.readFileSync(filePath, 'utf-8');

        // Double check if already migrated
        if (content.includes('ComponentDocumentation')) {
            console.log(`Skipping ${folder} - already migrated`);
            continue;
        }

        console.log(`Migrating ${folder}...`);

        // 1. Add imports
        const imports = `import { ComponentDocumentation } from "../../.storybook/components/ComponentDocumentation";
import overview from "./docs/overview.md?raw";
import props from "./docs/props.md?raw";
import events from "./docs/events.md?raw";
import methods from "./docs/methods.md?raw";
import styling from "./docs/styling.md?raw";`;

        // Insert imports after the last import
        const lastImportIndex = content.lastIndexOf('import ');
        const endOfLastImportLine = content.indexOf('\n', lastImportIndex);

        content = content.slice(0, endOfLastImportLine + 1) + '\n' + imports + '\n' + content.slice(endOfLastImportLine + 1);

        // 2. Create wrapper component
        const componentName = folder.replace('Wm', '') + 'Docs'; // e.g. ButtonDocs
        const DocsWrapper = `
const Docs = () => (
  <ComponentDocumentation
    overview={overview}
    props={props}
    events={events}
    methods={methods}
    styling={styling}
  />
);
`;

        // Insert wrapper before 'const meta'
        const metaIndex = content.indexOf('const meta');
        content = content.slice(0, metaIndex) + DocsWrapper + '\n' + content.slice(metaIndex);

        // 3. Update docs parameter in meta
        // Remove existing docs description block if present
        // Matches: docs: { description: { component: `...` } }
        // Be careful with the comma and closing braces
        // We will attempt to replace the specific pattern `docs: { description: { component: `...` } }`

        // Check if we have the specific "description: { component: `...` }" pattern
        const hasDescription = /docs:\s*{\s*description:\s*{\s*component:\s*`[\s\S]*?`\s*}\s*}/.test(content);

        if (hasDescription) {
            content = content.replace(/docs:\s*{\s*description:\s*{\s*component:\s*`[\s\S]*?`\s*}\s*}/, `docs: {
      page: Docs,
    }`);
        } else if (content.includes('docs: {')) {
            // If docs exists but not the description pattern we know, try to preserve other things? 
            // Or just assume it's safe to overwrite if we are careful?
            // Let's replace the whole docs block if it looks standard
            content = content.replace(/docs:\s*{[\s\S]*?},?/, `docs: {
      page: Docs,
    },`);
        } else if (content.includes('parameters: {')) {
            // Add inside parameters
            const paramsIndex = content.indexOf('parameters: {');
            content = content.slice(0, paramsIndex + 13) + `
    docs: {
      page: Docs,
    },` + content.slice(paramsIndex + 13);
        } else {
            // basic fallback if parameters missing (unlikely based on templates)
            console.warn(`Could not find parameters object in ${folder}`);
            continue;
        }

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✓ Migrated ${folder}`);
    }

    console.log('Migration complete!');
}

migrateStories();
