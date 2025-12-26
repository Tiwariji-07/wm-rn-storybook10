# Props

## Visual Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | 'wm-sl-l sl-user' | CSS class for font-based icons (wavicon or font-awesome) |
| `iconurl` | string | null | URL for image-based icons |
| `caption` | any | '' | Text label displayed with the icon |
| `iconsize` | any | 0 | Size of the icon (specify with units like 'em' or 'px') |
| `iconposition` | any | 'left' | Position of icon relative to caption ('left' or 'right') |
| `iconheight` | number | null | Explicit height for image icons |
| `iconwidth` | number | null | Explicit width for image icons |
| `iconmargin` | number | null | Margin around the icon |

## Animation Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | null | CSS animation type (e.g., 'spin', 'pulse') |
| `animationdelay` | number | null | Delay before animation starts (in milliseconds) |
| `iterationcount` | any | - | Number of animation iterations |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | true | Controls component visibility |
| `disabled` | any | false | Disables touch interactions when true |
| `disabletoucheffect` | boolean | false | Disables visual touch feedback |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Screen reader label |
| `accessibilityrole` | AccessibilityRole | - | Semantic role for assistive technologies |
| `hint` | string | undefined | Tooltip text on hover/long press |

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom inline styles |
| `classname` | string | null | Additional CSS classes |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where component is visible |

## Loading Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showskeleton` | boolean | undefined | Shows skeleton placeholder during loading |
| `skeletonheight` | string | null | Height of skeleton placeholder |
| `skeletonwidth` | string | null | Width of skeleton placeholder |

### Common Use Cases

```javascript
// Set a font-awesome icon with custom size
Page.Widgets.myIcon.iconclass = 'fa fa-heart';
Page.Widgets.myIcon.iconsize = '2em';

// Use an image icon with specific dimensions
Page.Widgets.myIcon.iconurl = 'assets/images/custom-icon.png';
Page.Widgets.myIcon.iconwidth = 32;
Page.Widgets.myIcon.iconheight = 32;

// Add spinning animation
Page.Widgets.myIcon.animation = 'spin';
Page.Widgets.myIcon.animationdelay = 1000;

// Configure with caption
Page.Widgets.myIcon.caption = 'Settings';
Page.Widgets.myIcon.iconposition = 'left';
```