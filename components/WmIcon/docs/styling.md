# Styling

The Icon component uses specific CSS classes that can be customized to match your application's design requirements.

## Default CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-icon` | Default style class applied to all icon components |
| `app-icon-rtl` | Styles applied when right-to-left layout is active |

## Customization Examples

```css
/* Customize default icon appearance */
.app-icon {
    transition: all 0.3s ease;
    border-radius: 4px;
}

/* Add hover effects */
.app-icon:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

/* RTL layout adjustments */
.app-icon-rtl {
    transform: scaleX(-1);
}

/* Custom icon sizes */
.app-icon.large {
    font-size: 3em;
}

.app-icon.small {
    font-size: 0.8em;
}

/* Animated icons */
.app-icon.spinning {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
```

## Dynamic Styling

```javascript
// Apply custom CSS class
Page.Widgets.myIcon.classname = 'large spinning';

// Apply inline styles
Page.Widgets.myIcon.styles = {
    color: '#007bff',
    backgroundColor: '#f8f9fa',
    padding: '8px',
    borderRadius: '50%'
};
```