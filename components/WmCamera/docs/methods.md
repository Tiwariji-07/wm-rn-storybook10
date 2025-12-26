# Methods

Access the Camera component methods through the Page widgets: `Page.Widgets.{cameraName}.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onCameraTap` | none | void | Programmatically triggers the camera interface |

## Method Usage Examples

### Programmatic Camera Activation

```javascript
// Trigger camera from another widget or event
function openCameraFromButton() {
    Page.Widgets.myCamera.onCameraTap();
}

// Example: Open camera when page loads
Page.onReady = function() {
    // Open camera after 2 seconds
    setTimeout(() => {
        Page.Widgets.myCamera.onCameraTap();
    }, 2000);
};
```

### Conditional Camera Access

```javascript
// Check permissions before opening camera
function safeCameraOpen() {
    if (!Page.Widgets.myCamera.disabled) {
        Page.Widgets.myCamera.onCameraTap();
    } else {
        // Handle disabled state
        Page.Actions.showToast.invoke({
            message: 'Camera is currently disabled'
        });
    }
}
```