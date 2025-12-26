# Callback Events

| Event | Description |
|-------|-------------|
| `onTap` | Triggered when the user taps on the progress circle. Receives event parameter (e) |
| `onDoubletap` | Triggered when the user double-taps on the progress circle. Receives event parameter (e) |
| `onLongtap` | Triggered when the user performs a long tap gesture on the progress circle. Receives event parameter (e) |
| `onTouchstart` | Triggered when the user begins touching the progress circle. Receives event parameter (e) |
| `onTouchend` | Triggered when the user stops touching the progress circle. Receives event parameter (e) |

### Event Usage Examples

```javascript
// Handle tap events
Page.Widgets.myProgress.onTap = function(e) {
    console.log('Progress circle tapped');
    // Show detailed progress information
    Page.Actions.showProgressDetails.invoke();
};

// Handle long tap for context menu
Page.Widgets.myProgress.onLongtap = function(e) {
    // Show context menu or additional options
    Page.Actions.showProgressOptions.invoke();
};
```