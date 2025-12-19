# Styling

The Select widget provides several CSS classes for customization:

## Base Classes

| Class Name | Description |
|------------|-------------|
| `.app-select` | Default style class applied to the select component |
| `.form-select-input-horizontal` | Styles for horizontal form layout |
| `.app-select-disabled` | Styles applied when the select is disabled |
| `.select-dropdown` | Styles for the dropdown/picker interface |
| `.app-select-rtl` | Right-to-left language support styles |
| `.form-widget-selectform-select-input-horizontal` | Complex horizontal form widget styles |

## Custom Styling

```css
/* Customize select appearance */
.app-select {
    border-radius: 8px;
    border-color: #007bff;
}

/* Style disabled state */
.app-select-disabled {
    opacity: 0.6;
    background-color: #f8f9fa;
}

/* Customize dropdown appearance */
.select-dropdown {
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* RTL support customization */
.app-select-rtl {
    text-align: right;
    direction: rtl;
}
```

## Platform-Specific Styling

The Select widget uses native mobile pickers, so styling options may be limited by platform constraints. Focus on:

- Container styling (borders, backgrounds, spacing)
- Text styling (fonts, colors)
- State-based styling (disabled, focused)
- Layout and positioning

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.mySelect.styles = {
    backgroundColor: '#f8f9fa',
    borderColor: '#007bff',
    borderRadius: '8px'
};

// Add custom CSS class
Page.Widgets.mySelect.classname = 'my-custom-select';
```