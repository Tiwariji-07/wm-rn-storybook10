# Callback Events

## Main Component Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the active tab changes. Receives parameters: event object, component proxy, new index, and old index |

## TabPane Events

| Event | Description |
|-------|-------------|
| `onLoad` | Called when the tab pane is loaded. Receives parameters: null, component instance |
| `onSelect` | Called when the tab pane is selected. Receives parameters: null, component proxy |
| `onDeselect` | Called when the tab pane is deselected. Receives parameters: null, component proxy |

## TabHeader Events

| Event | Description |
|-------|-------------|
| `onIndexChange` | Called when tab index changes. Receives the new index as parameter |
| `onTap` | Called when tab header is tapped. Receives touch event |
| `onTouchstart` | Called when touch starts on tab header. Receives touch event |
| `onDoubletap` | Called when tab header is double-tapped. Receives touch event |
| `onLongtap` | Called when tab header is long-pressed. Receives touch event |
| `onTouchend` | Called when touch ends on tab header. Receives touch event |

### Event Usage Examples

```javascript
// Handle tab change
Page.myTabsChange = function($event, widget, newIndex, oldIndex) {
    console.log('Tab changed from', oldIndex, 'to', newIndex);
    // Load data for new tab
    if (newIndex === 1) {
        Page.Variables.salesData.update();
    }
};

// Handle tab pane selection
Page.salesPaneSelect = function($event, widget) {
    console.log('Sales tab selected');
    // Refresh sales data
    Page.Variables.salesData.update();
};
```