# Props

## Time Selection Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `selectedDateTime` | `any` | - | The currently selected time value. Accepts Date objects or time strings |
| `is24Hour` | `boolean` | `true` | Determines whether to display time in 24-hour format (true) or 12-hour format with AM/PM (false) |

## Visibility & State Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `isVisible` | `boolean` | `false` | Controls the visibility of the time picker modal |
| `show` | `Boolean \| String \| Number` | `true` | General visibility control for the component |
| `disabled` | `any` | `false` | Disables the time picker interaction when set to true |
| `showskeleton` | `boolean` | `undefined` | Shows a skeleton loading state when true |

## Text & Localization Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `timeheadertitle` | `string` | `"Select Time"` | Header text displayed at the top of the time picker modal |
| `timeconfirmationtitle` | `string` | `"Select"` | Text for the confirmation/select button |
| `timecanceltitle` | `string` | `"Cancel"` | Text for the cancel button |

## Styling & Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | `any` | `null` | Custom inline styles to apply to the component |
| `classname` | `string` | `null` | CSS class name for custom styling |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Array of device sizes where the component should be visible |
| `disabletoucheffect` | `boolean` | `false` | Disables touch feedback effects when set to true |

## Common Use Cases

### Basic Time Selection
```javascript
// Set default time to current time
Page.Widgets.myTimePicker.selectedDateTime = new Date();

// Show the time picker
Page.Widgets.myTimePicker.isVisible = true;
```

### Configure 12-Hour Format
```javascript
// Enable 12-hour format with AM/PM
Page.Widgets.myTimePicker.is24Hour = false;

// Customize button text for localization
Page.Widgets.myTimePicker.timeheadertitle = "Choose Time";
Page.Widgets.myTimePicker.timeconfirmationtitle = "OK";
Page.Widgets.myTimePicker.timecanceltitle = "Close";
```

### Responsive Visibility
```javascript
// Show only on mobile devices
Page.Widgets.myTimePicker.showindevice = ['xs', 'sm'];

// Disable on tablets and larger
Page.Widgets.myTimePicker.disabled = Page.deviceSize === 'md';
```