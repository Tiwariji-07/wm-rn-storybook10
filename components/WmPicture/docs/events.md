# Callback Events

| Event | Description |
|-------|-------------|
| `onTap` | Triggered when the user taps on the picture component |
| `onTouchstart` | Triggered when the user begins touching the picture component |
| `onDoubletap` | Triggered when the user double-taps on the picture component |
| `onLongtap` | Triggered when the user performs a long press on the picture component |
| `onTouchend` | Triggered when the user stops touching the picture component |

### Event Handler Examples

```javascript
// Handle tap events
Page.myPictureOnTap = function($event, widget) {
    console.log("Picture tapped");
    // Add custom logic here
};

// Handle double tap for zoom functionality
Page.myPictureOnDoubletap = function($event, widget) {
    console.log("Picture double-tapped - implementing zoom");
    // Implement zoom logic
};

// Handle long tap for context menu
Page.myPictureOnLongtap = function($event, widget) {
    console.log("Picture long-tapped - showing context menu");
    // Show context menu or options
};
```