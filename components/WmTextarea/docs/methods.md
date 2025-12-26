# Methods

Textarea component methods can be accessed through the widget reference: `Page.Widgets.textareaName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getStyleClassName` | none | string \| undefined | Returns the computed CSS class name for styling |

### Method Usage Examples

```javascript
// Get current styling classes
const currentClasses = Page.Widgets.myTextarea.getStyleClassName();
console.log('Current CSS classes:', currentClasses);

// Programmatically interact with textarea
// Focus the textarea
Page.Widgets.commentTextarea.focus();

// Clear the textarea value
Page.Widgets.commentTextarea.datavalue = '';

// Get current value
const currentText = Page.Widgets.commentTextarea.datavalue;

// Set textarea as required
Page.Widgets.commentTextarea.required = true;

// Toggle read-only state
Page.Widgets.commentTextarea.readonly = !Page.Widgets.commentTextarea.readonly;
```