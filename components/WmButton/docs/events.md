# Callback Events

| Event | Description |
|-------|-------------|
| onTap | Triggered when the button is tapped. Primary interaction event for mobile. |
| onTouchstart | Fired when user touches the button (touch begins) |
| onTouchend | Fired when user lifts finger from the button (touch ends) |
| onDoubletap | Triggered when button is double-tapped quickly |
| onLongtap | Fired when button is pressed and held for extended time |

### Event Handler Examples

#### Handle Button Tap
```javascript
// In page script
Page.myButtonTap = function($event, widget) {
    console.log('Button tapped!');
    // Perform action
};
```

#### Touch Event Handling
```javascript
// Touch start feedback
Page.myButtonTouchstart = function($event, widget) {
    widget.styles = {opacity: 0.7};
};

// Touch end feedback
Page.myButtonTouchend = function($event, widget) {
    widget.styles = {opacity: 1};
};
```

#### Long Tap Action
```javascript
// Show context menu on long tap
Page.myButtonLongtap = function($event, widget) {
    Page.Widgets.contextMenu.show = true;
};
```