# Methods

Access the Progress Circle widget programmatically using `Page.Widgets.{widgetName}` where `{widgetName}` is the name of your Progress Circle widget.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onLayout` | e: LayoutChangeEvent | void | Public method called when the component layout changes |

### Method Usage Examples

```javascript
// Access widget properties
var currentProgress = Page.Widgets.myProgress.datavalue;
var maxProgress = Page.Widgets.myProgress.maxvalue;

// Calculate progress percentage
var percentage = (currentProgress / maxProgress) * 100;
console.log('Progress: ' + percentage + '%');

// Update progress programmatically
Page.Widgets.myProgress.datavalue = 85;
Page.Widgets.myProgress.type = 'success';
Page.Widgets.myProgress.title = 'Almost Complete';

// Handle layout changes
Page.Widgets.myProgress.onLayout = function(e) {
    console.log('Progress circle layout updated:', e.nativeEvent.layout);
};
```