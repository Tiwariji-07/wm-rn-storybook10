# Callback Events

| Event | Description |
|-------|-------------|
| `onClose` | Triggered when the user closes the message by clicking the close button. Receives parameters: (null, this) where 'this' refers to the message widget instance |

### Event Usage Examples

```javascript
// Handle message close event
Page.successMessageOnClose = function($event, widget) {
    console.log('Message closed by user');
    // Perform cleanup or additional actions
};

// Programmatically trigger close event
Page.Widgets.myMessage.onClose();
```