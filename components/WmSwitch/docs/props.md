# Props

## Dataset Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | 'yes, no, maybe' | The collection of values that the switch will cycle through |
| `dataItems` | any | - | Alternative way to provide data items for the switch |
| `datavalue` | any | - | The current selected value from the dataset |
| `displayfield` | any | - | Field name to use for displaying values when using object datasets |
| `datafield` | any | - | Field name to use for the actual data value when using object datasets |
| `displayexpression` | any | - | Expression to customize how values are displayed |
| `getDisplayExpression` | any | - | Function to dynamically generate display expressions |
| `groupby` | any | - | Group dataset items by specified field |
| `match` | any | - | Filter dataset items based on matching criteria |
| `orderby` | any | - | Sort dataset items by specified field and order |

## Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `displaylabel` | any | - | Label text to display alongside the switch |
| `displayValue` | any | - | The value currently being displayed to the user |
| `displayimagesrc` | any | - | Image source to display with the switch options |
| `iconclass` | any | - | CSS class for icons to display with switch options |
| `dateformat` | any | - | Format for displaying date values in the switch |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `readonly` | boolean | null | When true, prevents user from changing the switch value |
| `disabled` | any | false | When true, disables the switch component entirely |
| `show` | any | true | Controls visibility of the switch component |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where the switch should be visible |
| `showskeleton` | boolean | undefined | Show skeleton loader while component is loading |
| `skipscripteventtrigger` | boolean | false | Skip triggering events when value changes via script |
| `disabletoucheffect` | boolean | false | Disable visual touch feedback effects |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enable accessibility features |
| `accessibilitylabel` | string | undefined | ARIA label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role attribute |
| `accessibilitylabelledby` | string | undefined | References element that labels this switch |
| `hint` | string | undefined | Tooltip text shown on hover |

## Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Inline styles object |
| `classname` | string | null | Additional CSS class names |

## Event Handlers

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `invokeEvent` | Function | - | Custom event handler function |
| `onFieldChange` | any | - | Handler for field value changes |
| `triggerValidation` | any | - | Trigger validation on value change |

### Common Use Cases

#### Configure Multi-Option Switch
```javascript
// Set custom dataset with multiple options
Page.Widgets.mySwitch.dataset = 'low, medium, high, critical';

// Set default value
Page.Widgets.mySwitch.datavalue = 'medium';

// Make switch readonly
Page.Widgets.mySwitch.readonly = true;
```

#### Data Binding with Objects
```javascript
// Bind to array of objects
Page.Widgets.mySwitch.dataset = [
  { id: 1, status: 'Active', label: 'System Active' },
  { id: 2, status: 'Pending', label: 'System Pending' },
  { id: 3, status: 'Inactive', label: 'System Inactive' }
];
Page.Widgets.mySwitch.datafield = 'status';
Page.Widgets.mySwitch.displayfield = 'label';
```