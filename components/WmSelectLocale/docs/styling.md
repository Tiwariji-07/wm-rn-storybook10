# Styling

The Select Locale component supports various CSS classes for customization:

## Component Classes

| Class Name | Description |
|------------|-------------|
| app-select | Default styling for the select component |
| form-select-input-horizontal | Horizontal layout styling for form integration |
| app-select-disabled | Styling applied when component is disabled |
| select-dropdown | Styling for the dropdown list |
| app-select-rtl | Right-to-left text direction support |
| form-widget-selectform-select-input-horizontal | Extended form widget styling |

## Customization Examples

```css
/* Custom locale selector styling */
.app-select {
    border-radius: 8px;
    border: 2px solid #007bff;
}

/* Dropdown styling */
.select-dropdown {
    max-height: 200px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Disabled state */
.app-select-disabled {
    opacity: 0.6;
    background-color: #f5f5f5;
}

/* RTL support */
.app-select-rtl {
    direction: rtl;
    text-align: right;
}
```

The component automatically applies appropriate classes based on its state and configuration, ensuring consistent styling across different locales and orientations.