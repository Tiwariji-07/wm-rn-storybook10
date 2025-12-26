# Props

## Currency Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `currency` | any | - | Determines which currency symbol and formatting to use |
| `decimalPlaces` | number | `2` | Number of decimal places to display |

## Value Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `datavalue` | any | - | The actual value of the currency field |
| `displayValue` | string | - | The formatted display value shown to user |
| `minvalue` | number | `null` | Minimum allowed value |
| `maxvalue` | number | `null` | Maximum allowed value |
| `step` | number | `1` | Increment/decrement step value |

## Input Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | string | `''` | Placeholder text when field is empty |
| `floatinglabel` | string | - | Floating label text |
| `readonly` | boolean | `null` | Makes the field read-only |
| `disabled` | any | `false` | Disables the input field |
| `updateon` | string | `'blur'` | When to trigger value updates ('blur', 'change') |
| `hastwowaybinding` | any | `false` | Enables two-way data binding |

## Validation

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `required` | boolean | `false` | Makes the field required |
| `regexp` | string | `null` | Regular expression for custom validation |
| `triggerValidation` | any | - | Triggers validation programmatically |
| `onFieldChange` | any | - | Callback for field change events |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilitylabel` | string | `undefined` | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role for the component |
| `accessibilitylabelledby` | string | `undefined` | References other elements that label this field |
| `hint` | string | `undefined` | Tooltip hint text |

## Display & Layout

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | `true` | Controls component visibility |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Device sizes where component is visible |
| `showskeleton` | boolean | `undefined` | Shows loading skeleton |
| `styles` | any | `null` | Custom styling object |
| `classname` | string | `null` | Additional CSS class names |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects |
| `skipscripteventtrigger` | boolean | `false` | Skips script-triggered events |

### Configure Currency Behavior

```javascript
// Set currency type and formatting
Page.Widgets.myCurrency.currency = 'USD';
Page.Widgets.myCurrency.decimalPlaces = 2;

// Set value constraints
Page.Widgets.myCurrency.minvalue = 0;
Page.Widgets.myCurrency.maxvalue = 10000;
Page.Widgets.myCurrency.step = 0.01;
```

### Validation Setup

```javascript
// Make field required
Page.Widgets.myCurrency.required = true;

// Set custom validation pattern
Page.Widgets.myCurrency.regexp = '^[0-9]+(\\.[0-9]{1,2})?$';

// Trigger validation
Page.Widgets.myCurrency.triggerValidation = true;
```