# Props

## Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | string | null | Text displayed on the scanner button |
| `iconclass` | string | 'fa fa-barcode' | CSS class for the button icon |
| `iconsize` | number | 16 | Size of the icon in pixels |
| `hint` | string | "Click to open the barcode scanner" | Tooltip text for the button |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `barcodeformat` | string | 'ALL' | Barcode format to scan (ALL, QR_CODE, EAN_13, UPC_A, etc.) |
| `datavalue` | any | undefined | Contains the scanned barcode data |
| `disabled` | any | false | Disables the scanner button when true |
| `show` | any | true | Controls component visibility |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Label for screen readers |
| `accessibilityrole` | AccessibilityRole | "imagebutton" | Role for accessibility tools |

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom styling object |
| `classname` | string | null | Additional CSS classes |
| `showindevice` | array | null | Device sizes to show component on |
| `showskeleton` | boolean | undefined | Shows loading skeleton |

### Configure Barcode Format

```javascript
// Scan only QR codes
Page.Widgets.myBarcodeScanner.barcodeformat = 'QR_CODE';

// Scan EAN-13 barcodes (common retail)
Page.Widgets.myBarcodeScanner.barcodeformat = 'EAN_13';

// Allow all supported formats
Page.Widgets.myBarcodeScanner.barcodeformat = 'ALL';
```

### Access Scanned Data

```javascript
// Get the last scanned value
var scannedData = Page.Widgets.myBarcodeScanner.datavalue;
console.log('Scanned:', scannedData);

// Bind scanned data to a variable
Page.Variables.productVariable.setData({barcode: scannedData});
```