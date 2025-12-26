# Styling

The Switch component provides several CSS classes for customization:

## Available CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-switch` | Default style class for the switch component |
| `form-switch-input-horizontal` | Styles for horizontal layout in forms |
| `app-switch-disabled` | Applied when the switch is disabled |
| `app-switch-rtl` | Right-to-left language support styling |
| `app-switch1-rtl` | Alternative RTL styling variant |
| `app-switch1` | Alternative switch styling variant |

## Custom Styling Examples

### Basic Switch Styling
```css
/* Custom switch appearance */
.app-switch {
    border-radius: 25px;
    padding: 8px 16px;
    font-weight: 500;
}

/* Disabled state styling */
.app-switch-disabled {
    opacity: 0.6;
    pointer-events: none;
}
```

### Form Integration Styling
```css
/* Horizontal form layout */
.form-switch-input-horizontal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
}

.form-switch-input-horizontal label {
    margin-right: 15px;
    flex: 1;
}
```

### RTL Language Support
```css
/* RTL specific styling */
.app-switch-rtl {
    direction: rtl;
    text-align: right;
}

.app-switch1-rtl {
    padding-right: 20px;
    padding-left: 10px;
}
```

### State-based Styling
```css
/* Active state */
.app-switch[data-value="active"] {
    background-color: #4CAF50;
    color: white;
}

/* Warning state */
.app-switch[data-value="warning"] {
    background-color: #FF9800;
    color: white;
}

/* Error state */
.app-switch[data-value="error"] {
    background-color: #f44336;
    color: white;
}
```