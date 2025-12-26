# Callback Events

| Event | Description |
|-------|-------------|
| `onOpened` | Triggered when the bottom sheet is opened. Parameters: `(null, this)` |
| `onClose` | Triggered when the bottom sheet is closed. Parameters: `(null, this)` |
| `onExpand` | Triggered when the bottom sheet is expanded to full height. Parameters: `(null, this)` |
| `onCollapse` | Triggered when the bottom sheet is collapsed to initial height. Parameters: `(null, this)` |
| `onDraghandleiconclick` | Triggered when the drag handle icon is clicked. Parameters: `(null, this)` |

### Event Usage Examples

```javascript
// Handle bottom sheet open event
Page.myBottomSheetOnOpened = function($event, widget) {
    console.log('Bottom sheet opened');
    // Custom logic when sheet opens
};

// Handle bottom sheet close event
Page.myBottomSheetOnClose = function($event, widget) {
    console.log('Bottom sheet closed');
    // Cleanup or save state
};

// Handle expand/collapse events
Page.myBottomSheetOnExpand = function($event, widget) {
    console.log('Sheet expanded');
};

Page.myBottomSheetOnCollapse = function($event, widget) {
    console.log('Sheet collapsed');
};
```