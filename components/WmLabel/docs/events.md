# Callback Events

| Event | Description |
|-------|-------------|
| `onTap` | Triggered when the label is tapped. Receives (null, component proxy) as parameters |
| `onTouchstart` | Triggered when touch interaction begins. Receives touch event as parameter |
| `onDoubletap` | Triggered when the label is double-tapped. Receives touch event as parameter |
| `onLongtap` | Triggered when the label is long-pressed. Receives touch event as parameter |
| `onTouchend` | Triggered when touch interaction ends. Receives touch event as parameter |

### Event Usage Examples

```javascript
// Handle tap events
Page.myLabelTap = function($event, widget) {
    console.log('Label tapped:', widget.caption);
};

// Handle long tap for context actions
Page.myLabelLongtap = function($event, widget) {
    // Show context menu or additional options
    Page.Actions.showContextMenu.invoke();
};

// Handle double tap for quick actions
Page.myLabelDoubletap = function($event, widget) {
    // Navigate or perform quick action
    Page.Actions.navigateToDetails.invoke();
};
```