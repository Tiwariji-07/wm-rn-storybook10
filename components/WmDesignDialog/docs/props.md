# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | `false` | Controls the visibility of the dialog |
| `title` | any | `''` | Sets the title text displayed in the dialog header |
| `modal` | any | `true` | When true, adds backdrop and restricts closing when clicking outside |
| `closable` | any | `true` | Enables the default close action with 'x' icon and ESC key |
| `showheader` | any | `true` | Controls visibility of the dialog header |
| `dialogtype` | any | `'design-dialog'` | Specifies the type of dialog |
| `disabled` | any | `false` | Disables the dialog component |

## Animation Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | `null` | Controls the animation style for dialog transitions |
| `animationdelay` | number | `null` | Sets delay before animation starts |

## Icon Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | any | `''` | CSS class for the dialog icon |
| `iconurl` | string | `null` | URL for custom icon image |
| `iconwidth` | number | `null` | Width of the icon in pixels |
| `iconheight` | number | `null` | Height of the icon in pixels |
| `iconmargin` | number | `null` | Margin around the icon in pixels |

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | `null` | Custom styling object |
| `classname` | string | `null` | Additional CSS class names |
| `showindevice` | array | `null` | Device breakpoints where dialog is visible ('xs', 'sm', 'md', 'lg', 'xl', 'xxl') |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state |
| `disabletoucheffect` | boolean | `false` | Disables touch effects for mobile devices |

## Child Component Props

### DialogContent Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | `false` | Disables the dialog content |
| `show` | any | `true` | Controls content visibility |
| `styles` | any | `null` | Custom styling for content area |
| `classname` | string | `null` | CSS class for content container |
| `showindevice` | array | `null` | Device-specific visibility |
| `showskeleton` | boolean | `undefined` | Skeleton state for content |
| `disabletoucheffect` | boolean | `false` | Touch effect control |

### DialogActions Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | `false` | Disables the action buttons |
| `show` | any | `true` | Controls actions visibility |
| `styles` | any | `null` | Custom styling for actions area |
| `classname` | string | `null` | CSS class for actions container |
| `showindevice` | array | `null` | Device-specific visibility |
| `showskeleton` | boolean | `undefined` | Skeleton state for actions |
| `disabletoucheffect` | boolean | `false` | Touch effect control |

### Common Use Cases

```javascript
// Configure modal dialog
Page.Widgets.myDialog.modal = true;
Page.Widgets.myDialog.closable = true;

// Set dialog title and icon
Page.Widgets.myDialog.title = "Confirmation";
Page.Widgets.myDialog.iconclass = "wi wi-check";

// Configure animation
Page.Widgets.myDialog.animation = "fadeIn";
Page.Widgets.myDialog.animationdelay = 300;

// Device-specific visibility
Page.Widgets.myDialog.showindevice = ['md', 'lg', 'xl'];
```