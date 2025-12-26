# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when a menu item is selected. Parameters: `(null, this, item)` where item is the selected menu data |
| `onTap` | Triggered when the menu trigger is tapped. Parameters: `(e, this.proxy)` where e is the event object |

## Event Usage Examples

```javascript
// Handle menu item selection
Page.Widgets.myMenu.onSelect = function(event, widget, item) {
  console.log('Selected item:', item);
  // Navigate or perform action based on selected item
  if (item.action) {
    // Execute custom action
    eval(item.action);
  }
};

// Handle menu trigger tap
Page.Widgets.myMenu.onTap = function(event, widget) {
  console.log('Menu triggered');
  // Custom logic before menu opens
};
```