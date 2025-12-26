# Props

## Navigation Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `hyperlink` | string | null | The URL or route to navigate to when the anchor is tapped |
| `target` | string | '_blank' | Specifies how to open the linked document (_blank, _self, _parent, _top) |
| `encodeurl` | boolean | false | Automatically encode special characters in the URL |

## Content Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | any | 'Link' | The text content displayed in the anchor |
| `badgevalue` | string | null | Value displayed in a badge overlay on the anchor |
| `nooflines` | any | undefined | Maximum number of lines for text content |

## Icon Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | null | CSS class for the icon (e.g., FontAwesome classes) |
| `iconurl` | string | null | URL path to a custom icon image |
| `iconposition` | string | 'left' | Position of the icon relative to text (left, right, top) |
| `iconwidth` | number | null | Width of the icon in pixels |
| `iconheight` | number | null | Height of the icon in pixels |
| `iconmargin` | number | null | Margin around the icon in pixels |

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string | null | Width of the component (px, %, em) |
| `height` | string | null | Height of the component (px, %, em) |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | false | Disables user interaction with the anchor |
| `show` | any | true | Controls component visibility |
| `disabletoucheffect` | boolean | false | Disables visual touch feedback |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Custom accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | 'link' | Accessibility role for the component |
| `hint` | string | undefined | Tooltip or hint text |

## Animation & Loading Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | null | CSS animation class to apply |
| `animationdelay` | number | null | Delay before animation starts (ms) |
| `showskeleton` | boolean | undefined | Shows skeleton loader while content loads |
| `skeletonwidth` | number | undefined | Width of skeleton loader |
| `skeletonheight` | number | undefined | Height of skeleton loader |

## Device & Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component is visible |
| `styles` | any | null | Custom inline styles object |
| `classname` | string | null | Additional CSS class names |

### Common Use Cases

```javascript
// Basic external link
Page.Widgets.myAnchor.hyperlink = "https://example.com";
Page.Widgets.myAnchor.caption = "Visit Website";
Page.Widgets.myAnchor.target = "_blank";

// Link with icon and badge
Page.Widgets.myAnchor.iconclass = "fa fa-external-link";
Page.Widgets.myAnchor.iconposition = "left";
Page.Widgets.myAnchor.badgevalue = "New";

// Configure accessibility
Page.Widgets.myAnchor.accessibilitylabel = "Open external website";
Page.Widgets.myAnchor.hint = "This will open in a new tab";

// Enable URL encoding for special characters
Page.Widgets.myAnchor.encodeurl = true;
Page.Widgets.myAnchor.hyperlink = "https://example.com/search?q=hello world";
```