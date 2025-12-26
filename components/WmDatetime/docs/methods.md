# Methods

You can interact with the datetime component programmatically using `Page.Widgets.{widgetName}` to access the widget instance.

## Available Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getStyleClassName` | none | `string \| undefined` | Returns the computed style class name for the component |

### Common Method Use Cases

```javascript
// Get the current style class
const styleClass = Page.Widgets.myDatetime.getStyleClassName();

// Set a new value programmatically
Page.Widgets.myDatetime.datavalue = new Date();

// Check if component is disabled
const isDisabled = Page.Widgets.myDatetime.disabled;

// Toggle read-only mode
Page.Widgets.myDatetime.readonly = !Page.Widgets.myDatetime.readonly;
```