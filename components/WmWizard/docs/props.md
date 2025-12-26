# Props

## Wizard Container Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `actionsalignment` | string | 'right' | Alignment of action buttons (Previous, Next, Done, Cancel) |
| `cancelable` | boolean | true | Whether the Cancel button is displayed |
| `cancelbtnlabel` | string | 'Cancel' | Label text for the Cancel button |
| `donebtnlabel` | string | 'Done' | Label text for the Done button |
| `nextbtnlabel` | string | 'Next' | Label text for the Next button |
| `previousbtnlabel` | string | 'Previous' | Label text for the Previous button |
| `defaultstep` | string | 'none' | Starting step index for the wizard |
| `progresstitle` | string | '' | Title displayed in the progress header |
| `progresstype` | 'default' \| 'success' \| 'info' \| 'warning' \| 'error' | 'default' | Visual style type for progress indicators |
| `headernavigation` | boolean | true | Enable/disable navigation through step headers |
| `popovericonclass` | string | 'fa fa-caret-down' | Icon class for popover menus |
| `donebtniconclass` | string | 'wm-sl-l sl-check' | Icon class for the Done button |

## Button Skip Controls

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `skipdefaultprevious` | boolean | false | Skip rendering default Previous button |
| `skipdefaultnext` | boolean | false | Skip rendering default Next button |
| `skipdefaultdone` | boolean | false | Skip rendering default Done button |
| `skipdefaultskip` | boolean | false | Skip rendering default Skip button |
| `skipdefaultcancel` | boolean | false | Skip rendering default Cancel button |

## Common Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | false | Disables the entire wizard component |
| `show` | any | true | Controls visibility of the wizard |
| `styles` | any | null | Custom styles object |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device-specific visibility |
| `showskeleton` | boolean | undefined | Show skeleton loading state |
| `disabletoucheffect` | boolean | false | Disable touch effects on mobile |

## Wizard Step Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | 'Step Title' | Title displayed for the step |
| `subtitle` | string | 'Sub Title' | Subtitle displayed for the step |
| `iconclass` | string | 'wm-sl-l sl-check' | Icon class for the step indicator |
| `index` | number | 0 | Step index position |
| `enableskip` | boolean | false | Enable skip functionality for this step |
| `disableprev` | boolean | false | Disable Previous button for this step |
| `disablenext` | boolean | false | Disable Next button for this step |
| `disabledone` | boolean | false | Disable Done button for this step |
| `showprev` | boolean | true | Show Previous button for this step |
| `shownext` | boolean | true | Show Next button for this step |
| `showdone` | boolean | true | Show Done button for this step |

### Configure Wizard Behavior

```javascript
// Set starting step
Page.Widgets.myWizard.defaultstep = '2';

// Customize button labels
Page.Widgets.myWizard.nextbtnlabel = 'Continue';
Page.Widgets.myWizard.donebtnlabel = 'Finish';

// Disable header navigation
Page.Widgets.myWizard.headernavigation = false;

// Change progress type
Page.Widgets.myWizard.progresstype = 'success';
```

### Configure Step Controls

```javascript
// Disable next button conditionally
Page.Widgets.wizardstep1.disablenext = !Page.Widgets.requiredField.datavalue;

// Enable done button on specific step
Page.Widgets.wizardstep2.disabledone = false;

// Enable skip for optional step
Page.Widgets.wizardstep3.enableskip = true;
```