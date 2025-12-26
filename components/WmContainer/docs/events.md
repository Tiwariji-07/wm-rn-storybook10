# Callback Events

| Event | Description |
|-------|-------------|
| `onLoad` | Triggered when the container component finishes loading and initializing |
| `onTap` | Fired when user performs a single tap gesture on the container |
| `onDoubletap` | Triggered when user performs a double tap gesture on the container |
| `onLongtap` | Fired when user performs a long press gesture on the container (React Native only) |
| `onTouchstart` | Triggered when user begins touching the container |
| `onTouchend` | Fired when user ends touch interaction with the container |

### Event Usage Examples

```javascript
// Handle container load
Page.Widgets.myContainer.onLoad = function() {
    console.log("Container loaded and ready");
    // Initialize container content or state
};

// Handle tap interactions
Page.Widgets.myContainer.onTap = function(e) {
    console.log("Container tapped", e);
    // Handle container selection or navigation
};

// Handle long press for context menu
Page.Widgets.myContainer.onLongtap = function(e) {
    // Show context menu or additional options
    Page.Actions.showContextMenu.invoke();
};
```