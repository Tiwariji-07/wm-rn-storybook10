# Callback Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onLoad` | (e, this) | Fired when the webview content has finished loading. The event object contains load details and the widget instance |
| `onMessage` | (event, this) | Fired when a message is received from the web content. Used for communication between the app and embedded web content |

## Event Usage Examples

### Handle Load Completion

```javascript
// WebView onLoad event
Page.myWebviewLoad = function(e, widget) {
    console.log("WebView loaded successfully");
    console.log("Load event details:", e);
    
    // Hide loading indicator
    Page.Widgets.loadingIndicator.show = false;
    
    // Execute custom script after load
    widget.executeScript("console.log('WebView is ready');");
};
```

### Handle Messages from Web Content

```javascript
// WebView onMessage event
Page.myWebviewMessage = function(event, widget) {
    console.log("Message received from web content:", event.data);
    
    // Handle different message types
    if (event.data.type === 'notification') {
        Page.Widgets.notificationLabel.caption = event.data.message;
    }
    
    if (event.data.type === 'navigation') {
        // Handle navigation requests from web content
        Page.Actions.navigateToPage.invoke();
    }
};
```