# Styling

The Select widget provides several CSS classes for customizing its appearance and behavior.

## Primary Style Classes

| Class Name | Description |
|------------|-------------|
| `.app-select` | Default style class applied to the select widget |
| `.form-select-input-horizontal` | Styles for horizontal form layout |
| `.app-select-disabled` | Applied when the widget is in disabled state |
| `.select-dropdown` | Styles the dropdown menu container |
| `.app-select-rtl` | Right-to-left text direction support |
| `.form-widget-selectform-select-input-horizontal` | Combined form widget and horizontal layout styles |

## Customization Examples

```css
/* Custom select widget styling */
.app-select {
    border-radius: 8px;
    border: 2px solid #e0e0e0;
    background-color: #ffffff;
}

/* Disabled state styling */
.app-select-disabled {
    opacity: 0.6;
    background-color: #f5f5f5;
    cursor: not-allowed;
}

/* Dropdown menu styling */
.select-dropdown {
    max-height: 300px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* RTL support */
.app-select-rtl {
    text-align: right;
    direction: rtl;
}

/* Horizontal form layout */
.form-select-input-horizontal {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}
```

## Theme Integration

The Select widget automatically inherits theme colors and styles. You can override specific theme properties:

```css
/* Override theme colors */
.app-select {
    --select-border-color: #007bff;
    --select-focus-color: #0056b3;
    --select-text-color: #333333;
    --select-placeholder-color: #999999;
}
```