# Callback Events

| Event | Description |
|-------|-------------|
| `onSuccess` | Fired when a barcode is successfully scanned. Receives event object and component proxy as parameters. |

### Event Usage Examples

```javascript
// Handle successful scan
Page.myBarcodeScannerSuccess = function($event, widget) {
    var scannedValue = widget.datavalue;
    console.log('Barcode scanned:', scannedValue);
    
    // Invoke a service with the scanned data
    Page.Variables.productLookupService.setInput({barcode: scannedValue});
    Page.Variables.productLookupService.update();
};

// Process different barcode formats
Page.myBarcodeScannerSuccess = function($event, widget) {
    var scannedData = widget.datavalue;
    
    if (scannedData.startsWith('978')) {
        // ISBN barcode detected
        Page.Variables.bookLookupService.setInput({isbn: scannedData});
    } else {
        // Regular product barcode
        Page.Variables.productService.setInput({productCode: scannedData});
    }
};
```