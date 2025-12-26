# Props

## Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | string | 'Loading...' | Text displayed below the spinner icon |
| `iconclass` | string | 'fa fa-circle-o-notch fa-spin' | CSS class for the spinner icon (FontAwesome or custom) |
| `iconsize` | any | 0 | Size of the spinner icon (specify with units like 'px' or 'em') |
| `image` | string | null | URL or path to a custom image to use instead of an icon |
| `imageheight` | string | null | Height of the custom image |
| `imagewidth` | number | 20 | Width of the custom image |
| `lottie` | string | null | Path to Lottie animation file for animated spinner |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | false | Disables the spinner component |
| `show` | any | true | Controls visibility of the spinner |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where spinner should be visible |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

## Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom inline styles object |
| `classname` | string | null | Additional CSS classes to apply |

### Configure Spinner Display

```javascript
// Use custom icon with size
Page.Widgets.mySpinner.iconclass = 'fa fa-spinner fa-pulse';
Page.Widgets.mySpinner.iconsize = '2em';

// Use custom image
Page.Widgets.mySpinner.image = 'assets/images/loading.gif';
Page.Widgets.mySpinner.imagewidth = 50;
Page.Widgets.mySpinner.imageheight = '50px';

// Custom loading message
Page.Widgets.mySpinner.caption = 'Please wait, loading data...';
```

### Control Spinner Visibility

```javascript
// Show spinner during operation
Page.Widgets.mySpinner.show = true;

// Hide spinner when complete
Page.Widgets.mySpinner.show = false;

// Show only on specific devices
Page.Widgets.mySpinner.showindevice = ['xs', 'sm'];
```