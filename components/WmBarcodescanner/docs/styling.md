# Styling

The Barcode Scanner component can be styled using CSS classes and inline styles.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-barcodescanner` | Default style class applied to the barcode scanner component |

## Custom Styling Examples

```css
/* Custom scanner button styling */
.app-barcodescanner {
    background-color: #007bff;
    border-radius: 8px;
    padding: 12px 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Large scanner button for accessibility */
.app-barcodescanner.large-scanner {
    min-height: 60px;
    font-size: 18px;
}

/* Icon styling */
.app-barcodescanner .fa-barcode {
    color: white;
    margin-right: 8px;
}

/* Disabled state styling */
.app-barcodescanner.disabled {
    opacity: 0.5;
    background-color: #6c757d;
}
```

### Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myBarcodeScanner.styles = {
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '10px'
};

// Add custom CSS class
Page.Widgets.myBarcodeScanner.classname = 'custom-scanner-style';
```