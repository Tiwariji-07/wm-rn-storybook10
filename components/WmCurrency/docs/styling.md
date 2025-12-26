# Styling

The Currency component supports various CSS classes for customization:

## Available CSS Classes

| Class Name | Description |
|------------|-------------|
| `.app-currency` | Default base styling for the currency component |
| `.form-currency-input-horizontal` | Horizontal layout styling for form integration |
| `.app-currency-rtl` | Right-to-left text direction support |
| `.app-currency-disabled` | Styling applied when component is disabled |
| `.app-currency-with-label` | Additional styling when component has a label |

## Style Customization

```css
/* Custom currency input styling */
.app-currency {
    border-radius: 8px;
    border: 2px solid #e1e1e1;
    padding: 12px;
}

/* Disabled state styling */
.app-currency-disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
}

/* RTL support */
.app-currency-rtl {
    direction: rtl;
    text-align: right;
}

/* With label styling */
.app-currency-with-label {
    margin-top: 8px;
}
```

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myCurrency.styles = {
    backgroundColor: '#f0f8ff',
    borderColor: '#4169e1',
    fontSize: '16px'
};

// Add custom CSS classes
Page.Widgets.myCurrency.classname = 'my-custom-currency';
```