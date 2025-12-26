# Styling

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-anchor` | Default base styling for the anchor component |
| `app-anchor-rtl` | Right-to-left language support styling |
| `link-primary` | Primary theme color styling |
| `link-secondary` | Secondary theme color styling |
| `link-success` | Success state color (green) |
| `link-danger` | Danger/error state color (red) |
| `link-warning` | Warning state color (yellow/orange) |
| `link-info` | Information state color (blue) |
| `link-light` | Light theme color variant |
| `link-dark` | Dark theme color variant |

## Styling Examples

```javascript
// Apply theme-based styling
Page.Widgets.myAnchor.classname = "link-primary";

// Combine multiple classes
Page.Widgets.myAnchor.classname = "link-success custom-anchor";

// Custom inline styles
Page.Widgets.myAnchor.styles = {
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#007bff'
};

// Icon styling
Page.Widgets.myAnchor.iconwidth = 20;
Page.Widgets.myAnchor.iconheight = 20;
Page.Widgets.myAnchor.iconmargin = 8;
```

## Badge Styling

When using `badgevalue`, the badge inherits styling from the parent anchor and can be customized through CSS:

```css
.app-anchor .badge {
    background-color: #dc3545;
    color: white;
    border-radius: 12px;
    padding: 2px 6px;
    font-size: 12px;
}
```