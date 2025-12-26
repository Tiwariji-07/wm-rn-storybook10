# Props

## Core Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | any | `'datetime'` | Sets the input mode - can be 'date', 'time', or 'datetime' |
| `datavalue` | string \| Date \| number | `undefined` | The current value of the datetime input |
| `outputformat` | string | `'timestamp'` | Defines the format of the output data value returned by the widget |
| `datepattern` | string | `''` | Date pattern that defines how the date/time is displayed in the UI |
| `placeholder` | any | `'Select date time'` | Placeholder text shown when no value is selected |
| `readonly` | any | `false` | When true, prevents user from changing the value |
| `disabled` | any | `false` | When true, disables the entire component |

## Date Range Validation

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mindate` | string \| Date | `undefined` | Minimum selectable date - dates before this will be disabled |
| `maxdate` | string \| Date | `undefined` | Maximum selectable date - dates after this will be disabled |

## Picker Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iswheelpicker` | boolean | `true` | Whether to use the native wheel picker interface |
| `is24hour` | boolean | `true` | Use 24-hour time format when true, 12-hour when false |
| `dateheadertitle` | string | `"Select Date"` | Title shown in the date picker header |
| `dateconfirmationtitle` | string | `"Select"` | Text for the date picker confirmation button |
| `datecanceltitle` | string | `"Cancel"` | Text for the date picker cancel button |
| `timeheadertitle` | string | `"Select Time"` | Title shown in the time picker header |
| `timeconfirmationtitle` | string | `"Select"` | Text for the time picker confirmation button |
| `timecanceltitle` | string | `"Cancel"` | Text for the time picker cancel button |

## Localization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `locale` | string | `''` | Locale string for date/time formatting (e.g., 'en-US', 'fr-FR') |

## Form Integration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onFieldChange` | any | - | Callback function called when the field value changes |
| `triggerValidation` | any | - | Function to trigger form validation |
| `timestamp` | any | - | Timestamp value for form submission |
| `floatinglabel` | string | - | Floating label text that appears above the input |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | `true` | Whether the component should be accessible to screen readers |
| `accessibilitylabel` | string | `undefined` | Label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role for the component |
| `accessibilitylabelledby` | string | `undefined` | ID of element that labels this component |
| `hint` | string | `undefined` | Tooltip text shown on hover |

## Layout & Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | `true` | Controls component visibility |
| `styles` | any | `null` | Custom styles to apply to the component |
| `classname` | string | `null` | Custom CSS class name |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Device sizes where component should be visible |
| `showskeleton` | boolean | `undefined` | Whether to show skeleton loading state |
| `disabletoucheffect` | boolean | `false` | Disable touch feedback effects |

### Common Use Cases

```javascript
// Set date-only mode
Page.Widgets.myDatetime.mode = 'date';

// Set custom date pattern
Page.Widgets.myDatetime.datepattern = 'dd/MM/yyyy';

// Set output format
Page.Widgets.myDatetime.outputformat = 'yyyy-MM-dd';

// Set date range
Page.Widgets.myDatetime.mindate = '2024-01-01';
Page.Widgets.myDatetime.maxdate = '2024-12-31';

// Use 12-hour time format
Page.Widgets.myDatetime.is24hour = false;

// Set locale
Page.Widgets.myDatetime.locale = 'en-US';
```