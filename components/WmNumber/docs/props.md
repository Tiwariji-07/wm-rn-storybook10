# Props

## Input Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `datavalue` | any | - | The current numeric value of the component |
| `displayValue` | string | - | The formatted display value shown to the user |
| `placeholder` | string | `''` | Placeholder text displayed when the input is empty |
| `floatinglabel` | string | - | Floating label text that appears above the input when focused |
| `autofocus` | boolean | `null` | Automatically focuses the input when the component loads |

## Validation

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `required` | boolean | `false` | Makes the field mandatory for form submission |
| `minvalue` | number | `null` | Minimum allowed numeric value |
| `maxvalue` | number | `null` | Maximum allowed numeric value |
| `step` | number | `1` | Step interval for increment/decrement operations |
| `regexp` | string | `null` | Regular expression pattern for input validation |
| `decimalPlaces` | number | `2` | Number of decimal places to display |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `readonly` | boolean | `null` | Prevents user input when set to true |
| `disabled` | any | `false` | Disables the component when set to true |
| `hastwowaybinding` | any | `false` | Enables two-way data binding |
| `updateon` | string | `'blur'` | When to update the data value ('blur' or 'change') |
| `skipscripteventtrigger` | boolean | `false` | Skips change events when value is updated via script |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilitylabel` | string | `undefined` | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role for the component |
| `accessibilitylabelledby` | string | `undefined` | ID of element that labels this component |
| `hint` | string | `undefined` | Tooltip text displayed on hover |

## Display

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | `true` | Controls component visibility |
| `showindevice` | array | `null` | Device sizes where component should be visible |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state |
| `styles` | any | `null` | Custom styles object |
| `classname` | string | `null` | Additional CSS class names |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects |

### Common Use Cases

```javascript
// Set number range and decimal places
Page.Widgets.priceInput.minvalue = 0;
Page.Widgets.priceInput.maxvalue = 999.99;
Page.Widgets.priceInput.decimalPlaces = 2;
Page.Widgets.priceInput.step = 0.01;

// Configure validation
Page.Widgets.quantityInput.required = true;
Page.Widgets.quantityInput.minvalue = 1;
Page.Widgets.quantityInput.regexp = "^[0-9]+$"; // Integers only

// Set up currency input
Page.Widgets.amountInput.decimalPlaces = 2;
Page.Widgets.amountInput.placeholder = "0.00";
Page.Widgets.amountInput.floatinglabel = "Amount";
```