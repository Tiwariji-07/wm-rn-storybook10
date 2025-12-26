# Callback Events

| Event | Description |
|-------|-------------|
| `onOpened` | Triggered when the alert dialog is fully opened and displayed. Receives parameters: (null, this) |
| `onOk` | Triggered when the user clicks the OK button or confirms the alert. Receives parameters: (null, this) |
| `onTap` | Triggered when the user taps anywhere on the dialog. Receives parameters: (null, this.proxy) |

### Event Usage Examples

```javascript
// Handle dialog opened event
Page.alertdialog1Opened = function(event, widget) {
    console.log("Alert dialog has been opened");
    // Perform actions after dialog opens
};

// Handle OK button click
Page.alertdialog1Ok = function(event, widget) {
    console.log("User confirmed the alert");
    // Process user confirmation
    widget.close();
};

// Handle dialog tap event
Page.alertdialog1Tap = function(event, widget) {
    console.log("Dialog was tapped");
    // Handle tap interaction
};
```