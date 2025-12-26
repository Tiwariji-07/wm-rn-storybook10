# Callback Events

The Camera component inherits events from its BaseProps class. Camera-specific events are typically handled through method callbacks rather than traditional event bindings.

| Event | Description |
|-------|-------------|
| **On Success** | Triggered when a photo or video is successfully captured. The event provides access to `localFilePath` and captured media data |
| **On Error** | Triggered when camera capture fails or is cancelled by the user |

## Event Usage Examples

### Handling Successful Capture

```javascript
// In the Camera's onSuccess event
// The localFilePath is automatically updated and can be used
function onCameraSuccess() {
    // Display captured image
    Page.Widgets.previewImage.picturesource = Page.Widgets.myCamera.localFilePath;
    
    // Or save to database
    Page.Variables.insertImageVariable.setInput({
        imageData: Page.Widgets.myCamera.datavalue
    });
    Page.Variables.insertImageVariable.invoke();
}
```

### Database Integration

```javascript
// Bind camera output to CRUD variable for database storage
// In Database CRUD Variable input fields:
// Set 'localFile' field to: Page.Widgets.myCamera.datavalue

// On camera success, invoke the database insert
function saveCapturedImage() {
    Page.Variables.CustomerInsertVariable.invoke();
}
```