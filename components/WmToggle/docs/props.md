# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `datavalue` | any | - | The current value of the toggle widget |
| `checkedvalue` | any | true | Value returned when toggle is in checked/on state |
| `uncheckedvalue` | any | false | Value returned when toggle is in unchecked/off state |
| `readonly` | any | false | When true, prevents user interaction while maintaining visual state |
| `disabled` | any | false | When true, disables the toggle and applies disabled styling |
| `show` | Boolean \| String \| Number | true | Controls visibility of the toggle widget |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features for screen readers |
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `accessibilitylabelledby` | string | undefined | References another element that labels this toggle |
| `accessibilityrole` | AccessibilityRole | "togglebutton" | Defines the accessibility role for assistive technologies |
| `hint` | string | undefined | Tooltip text displayed on hover or focus |

## Visual Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `toggleIcon` | boolean | false | Shows an icon within the toggle switch |
| `showCheckIcon` | boolean | false | Displays a checkmark icon in the checked state |
| `styles` | any | null | Custom styles object for the toggle |
| `classname` | string | null | Additional CSS class names to apply |

## Layout & Responsive Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where toggle should be visible |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |
| `skeletonheight` | string | null | Height of skeleton placeholder |
| `skeletonwidth` | string | null | Width of skeleton placeholder |

## Interaction Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabletoucheffect` | boolean | false | Disables touch ripple effect on tap |
| `onFieldChange` | any | - | Callback function for field value changes |
| `invokeEvent` | Function | - | Function to programmatically trigger events |

## Common Use Cases

### Configure Toggle Values

```javascript
// Set custom values for checked/unchecked states
Page.Widgets.settingsToggle.checkedvalue = "enabled";
Page.Widgets.settingsToggle.uncheckedvalue = "disabled";

// Set initial value
Page.Widgets.settingsToggle.datavalue = "enabled";
```

### Control Toggle State

```javascript
// Enable/disable the toggle
Page.Widgets.notificationToggle.disabled = false;

// Make toggle read-only
Page.Widgets.notificationToggle.readonly = true;

// Show/hide toggle conditionally
Page.Widgets.advancedToggle.show = user.isAdmin;
```

### Customize Toggle Appearance

```javascript
// Enable visual icons
Page.Widgets.featureToggle.toggleIcon = true;
Page.Widgets.featureToggle.showCheckIcon = true;

// Apply custom styling
Page.Widgets.featureToggle.classname = "custom-toggle primary";
```