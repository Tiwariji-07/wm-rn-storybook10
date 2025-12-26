# Methods

Access the Barcode Scanner component through the page widgets: `Page.Widgets.{widgetName}`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onScanTap` | none | void | Programmatically triggers the barcode scanner |

### Method Usage Examples

```javascript
// Trigger scanner programmatically
Page.startScan = function() {
    Page.Widgets.myBarcodeScanner.onScanTap();
};

// Conditional scanning based on user role
Page.checkAndScan = function() {
    if (Page.Variables.currentUser.dataSet.role === 'inventory') {
        Page.Widgets.inventoryScanner.onScanTap();
    } else {
        Page.Actions.showToast.invoke({message: 'Access denied'});
    }
};

// Chain multiple scanners
Page.scanSequence = function() {
    // Start first scanner
    Page.Widgets.primaryScanner.onScanTap();
};

Page.primaryScannerSuccess = function($event, widget) {
    // After first scan, start secondary scanner
    Page.Widgets.secondaryScanner.onScanTap();
};
```