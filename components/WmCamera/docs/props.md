# Props

## Camera Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `capturetype` | string | 'IMAGE' | Specifies capture mode - 'IMAGE' or 'VIDEO' |
| `allowedit` | boolean | false | Enables image editing/cropping before capture |

## Image Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `imagequality` | number | 80 | JPEG compression quality (0-100%) - higher values mean better quality |
| `imageencodingtype` | string | 'JPEG' | Image format - 'JPEG' or 'PNG' |
| `imagetargetwidth` | number | null | Target width in pixels for image scaling |
| `imagetargetheight` | number | null | Target height in pixels for image scaling |

## Data Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `datavalue` | any | - | Current value of the camera component |
| `localFilePath` | string | '' | Path to the captured image/video file |

## Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | 'wm-sl-l sl-camera' | CSS class for the camera icon |
| `iconsize` | number | 16 | Size of the camera icon in pixels |
| `caption` | string | undefined | Text caption displayed with the camera button |
| `hint` | string | 'Click to open the camera' | Tooltip text shown on hover/long press |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Screen reader label |
| `accessibilityrole` | AccessibilityRole | 'imagebutton' | Accessibility role for screen readers |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | false | Disables camera interaction |
| `show` | any | true | Controls component visibility |
| `disabletoucheffect` | boolean | false | Disables touch feedback animation |

## Layout & Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom inline styles |
| `classname` | string | null | Additional CSS classes |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints for responsive display |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |

### Configure Camera Behavior

```javascript
// Set camera to capture video
Page.Widgets.myCamera.capturetype = 'VIDEO';

// Enable image editing
Page.Widgets.myCamera.allowedit = true;

// Set high quality image capture
Page.Widgets.myCamera.imagequality = 95;

// Configure image dimensions
Page.Widgets.myCamera.imagetargetwidth = 800;
Page.Widgets.myCamera.imagetargetheight = 600;
```

### Access Captured Media

```javascript
// Get the file path of captured media
const filePath = Page.Widgets.myCamera.localFilePath;

// Use with Picture widget
Page.Widgets.myPicture.picturesource = Page.Widgets.myCamera.localFilePath;
```