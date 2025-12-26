# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showTooltip` | boolean | `false` | Controls the visibility of the tooltip |
| `text` | string \| number | `""` | The content text displayed in the tooltip |
| `direction` | TooltipDirection | `"up"` | Position of the tooltip relative to trigger element (up, down, left, right) |
| `disabled` | any | `false` | Disables tooltip functionality when true |

## Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tooltipStyle` | any | - | Custom styles for the tooltip container |
| `tooltipLabelStyle` | TextStyle \| TextStyle[] | - | Styles for the tooltip text content |
| `tooltipTriangleStyle` | ViewStyle \| ViewStyle[] | - | Styles for the tooltip's pointing triangle |
| `styles` | any | `null` | Additional custom styles |
| `classname` | string | `null` | CSS class name for styling |

## Display Control Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | `true` | Controls component visibility (Boolean, String, or Number) |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Specifies device sizes where tooltip should be visible |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state when true |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects |

### Common Use Cases

#### Basic Tooltip Configuration
```javascript
// Show a simple tooltip
Page.Widgets.myTooltip.showTooltip = true;
Page.Widgets.myTooltip.text = "This is helpful information";

// Position tooltip below the element
Page.Widgets.myTooltip.direction = "down";
```

#### Custom Styling
```javascript
// Apply custom tooltip styling
Page.Widgets.myTooltip.tooltipStyle = {
  backgroundColor: '#333',
  borderRadius: 8,
  padding: 10
};

Page.Widgets.myTooltip.tooltipLabelStyle = {
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold'
};
```

#### Responsive Display
```javascript
// Show tooltip only on larger screens
Page.Widgets.myTooltip.showindevice = ['md', 'lg', 'xl'];

// Temporarily disable tooltip
Page.Widgets.myTooltip.disabled = true;
```