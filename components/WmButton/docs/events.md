# Callback Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onTap` | (e) | Triggered when the button is tapped |
| `onTouchstart` | (e) | Triggered when touch begins on the button |
| `onDoubletap` | (e) | Triggered when the button is double-tapped |
| `onLongtap` | (e) | Triggered when the button is pressed and held |
| `onTouchend` | (e) | Triggered when touch ends on the button |

### Event Usage Examples

```javascript
// Handle tap event
Page.myButtonTap = function($event, widget) {
    console.log('Button tapped!');
    // Perform action
};

// Handle long tap for additional actions
Page.myButtonLongtap = function($event, widget) {
    console.log('Long tap detected');
    // Show context menu or additional options
};

// Handle double tap
Page.myButtonDoubletap = function($event, widget) {
    console.log('Double tap detected');
    // Quick action
};

// Touch feedback
Page.myButtonTouchstart = function($event, widget) {
    widget.classname = 'btn-primary pressed';
};

Page.myButtonTouchend = function($event, widget) {
    widget.classname = 'btn-primary';
};
```