# Methods

Text widget methods can be accessed through the widget reference: `Page.Widgets.widgetName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getStyleClassName` | none | string \| undefined | Returns the computed CSS class name for the widget's current state |

### Method Usage Examples

```javascript
// Get current style class
var currentClass = Page.Widgets.myTextInput.getStyleClassName();
console.log('Current CSS class:', currentClass);

// Common widget operations (inherited from base)
Page.Widgets.myTextInput.focus(); // Set focus to the input
Page.Widgets.myTextInput.blur(); // Remove focus from the input
Page.Widgets.myTextInput.show(); // Show the widget
Page.Widgets.myTextInput.hide(); // Hide the widget

// Access widget properties
var currentValue = Page.Widgets.myTextInput.datavalue;
Page.Widgets.myTextInput.datavalue = 'New value';

// Trigger validation programmatically
if (Page.Widgets.myTextInput.triggerValidation) {
    Page.Widgets.myTextInput.triggerValidation();
}
```