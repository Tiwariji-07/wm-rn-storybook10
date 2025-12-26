# Props

## Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | 'wm-sl-l sl-cloud-upload' | CSS class for the upload icon displayed on the button |
| `iconsize` | number | 16 | Size of the icon in pixels |
| `caption` | string | 'Upload' | Text displayed on the upload button |

## File Handling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `selectedFiles` | any | - | Contains information about currently selected files |
| `contenttype` | string | - | MIME type restriction for file selection (e.g., 'image/*', 'application/pdf') |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features for screen readers |
| `accessibilitylabel` | string | undefined | Custom label for screen readers |
| `accessibilityrole` | AccessibilityRole | 'button' | ARIA role for accessibility |
| `hint` | string | undefined | Tooltip text displayed on long press or hover |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | false | Disables the file upload button when true |
| `show` | any | true | Controls component visibility |
| `disabletoucheffect` | boolean | false | Disables visual touch feedback effects |

## Layout & Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Inline styles object for custom styling |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where component should be visible |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |

## Common Use Cases

### Configure File Type Restrictions
```javascript
// Restrict to images only
Page.Widgets.myFileUpload.contenttype = 'image/*';

// Allow specific document types
Page.Widgets.myFileUpload.contenttype = 'application/pdf,application/msword';
```

### Customize Upload Button Appearance
```javascript
// Change icon and caption
Page.Widgets.myFileUpload.iconclass = 'wi wi-camera';
Page.Widgets.myFileUpload.caption = 'Take Photo';
Page.Widgets.myFileUpload.iconsize = 24;
```

### Handle Disabled State
```javascript
// Disable upload during processing
Page.Widgets.myFileUpload.disabled = true;

// Re-enable after completion
Page.Widgets.myFileUpload.disabled = false;
```