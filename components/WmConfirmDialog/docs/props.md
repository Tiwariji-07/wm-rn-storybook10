# Props

## Dialog Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | any | 'Confirm' | Sets the title text displayed at the top of the dialog |
| `message` | any | 'I am confirm box!' | The main message content displayed to the user |
| `oktext` | any | 'Ok' | Text displayed on the confirmation button |
| `canceltext` | any | 'CANCEL' | Text displayed on the cancel button |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `modal` | any | false | When true, adds backdrop preventing dialog closure by clicking outside |
| `closable` | any | true | Enables the default close action with 'x' icon and ESC key support |
| `show` | any | true | Controls the visibility of the dialog component |
| `disabled` | any | false | When true, disables the entire dialog interaction |

## Animation & Visual Effects

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | null | CSS animation class applied when dialog opens/closes |
| `animationdelay` | number | null | Delay in milliseconds before animation starts |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects on mobile devices |

## Icon Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | any | 'wm-sl-l sl-check' | CSS class for the dialog icon |
| `iconurl` | string | null | URL for custom icon image |
| `iconwidth` | number | null | Width of the icon in pixels |
| `iconheight` | number | null | Height of the icon in pixels |
| `iconmargin` | number | null | Margin around the icon in pixels |

## Layout & Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Inline styles object for custom styling |
| `classname` | string | null | Additional CSS classes to apply |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component should be visible |
| `showskeleton` | boolean | undefined | Shows skeleton loading state when true |

### Common Use Cases

```javascript
// Basic confirmation dialog
Page.Widgets.myConfirmDialog.title = "Delete Item";
Page.Widgets.myConfirmDialog.message = "Are you sure you want to delete this item? This action cannot be undone.";
Page.Widgets.myConfirmDialog.oktext = "Delete";
Page.Widgets.myConfirmDialog.canceltext = "Cancel";

// Modal dialog with custom icon
Page.Widgets.myConfirmDialog.modal = true;
Page.Widgets.myConfirmDialog.iconclass = "fa fa-warning";
Page.Widgets.myConfirmDialog.iconwidth = 24;
Page.Widgets.myConfirmDialog.iconheight = 24;

// Animated dialog
Page.Widgets.myConfirmDialog.animation = "fadeIn";
Page.Widgets.myConfirmDialog.animationdelay = 200;
```