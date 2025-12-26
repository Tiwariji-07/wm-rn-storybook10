# Methods

Access the Currency widget through the page reference: `Page.Widgets.{widgetName}`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onPropertyChange` | `name: string, $new: any, $old: any` | `void` | Handles property value changes |
| `getStyleClassName` | - | `string \| undefined` | Returns the computed CSS class name |
| `renderTextSkeleton` | `props: any` | `React.ReactNode` | Renders loading skeleton for the component |

### Common Method Usage

```javascript
// Programmatically update currency value
Page.Widgets.myCurrency.datavalue = 1250.75;

// Get current formatted value
var displayValue = Page.Widgets.myCurrency.displayValue;

// Check if field is valid
if (Page.Widgets.myCurrency.required && !Page.Widgets.myCurrency.datavalue) {
    console.log('Currency field is required');
}

// Reset currency field
Page.Widgets.myCurrency.datavalue = null;
Page.Widgets.myCurrency.displayValue = '';
```