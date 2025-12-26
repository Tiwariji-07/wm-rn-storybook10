# Methods

Access menu methods using: `Page.Widgets.widgetName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `renderMenuItem` | `item: NavigationDataItem, index: number` | `void` | Programmatically render a specific menu item |

## Method Usage Examples

```javascript
// Render a specific menu item
const menuItem = {
  label: 'New Item',
  icon: 'fa fa-plus',
  link: '/new'
};
Page.Widgets.myMenu.renderMenuItem(menuItem, 0);

// Access menu data programmatically
const menuData = Page.Widgets.myMenu.dataset;
console.log('Current menu items:', menuData);

// Dynamically update menu
Page.Widgets.myMenu.dataset = Page.Widgets.myMenu.dataset.concat([
  { label: 'Dynamic Item', icon: 'fa fa-star' }
]);
```