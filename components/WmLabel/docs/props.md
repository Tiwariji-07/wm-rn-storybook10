# Props

## Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | string | 'Label' | The text content displayed by the label. Supports rich text formatting with **bold** and [links](url) |
| `wrap` | boolean | true | Controls whether text wraps to multiple lines |
| `nooflines` | any | undefined | Limits the number of lines displayed |
| `enableandroidellipsis` | boolean | false | Enables ellipsis on Android when text overflows |

## Animation Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | null | CSS-based animation effect for the component |
| `animationdelay` | number | null | Delay before animation starts (in milliseconds) |
| `textanimation` | string | undefined | Word-by-word text animation effect |
| `animationspeed` | number | 0 | Delay between words in text animation (in milliseconds) |

## Validation Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `required` | boolean | null | Indicates if this is a required field in forms |
| `isValid` | boolean | true | Controls validation state styling |

## Skeleton Loading

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showskeleton` | boolean | undefined | Shows skeleton loading state |
| `skeletonheight` | string | null | Height of the skeleton placeholder |
| `skeletonwidth` | string | null | Width of the skeleton placeholder |
| `multilineskeleton` | boolean | false | Shows multiple line skeleton |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Custom accessibility label |
| `accessibilityrole` | AccessibilityRole | 'text' | Accessibility role for screen readers |
| `hint` | string | undefined | Tooltip text shown on hover |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean/String/Number | true | Controls component visibility |
| `disabled` | any | false | Disables user interaction |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |
| `onTap` | Function | null | Function called when label is tapped |

## Responsive Design

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | array | null | Device breakpoints where component is visible: 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' |

## Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom inline styles |
| `classname` | string | null | Additional CSS class names |

### Common Use Cases

```javascript
// Rich text formatting
Page.Widgets.myLabel.caption = "Visit **our website** at [WaveMaker](https://wavemaker.com)";

// Text animation configuration
Page.Widgets.myLabel.textanimation = "fadeIn";
Page.Widgets.myLabel.animationspeed = 500;

// Validation state
Page.Widgets.myLabel.required = true;
Page.Widgets.myLabel.isValid = false;

// Responsive visibility
Page.Widgets.myLabel.showindevice = ['md', 'lg', 'xl'];

// Skeleton loading
Page.Widgets.myLabel.showskeleton = true;
Page.Widgets.myLabel.skeletonwidth = "100%";
Page.Widgets.myLabel.skeletonheight = "20px";
```