# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | any | `'Alert'` | The title text displayed at the top of the alert dialog |
| `message` | any | `'I am an alert box!'` | The main message content displayed in the dialog body |
| `oktext` | any | `'Ok'` | The text displayed on the primary action button |
| `alerttype` | any | `'error'` | The type of alert that determines styling and default icon. Options: error, success, warning, information |
| `modal` | any | `false` | When true, adds a backdrop that prevents interaction with underlying content |
| `closable` | any | `true` | Enables the default close action with 'x' icon and ESC key support |

## Icon Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | any | `'wi wi-warning'` | CSS class for the icon displayed next to the title |
| `iconurl` | string | `null` | URL for a custom icon image |
| `iconwidth` | number | `null` | Width of the custom icon in pixels |
| `iconheight` | number | `null` | Height of the custom icon in pixels |
| `iconmargin` | number | `null` | Margin around the icon in pixels |

## Animation & Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | `null` | CSS animation class for dialog entrance/exit |
| `animationdelay` | number | `null` | Delay in milliseconds before animation starts |
| `show` | any | `true as Boolean \| String \| Number` | Controls visibility of the dialog |
| `disabled` | any | `false` | Disables user interaction with the dialog |

## Layout & Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | `null` | Inline styles object for custom styling |
| `classname` | string | `null` | Additional CSS classes to apply |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Device sizes where the dialog should be visible |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state |
| `disabletoucheffect` | boolean | `false` | Disables touch/press visual feedback |

## Child Component Props

The Alert Dialog includes `dialogcontent` and `dialogactions` child components that inherit the base styling and behavior props (disabled, show, styles, classname, showindevice, showskeleton, disabletoucheffect).

### Common Use Cases

```javascript
// Display a success alert
Page.Widgets.successAlert.title = "Success!";
Page.Widgets.successAlert.message = "Your data has been saved successfully.";
Page.Widgets.successAlert.alerttype = "success";
Page.Widgets.successAlert.open();

// Create a modal error dialog
Page.Widgets.errorAlert.modal = true;
Page.Widgets.errorAlert.alerttype = "error";
Page.Widgets.errorAlert.iconclass = "fa fa-exclamation-triangle";
Page.Widgets.errorAlert.open();

// Custom styled warning with animation
Page.Widgets.warningAlert.animation = "slideDown";
Page.Widgets.warningAlert.animationdelay = 300;
Page.Widgets.warningAlert.alerttype = "warning";
```