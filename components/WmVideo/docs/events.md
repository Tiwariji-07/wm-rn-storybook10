# Callback Events

| Event | Description |
|-------|-------------|
| `onFullscreenEnter` | Triggered when the video enters fullscreen mode. Use this to handle UI changes or track fullscreen usage |
| `onFullscreenExit` | Triggered when the video exits fullscreen mode. Use this to restore UI state or perform cleanup actions |

### Fullscreen Event Handling

```javascript
// Handle fullscreen enter event
Page.Widgets.myVideo.onFullscreenEnter = function() {
    console.log("Video entered fullscreen mode");
    // Hide other UI elements
    Page.Widgets.navigationBar.show = false;
};

// Handle fullscreen exit event
Page.Widgets.myVideo.onFullscreenExit = function() {
    console.log("Video exited fullscreen mode");
    // Restore UI elements
    Page.Widgets.navigationBar.show = true;
};
```