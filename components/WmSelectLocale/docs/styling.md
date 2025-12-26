# Styling

The selectlocale component supports various CSS classes for customization:

## Primary Style Classes

| Class Name | Description |
|------------|-------------|
| `.app-select` | Default style class for the select component |
| `.form-select-input-horizontal` | Horizontal layout styling for form integration |
| `.app-select-disabled` | Applied when component is disabled |
| `.select-dropdown` | Styling for the dropdown menu |
| `.app-select-rtl` | Right-to-left text direction support |
| `.form-widget-selectform-select-input-horizontal` | Form widget specific horizontal styling |

## Styling Examples

```css
/* Custom locale selector styling */
.app-select {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    background-color: #ffffff;
}

/* Dropdown menu customization */
.select-dropdown {
    max-height: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Disabled state styling */
.app-select-disabled {
    opacity: 0.6;
    background-color: #f5f5f5;
}

/* RTL support */
.app-select-rtl {
    text-align: right;
    direction: rtl;
}
```

## Custom Locale Item Styling

```css
/* Style individual locale items */
.locale-item {
    display: flex;
    align-items: center;
    padding: 10px;
}

.locale-item .flag-icon {
    margin-right: 8px;
    width: 20px;
    height: 15px;
}

.locale-item .locale-name {
    font-weight: 500;
}
```