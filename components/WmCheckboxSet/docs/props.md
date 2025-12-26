# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | 'Option 1, Option 2, Option 3' | The data source for checkbox options. Can be an array, variable, or comma-separated string |
| `datavalue` | any | - | The selected values from the checkbox set |
| `displayValue` | any | '' | The display representation of selected values |
| `required` | boolean | false | Whether at least one option must be selected |
| `readonly` | boolean | null | When true, prevents user interaction with the checkboxes |
| `disabled` | any | false | Disables the entire checkbox set when true |

## Layout & Display

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemsperrow` | any | {xs: 1, sm: 1, md: 1, lg: 1} | Number of checkbox items to display per row for different screen sizes |
| `renderitempartial` | function | - | Custom render function for individual checkbox items: `(item, index, partialName) => ReactNode` |
| `numberofskeletonitems` | number \| string | - | Number of skeleton items to show during loading |
| `showskeleton` | boolean | undefined | Whether to display skeleton loading state |

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `displayfield` | any | - | Field name to use for displaying checkbox labels |
| `datafield` | any | - | Field name to use for checkbox values |
| `displayexpression` | any | - | JavaScript expression for custom display formatting |
| `getDisplayExpression` | any | - | Function to generate display expressions |
| `groupby` | any | - | Field name to group checkboxes under category headings |
| `orderby` | any | - | Field name and direction for sorting checkbox options |
| `match` | any | - | Filter criteria for dataset items |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enable accessibility features |
| `accessibilitylabel` | string | undefined | Label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role for the component |
| `accessibilitylabelledby` | string | undefined | ID of element that labels this component |
| `hint` | string | undefined | Hint text for user guidance |

## Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | true | Controls component visibility |
| `styles` | any | null | Custom style object |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | array | null | Device sizes where component should be visible: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] |
| `disabletoucheffect` | boolean | false | Disable touch feedback effects |

## Event Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `skipscripteventtrigger` | boolean | false | Skip onChange event when value is set programmatically |
| `onFieldChange` | any | - | Callback function when field value changes |

### Configure Layout Behavior

```javascript
// Set different items per row for various screen sizes
Page.Widgets.myCheckboxSet.itemsperrow = {
    xs: 1,  // Mobile portrait
    sm: 2,  // Mobile landscape
    md: 2,  // Tablet portrait
    lg: 3   // Tablet landscape
};

// Enable grouping
Page.Widgets.myCheckboxSet.groupby = 'category';

// Set custom display field
Page.Widgets.myCheckboxSet.displayfield = 'name';
Page.Widgets.myCheckboxSet.datafield = 'id';
```

### Configure Data Binding

```javascript
// Bind to a variable
Page.Widgets.myCheckboxSet.dataset = Page.Variables.optionsData;

// Set default selected values
Page.Widgets.myCheckboxSet.datavalue = ['option1', 'option3'];

// Configure display expression
Page.Widgets.myCheckboxSet.displayexpression = 'name + " (" + count + ")"';
```