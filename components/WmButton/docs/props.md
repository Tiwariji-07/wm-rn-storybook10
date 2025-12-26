# Props

## Content Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | string | null | The text displayed on the button |
| `badgevalue` | string | null | Value displayed in the badge span |
| `hint` | string | undefined | Tooltip text shown on hover |

## Icon Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | null | CSS class for icon (e.g., font-awesome, wavicon) |
| `iconurl` | string | null | URL for icon image |
| `iconposition` | any | 'left' | Position of icon relative to text (left, right, top) |
| `iconsize` | number | 0 | Size of the icon |
| `iconheight` | number | null | Height of icon when using iconurl |
| `iconwidth` | number | null | Width of icon when using iconurl |
| `iconmargin` | number | null | Margin around the icon |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | false | Disables button interaction |
| `show` | any | true | Controls button visibility |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |
| `onTap` | Function | null | Callback function for tap events |

## Animation Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | null | CSS animation class for entrance effects |
| `animationdelay` | number | null | Delay before animation starts (ms) |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Screen reader label |
| `accessibilityrole` | AccessibilityRole | "button" | ARIA role for accessibility |

## Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Inline styles object |
| `classname` | string | null | Custom CSS class names |

## Responsive Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where button should be visible |

## Skeleton Loading Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showskeleton` | boolean | undefined | Shows skeleton placeholder while loading |
| `skeletonheight` | string | null | Height of skeleton placeholder |
| `skeletonwidth` | string | null | Width of skeleton placeholder |

### Common Use Cases

```javascript
// Create a primary button with icon
Page.Widgets.myButton.caption = "Save";
Page.Widgets.myButton.iconclass = "fa fa-save";
Page.Widgets.myButton.classname = "btn-primary";

// Configure button with badge
Page.Widgets.notificationButton.badgevalue = "5";
Page.Widgets.notificationButton.caption = "Messages";

// Set up icon button with custom positioning
Page.Widgets.iconButton.iconurl = "https://example.com/icon.png";
Page.Widgets.iconButton.iconposition = "top";
Page.Widgets.iconButton.iconwidth = 24;
Page.Widgets.iconButton.iconheight = 24;

// Configure accessibility
Page.Widgets.accessibleButton.accessibilitylabel = "Submit form";
Page.Widgets.accessibleButton.hint = "Tap to submit the form";
```