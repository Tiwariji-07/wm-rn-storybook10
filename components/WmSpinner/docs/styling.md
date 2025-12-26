# Styling

The Spinner component supports custom styling through CSS classes and inline styles.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-spinner` | Default style class applied to the spinner container |
| `app-spinner-rtl` | Style class applied for right-to-left language support |

## Customization

```css
/* Custom spinner styling */
.app-spinner {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    padding: 20px;
}

/* RTL specific styling */
.app-spinner-rtl {
    direction: rtl;
    text-align: right;
}

/* Custom spinner animation */
.custom-spinner-icon {
    animation: spin 2s linear infinite;
    color: #007bff;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

You can also apply custom styles using the `styles` property:

```javascript
Page.Widgets.mySpinner.styles = {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    padding: '15px'
};
```