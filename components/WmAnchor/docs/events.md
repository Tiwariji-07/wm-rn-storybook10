# Callback Events

| Event | Description |
|-------|-------------|
| `onTap` | Triggered when the user taps the anchor. Primary navigation event |
| `onTouchstart` | Fired when user begins touching the anchor |
| `onDoubletap` | Triggered when user double-taps the anchor |
| `onLongtap` | Fired when user performs a long press on the anchor |
| `onTouchend` | Triggered when user lifts finger from the anchor |

### Event Handler Examples

```javascript
// Handle anchor tap with custom navigation logic
Page.myAnchorOnTap = function($event, widget) {
    console.log('Anchor tapped:', widget.caption);
    
    // Custom navigation logic
    if (widget.hyperlink) {
        App.Actions.goToPage_Main();
    }
};

// Track user interactions
Page.myAnchorOnLongtap = function($event, widget) {
    // Show context menu or additional options
    App.Actions.showContextMenu();
};

// Handle touch feedback
Page.myAnchorOnTouchstart = function($event) {
    // Add custom touch visual feedback
    $event.target.style.opacity = 0.7;
};

Page.myAnchorOnTouchend = function($event) {
    // Remove touch visual feedback
    $event.target.style.opacity = 1;
};
```