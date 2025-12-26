# Methods

The Number component can be accessed and controlled programmatically using `Page.Widgets.{widgetName}` in your scripts.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getStyleClassName` | none | `string \| undefined` | Returns the computed CSS class names for styling |
| `renderTextSkeleton` | none | `React.ReactNode` | Renders the skeleton loading state component |

### Common Method Usage

```javascript
// Access widget properties
var currentValue = Page.Widgets.myNumber.datavalue;
var isDisabled = Page.Widgets.myNumber.disabled;

// Programmatically set values
Page.Widgets.myNumber.datavalue = 42.5;
Page.Widgets.myNumber.placeholder = "Enter amount";

// Control widget state
Page.Widgets.myNumber.readonly = true;
Page.Widgets.myNumber.show = false;

// Trigger validation
Page.Widgets.myNumber.triggerValidation();

// Get computed styles
var className = Page.Widgets.myNumber.getStyleClassName();
console.log("Applied CSS classes:", className);
```

### Validation Methods

```javascript
// Custom validation function
Page.validateNumberRange = function(value) {
    var numberWidget = Page.Widgets.myNumber;
    if (value < numberWidget.minvalue || value > numberWidget.maxvalue) {
        numberWidget.onError(null, numberWidget, value, null);
        return false;
    }
    return true;
};

// Reset widget state
Page.resetNumberInput = function() {
    Page.Widgets.myNumber.datavalue = null;
    Page.Widgets.myNumber.displayValue = "";
};
```