# Styling

The CheckboxSet component provides several CSS classes for customization:

| Class Name | Description |
|------------|-------------|
| `app-checkboxset` | Default style class applied to the main container |
| `form-checkboxset-input-horizontal` | Style class for horizontal layout orientation |
| `app-checkboxset-disabled` | Style class applied when the component is disabled |

## Styling Examples

```css
/* Customize default appearance */
.app-checkboxset {
    padding: 16px;
    background-color: #f8f9fa;
    border-radius: 8px;
}

/* Style horizontal layout */
.form-checkboxset-input-horizontal {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
}

/* Customize disabled state */
.app-checkboxset-disabled {
    opacity: 0.6;
    background-color: #e9ecef;
}

/* Custom checkbox item styling */
.app-checkboxset .checkbox-item {
    margin-bottom: 8px;
    padding: 8px 12px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
}

/* Selected item styling */
.app-checkboxset .checkbox-item.selected {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
}
```

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myCheckboxSet.styles = {
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 15
};

// Add custom CSS classes
Page.Widgets.myCheckboxSet.classname = 'my-custom-checkboxset highlight-selection';
```