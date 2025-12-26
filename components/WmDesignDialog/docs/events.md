# Callback Events

| Event | Description |
|-------|-------------|
| `onOpened` | Triggered when the dialog is fully opened and visible. Receives parameters: (null, this) |
| `onClose` | Triggered when the dialog is closed through any method (close button, ESC key, or programmatic). Receives parameters: (null, this) |

### Event Usage Examples

```javascript
// Handle dialog opened event
Page.myDialogOpened = function(event, widget) {
    console.log('Dialog opened successfully');
    // Initialize dialog content or focus elements
};

// Handle dialog close event
Page.myDialogClose = function(event, widget) {
    console.log('Dialog was closed');
    // Cleanup or validation logic
};
```