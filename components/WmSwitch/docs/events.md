# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the switch value changes. Parameters: `(undefined, this.proxy, value, oldVal)` |
| `onTap` | Triggered when user taps the switch. Parameters: `(event, this.proxy)` |
| `onTouchstart` | Triggered when user starts touching the switch. Parameters: `(e)` |
| `onDoubletap` | Triggered when user double-taps the switch. Parameters: `(e)` |
| `onLongtap` | Triggered when user performs a long tap on the switch. Parameters: `(e)` |
| `onTouchend` | Triggered when user ends touch interaction. Parameters: `(e)` |

### Event Handler Examples

#### Handle Value Changes
```javascript
// onChange event handler
Page.mySwitchChange = function(widget, newValue, oldValue) {
    console.log('Switch changed from', oldValue, 'to', newValue);
    
    // Perform actions based on new value
    if (newValue === 'high') {
        Page.Widgets.alertPanel.show = true;
    }
};
```

#### Handle Touch Interactions
```javascript
// onTap event handler
Page.mySwitchTap = function(event, widget) {
    console.log('Switch tapped');
    // Custom tap logic here
};

// onLongtap event handler for additional options
Page.mySwitchLongtap = function(event) {
    // Show context menu or additional options
    Page.Actions.showOptionsDialog.invoke();
};
```