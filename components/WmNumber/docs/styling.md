# Styling

The Number component provides several CSS classes for customization:

## Default Classes

| Class Name | Description |
|------------|-------------|
| `app-number` | Base styling class applied to all Number components |
| `form-number-input-horizontal` | Horizontal layout styling for form inputs |
| `app-number-disabled` | Applied when the component is in disabled state |
| `app-number-rtl` | Right-to-left text direction styling |
| `app-number-with-label` | Applied when the component has a floating label |

## Styling Examples

```css
/* Custom number input styling */
.app-number {
    border-radius: 8px;
    border-width: 2px;
    font-size: 16px;
}

/* Disabled state customization */
.app-number-disabled {
    opacity: 0.6;
    background-color: #f5f5f5;
}

/* Horizontal form layout */
.form-number-input-horizontal {
    flex-direction: row;
    align-items: center;
}

/* RTL support */
.app-number-rtl {
    text-align: right;
    direction: rtl;
}

/* Label styling */
.app-number-with-label {
    margin-top: 20px;
}
```

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myNumber.styles = {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196f3',
    color: '#1976d2'
};

// Add custom CSS classes
Page.Widgets.myNumber.classname = 'custom-number-input highlight';
```