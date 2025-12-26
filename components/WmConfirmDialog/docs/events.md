# Callback Events

| Event | Description |
|-------|-------------|
| `onOpened` | Triggered when the dialog is successfully opened and displayed |
| `onOk` | Fired when user clicks the OK/confirmation button |
| `onCancel` | Triggered when user clicks the Cancel button or closes the dialog |
| `onTap` | General tap event handler for the dialog component |

## Child Component Events

### DialogContent Events
The `dialogcontent` child component inherits standard touch and interaction events.

### DialogActions Events  
The `dialogactions` child component inherits standard touch and interaction events.

## Event Handler Examples

```javascript
// Handle confirmation
Page.confirmDialog1Onok = function($event, widget) {
    // User confirmed the action
    console.log('User confirmed');
    // Perform the confirmed action here
    Page.Actions.deleteItem.invoke();
};

// Handle cancellation
Page.confirmDialog1Oncancel = function($event, widget) {
    // User cancelled the action
    console.log('User cancelled');
    // Optionally perform cleanup or alternative actions
};

// Handle dialog opened
Page.confirmDialog1Onopen = function($event, widget) {
    // Dialog is now visible
    console.log('Dialog opened');
    // Optionally track analytics or setup focus
};
```