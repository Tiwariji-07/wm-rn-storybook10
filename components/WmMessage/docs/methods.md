# Methods

Message component methods can be accessed via the widget reference using `Page.Widgets.widgetName.methodName()`.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `showMessage` | none | void | Displays the message component with configured animation |
| `hideMessage` | none | void | Hides the message component |

### Method Usage Examples

```javascript
// Show a success message programmatically
Page.Widgets.successMessage.caption = 'Operation completed successfully!';
Page.Widgets.successMessage.type = 'success';
Page.Widgets.successMessage.showMessage();

// Hide message after a delay
setTimeout(function() {
    Page.Widgets.successMessage.hideMessage();
}, 3000);

// Show different message types based on API response
if (response.success) {
    Page.Widgets.apiMessage.type = 'success';
    Page.Widgets.apiMessage.caption = 'Data updated successfully';
} else {
    Page.Widgets.apiMessage.type = 'error';
    Page.Widgets.apiMessage.caption = 'Failed to update data';
}
Page.Widgets.apiMessage.showMessage();

// Chain message display with animation
Page.Widgets.notificationMessage.animation = 'fadeIn';
Page.Widgets.notificationMessage.animationdelay = 200;
Page.Widgets.notificationMessage.showMessage();
```