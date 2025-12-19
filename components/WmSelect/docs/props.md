# Props

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataset | any | - | The data source for populating select options. Can be bound to variables or static data |
| datavalue | any | - | The currently selected value from the dataset |
| datafield | any | - | Property name in dataset items that provides the value to be stored |
| displayfield | any | - | Property name in dataset items that provides the text to be displayed |
| displayexpression | any | - | JavaScript expression for custom formatting of display text |
| getDisplayExpression | any | - | Function to dynamically generate display expressions |
| displaylabel | any | - | Custom label text for the selected item |
| displayValue | any | null | The text value currently displayed in the select |
| displayimagesrc | any | - | Image source URL to display alongside options |
| iconclass | any | - | CSS class for icons to display with options |

## Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | null | Placeholder text shown when no value is selected |
| styles | any | null | Custom styling object for the component |
| classname | string | null | Additional CSS class names to apply |
| showindevice | array | null | Device sizes where component should be visible |
| showskeleton | boolean | undefined | Whether to show skeleton loading state |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| readonly | boolean | null | Prevents user interaction when true |
| disabled | any | false | Disables the component when true |
| show | any | true | Controls component visibility |
| dateformat | any | - | Format string for date values |
| groupby | any | - | Property to group options by |
| match | any | - | Filter criteria for dataset items |
| orderby | any | - | Sort order for dataset items |
| disabletoucheffect | boolean | false | Disables touch feedback effects |
| skipscripteventtrigger | boolean | false | Skip script-triggered events |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accessible | boolean | true | Enables accessibility features |
| accessibilitylabel | string | undefined | ARIA label for screen readers |
| accessibilityrole | AccessibilityRole | - | ARIA role attribute |
| accessibilitylabelledby | string | undefined | References element that labels this component |
| hint | string | undefined | Tooltip text for additional information |

## Event Handlers

| Name | Type | Default | Description |
|------|------|---------|-------------|
| onFieldChange | any | - | Callback function when field value changes |
| triggerValidation | any | - | Function to trigger validation |

### Configure Select Data Binding

```javascript
// Bind to a variable
Page.Widgets.mySelect.dataset = Page.Variables.countriesData;
Page.Widgets.mySelect.datafield = 'code';
Page.Widgets.mySelect.displayfield = 'name';

// Use display expression for complex formatting
Page.Widgets.mySelect.displayexpression = 'name + " (" + code + ")"';

// Set placeholder text
Page.Widgets.mySelect.placeholder = 'Select a country';
```

### Configure Select Behavior

```javascript
// Make select read-only
Page.Widgets.mySelect.readonly = true;

// Set default value
Page.Widgets.mySelect.datavalue = 'US';

// Enable grouping
Page.Widgets.mySelect.groupby = 'region';

// Add ordering
Page.Widgets.mySelect.orderby = 'name ASC';
```