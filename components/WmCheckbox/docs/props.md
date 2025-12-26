# Props

## Content Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | string | null | The text label displayed next to the checkbox |
| `hint` | string | undefined | Tooltip text shown on long press or hover |

## Data Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `datavalue` | any | false | The current value of the checkbox |
| `checkedvalue` | any | true | Value returned when checkbox is checked |
| `uncheckedvalue` | any | false | Value returned when checkbox is unchecked |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `readonly` | boolean | null | Prevents user interaction when true |
| `disabled` | any | false | Disables the checkbox when true |
| `show` | any | true | Controls component visibility |
| `disabletoucheffect` | boolean | false | Disables touch feedback animations |

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where component is visible |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |

## Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom styling object |
| `classname` | string | null | Additional CSS class names |

## Event Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onFieldChange` | any | - | Field change handler function |
| `invokeEvent` | Function | - | Event invocation function |

### Common Use Cases

```javascript
// Basic checkbox with custom values
Page.Widgets.agreementCheck.checkedvalue = "agreed";
Page.Widgets.agreementCheck.uncheckedvalue = "not_agreed";
Page.Widgets.agreementCheck.caption = "I agree to terms and conditions";

// Read-only checkbox for display
Page.Widgets.statusCheck.readonly = true;
Page.Widgets.statusCheck.datavalue = true;

// Conditional visibility
Page.Widgets.optionalCheck.show = Page.Variables.showAdvanced.dataSet;
```