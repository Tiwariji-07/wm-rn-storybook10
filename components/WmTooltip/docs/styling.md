# Styling

The Tooltip component provides multiple styling options for customizing appearance and positioning.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-tooltip` | Default style class applied to the tooltip container |

## Style Properties

### Tooltip Container Styling
Use the `tooltipStyle` property to customize the overall tooltip appearance:

```javascript
Page.Widgets.myTooltip.tooltipStyle = {
  backgroundColor: '#2c3e50',
  borderRadius: 6,
  padding: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
};
```

### Text Styling
Customize tooltip text using `tooltipLabelStyle`:

```javascript
Page.Widgets.myTooltip.tooltipLabelStyle = {
  color: '#ffffff',
  fontSize: 12,
  fontWeight: '500',
  textAlign: 'center',
  lineHeight: 16
};
```

### Triangle Pointer Styling
Style the tooltip's pointing triangle with `tooltipTriangleStyle`:

```javascript
Page.Widgets.myTooltip.tooltipTriangleStyle = {
  borderTopColor: '#2c3e50',
  borderWidth: 6
};
```

## Responsive Styling
Control tooltip visibility across different screen sizes:

```javascript
// Show only on tablet and desktop
Page.Widgets.myTooltip.showindevice = ['md', 'lg', 'xl'];

// Custom styles for different devices
if (Application.getSelectedViewPort() === 'xs') {
  Page.Widgets.myTooltip.tooltipStyle = { fontSize: 10 };
} else {
  Page.Widgets.myTooltip.tooltipStyle = { fontSize: 14 };
}
```

## Theme Integration
Tooltips automatically inherit theme colors and can be customized to match your app's design system through the standard styling properties.