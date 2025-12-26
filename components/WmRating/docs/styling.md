# Styling

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-rating` | Default style class applied to the rating component container |
| `form-rating-input-horizontal` | Styles for horizontal layout of rating input |
| `app-rating-disabled` | Applied when the rating component is disabled |

## Customization

### Icon Styling
```css
/* Customize rating stars */
.app-rating {
    /* Container styling */
}

.app-rating .rating-icon {
    /* Individual star/icon styling */
    margin: 0 2px;
}

.app-rating.app-rating-disabled {
    opacity: 0.6;
    /* Disabled state styling */
}
```

### Size and Spacing
```css
.form-rating-input-horizontal {
    /* Horizontal layout adjustments */
    flex-direction: row;
    align-items: center;
}
```

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myRating.styles = {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    borderRadius: '8px'
};

// Add custom class
Page.Widgets.myRating.classname = 'custom-rating-style';
```