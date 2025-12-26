# Styling

The Bottom Sheet component provides CSS classes for customization:

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-bottomsheet` | Default style class applied to the bottom sheet container |

## Styling Examples

```css
/* Customize bottom sheet appearance */
.app-bottomsheet {
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
}

/* Custom class styling */
.my-custom-bottomsheet {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px 20px 0 0;
}

/* Responsive styling for different devices */
.app-bottomsheet {
    /* Mobile styles */
    border-radius: 12px 12px 0 0;
}

@media (min-width: 768px) {
    .app-bottomsheet {
        /* Tablet styles */
        border-radius: 16px 16px 0 0;
        max-width: 500px;
        margin: 0 auto;
    }
}
```

## Style Customization

```javascript
// Apply custom styles via styles property
Page.Widgets.myBottomSheet.styles = {
    backgroundColor: '#f8f9fa',
    borderRadius: '20px 20px 0 0',
    padding: '20px'
};

// Apply custom CSS class
Page.Widgets.myBottomSheet.classname = 'my-custom-bottomsheet';
```