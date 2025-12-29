/**
 * Version Configuration for Storybook
 * 
 * Update this file when deploying new versions
 */

export interface VersionConfig {
    label: string;
    url: string;
    current?: boolean;
}

export const versionsConfig = {
    // Current version displayed in the UI
    currentVersion: "11.14.2",

    // Current framework label (just for display)
    frameworkLabel: "React Native",
    frameworkIcon: "📱",

    // Available versions - update URLs when deploying
    versions: [
        { label: "11.14.2-dev", url: "#", current: true },
        { label: "11.14.2-prod", url: "https://rn-components.onwavemaker.com" },
        { label: "11.14.1", url: "https://dev-rn-components.onwavemaker.com" },
        // Add more versions as they are deployed
    ] as VersionConfig[],
};

export type VersionsConfig = typeof versionsConfig;
