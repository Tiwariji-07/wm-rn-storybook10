# Props

## Image Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `picturesource` | string | null | The source URL or path for the image to display |
| `pictureplaceholder` | string | null | Placeholder image shown when main image is unavailable |
| `isSvg` | string | null | Indicates if the image source is an SVG format |
| `aspectratio` | string \| number \| null | null | Controls the width-to-height ratio of the image |
| `resizemode` | any | 'stretch' | Determines how the image should be resized to fit the container |

## Visual Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `shape` | string | null | Shape of the image container (rounded, circle, thumbnail) |
| `styles` | any | null | Custom styling object for the component |
| `classname` | string | null | CSS class name for additional styling |

## Loading & Performance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `fastload` | boolean | false | Enables optimized loading for better performance |
| `showskeleton` | boolean | undefined | Shows skeleton placeholder while image loads |
| `skeletonheight` | string | null | Height of the skeleton placeholder |
| `skeletonwidth` | string | null | Width of the skeleton placeholder |

## Responsive Design

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where component should be visible |

## Behavior Control

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | true as Boolean \| String \| Number | Controls component visibility |
| `disabled` | any | false | Disables user interactions with the component |
| `disabletoucheffect` | boolean | false | Disables visual feedback on touch interactions |

## Animation

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | null | Animation type to apply to the component |
| `animationdelay` | number | null | Delay before animation starts in milliseconds |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features for screen readers |
| `accessibilitylabel` | string | undefined | Label read by screen readers |
| `accessibilityrole` | AccessibilityRole | 'image' | Role assigned to the component for accessibility |
| `hint` | string | undefined | Additional hint text for accessibility |

### Configure Image Display

```javascript
// Set image source and placeholder
Page.Widgets.myPicture.picturesource = "https://example.com/image.jpg";
Page.Widgets.myPicture.pictureplaceholder = "assets/placeholder.png";

// Configure aspect ratio
Page.Widgets.myPicture.aspectratio = "16:9";

// Set resize mode
Page.Widgets.myPicture.resizemode = "cover";
```

### Configure Image Shape

```javascript
// Apply circular shape
Page.Widgets.myPicture.shape = "circle";

// Apply rounded corners
Page.Widgets.myPicture.shape = "rounded";

// Apply thumbnail styling
Page.Widgets.myPicture.shape = "thumbnail";
```

### Configure Loading States

```javascript
// Enable fast loading
Page.Widgets.myPicture.fastload = true;

// Configure skeleton loading
Page.Widgets.myPicture.showskeleton = true;
Page.Widgets.myPicture.skeletonwidth = "200px";
Page.Widgets.myPicture.skeletonheight = "150px";
```