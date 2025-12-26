# Methods

Button Group component methods can be accessed through the widget reference: `Page.Widgets.buttonGroupName`

The Button Group component inherits standard widget methods from BaseProps but does not expose additional component-specific methods. Functionality is primarily controlled through props and the management of individual button components within the group.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| No component-specific methods | - | - | Standard widget lifecycle methods are inherited from BaseProps |

## Common Method Use Cases

### Access Button Group Properties

```javascript
// Get current orientation
const isVertical = Page.Widgets.myButtonGroup.vertical;

// Check if component is visible
const isVisible = Page.Widgets.myButtonGroup.show;

// Get applied styles
const currentStyles = Page.Widgets.myButtonGroup.styles;
```