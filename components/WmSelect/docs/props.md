# Props

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | The data source for populating dropdown options |
| `datavalue` | any | - | The actual value to be stored when an item is selected |
| `datafield` | any | - | The field from dataset to use as the data value |
| `displayfield` | any | - | The field from dataset to show as display text |
| `displayexpression` | any | - | JavaScript expression for custom display formatting |
| `getDisplayExpression` | any | - | Function to generate display expressions dynamically |
| `displayValue` | any | null | The currently displayed value in the select widget |
| `displaylabel` | any | - | Label text to display for the selected item |

## Display & Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | string | null | Text shown when no value is selected |
| `readonly` | boolean | null | Prevents user interaction when true |
| `disabled` | any | false | Disables the widget when true |
| `show` | any | true | Controls widget visibility |
| `dateformat` | any | - | Format for date values if applicable |
| `displayimagesrc` | any | - | Image source for display items |
| `iconclass` | any | - | CSS class for icons in dropdown items |

## Data Organization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `groupby` | any | - | Field to group dropdown items by |
| `orderby` | any | - | Field(s) to sort dropdown items |
| `match` | any | - | Criteria for filtering dropdown items |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | ARIA label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role attribute |
| `accessibilitylabelledby` | string | undefined | ID of element that labels this widget |
| `hint` | string | undefined | Tooltip text shown on hover/focus |

## Events & Validation

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onFieldChange` | any | - | Callback function when field value changes |
| `triggerValidation` | any | - | Function to trigger validation manually |
| `skipscripteventtrigger` | boolean | false | Skips script-based event triggers when true |

## Styling & Layout

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom styles object |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where widget is visible |
| `showskeleton` | boolean | undefined | Shows skeleton loader while loading |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

### Configure Select Data Binding

```javascript
// Bind to a variable
Page.Widgets.mySelect.dataset = Page.Variables.countriesData;
Page.Widgets.mySelect.datafield = 'code';
Page.Widgets.mySelect.displayfield = 'name';

// Use display expression for custom formatting
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

// Configure ordering
Page.Widgets.mySelect.orderby = 'name:asc';

// Group items
Page.Widgets.mySelect.groupby = 'region';
```