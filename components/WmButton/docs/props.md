# Props

## Content & Display

| Name | Type | Default | Description |
|------|------|---------|-------------|
| caption | string | null | The text displayed on the button |
| badgevalue | string | null | Value displayed in the badge span |
| hint | string | undefined | Tooltip text shown on interaction |
| show | Boolean/String/Number | true | Controls component visibility |
| disabled | any | false | Disables the button when true |

## Icon Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| iconclass | string | null | CSS class for icon (Font Awesome, etc.) |
| iconurl | string | null | URL for custom icon image |
| iconposition | any | 'left' | Position of icon relative to text (left, right, top) |
| iconsize | number | 0 | Size of the icon |
| iconwidth | number | null | Width of icon when using iconurl |
| iconheight | number | null | Height of icon when using iconurl |
| iconmargin | number | null | Spacing between icon and text |

## Animation & Effects

| Name | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | null | CSS animation class name |
| animationdelay | number | null | Delay before animation starts (ms) |
| disabletoucheffect | boolean | false | Disables touch feedback effects |

## Skeleton Loading

| Name | Type | Default | Description |
|------|------|---------|-------------|
| showskeleton | boolean | undefined | Shows skeleton placeholder during loading |
| skeletonheight | string | null | Height of skeleton placeholder |
| skeletonwidth | string | null | Width of skeleton placeholder |

## Styling & Layout

| Name | Type | Default | Description |
|------|------|---------|-------------|
| styles | any | null | Inline styles object |
| classname | string | null | Additional CSS class names |
| showindevice | Array | null | Device breakpoints where button is visible |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | Screen reader label |
| accessibilityrole | AccessibilityRole | "button" | Accessibility role for assistive technologies |

## Event Handlers

| Name | Type | Default | Description |
|------|------|---------|-------------|
| onTap | Function | null | Function called when button is tapped |

### Common Use Cases

#### Basic Button Configuration
```javascript
// Set button caption and icon
Page.Widgets.myButton.caption = "Save";
Page.Widgets.myButton.iconclass = "fa fa-save";
Page.Widgets.myButton.iconposition = "left";
```

#### Enable/Disable Button
```javascript
// Disable button
Page.Widgets.myButton.disabled = true;

// Enable with conditional logic
Page.Widgets.myButton.disabled = !Page.Variables.formValid.dataSet;
```

#### Configure Badge Display
```javascript
// Show notification count
Page.Widgets.myButton.badgevalue = "3";
Page.Widgets.myButton.caption = "Messages";
```

#### Responsive Visibility
```javascript
// Show only on tablet and desktop
Page.Widgets.myButton.showindevice = ['md', 'lg', 'xl'];
```