# Callback Events

| Event | Description |
|-------|-------------|
| `onClose` | Triggered when the time picker modal is closed without selection. Receives no parameters |
| `onSelect` | Triggered when user confirms a time selection. Receives the selected time as a Date object parameter |
| `onCancel` | Triggered when user cancels the time selection process. Receives no parameters |

## Event Usage Examples

### Handling Time Selection
```javascript
// onSelect event handler
Page.myTimePickeronSelect = function($event, widget, selectedTime) {
    console.log('Selected time:', selectedTime);
    // Update other components with selected time
    Page.Widgets.timeDisplay.caption = selectedTime.toLocaleTimeString();
};
```

### Managing Modal State
```javascript
// onClose event handler
Page.myTimePickeronClose = function($event, widget) {
    console.log('Time picker closed');
    // Hide the picker
    widget.isVisible = false;
};

// onCancel event handler
Page.myTimePickeronCancel = function($event, widget) {
    console.log('Time selection cancelled');
    // Reset to previous value or handle cancellation
    widget.selectedDateTime = Page.Variables.previousTime.dataSet;
    widget.isVisible = false;
};
```