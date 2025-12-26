# Methods

Grid layout components can be accessed programmatically using the WaveMaker page widget reference: `Page.Widgets.gridName`

## LayoutGrid Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getBackground` | none | React.JSX.Element \| null | Returns the background element for the grid layout |

## GridRow Methods

The `gridrow` component inherits standard container methods but does not expose additional custom methods.

## GridColumn Methods

The `gridcolumn` component inherits standard container methods but does not expose additional custom methods.

### Common Grid Operations

```javascript
// Access grid background
const backgroundElement = Page.Widgets.myGrid.getBackground();

// Programmatically show/hide grid
Page.Widgets.myGrid.show = false;
Page.Widgets.myGrid.show = true;

// Enable/disable grid
Page.Widgets.myGrid.disabled = true;
Page.Widgets.myGrid.disabled = false;

// Access nested components
Page.Widgets.myGridRow.show = false;
Page.Widgets.myGridColumn.columnwidth = 8;
```