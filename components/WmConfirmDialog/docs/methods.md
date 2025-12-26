# Methods

Confirm Dialog methods can be accessed through the widget reference: `Page.Widgets.widgetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `open` | none | void | Opens the confirm dialog and displays it to the user |
| `close` | none | void | Closes the dialog and removes it from view |
| `getMessageStyle` | type: string | void | Retrieves styling information for the message content |

## Common Method Use Cases

```javascript
// Open dialog on button click
Page.deleteButtonClick = function($event, widget) {
    Page.Widgets.confirmDialog1.open();
};

// Programmatically close dialog
Page.cancelActionClick = function($event, widget) {
    Page.Widgets.confirmDialog1.close();
};

// Conditional dialog opening
Page.conditionalDelete = function(itemId) {
    if (itemId && itemId > 0) {
        Page.Widgets.confirmDialog1.message = "Delete item #" + itemId + "?";
        Page.Widgets.confirmDialog1.open();
    }
};

// Chain dialog actions
Page.confirmAndProceed = function() {
    Page.Widgets.confirmDialog1.open();
    
    // Set up success handler
    Page.confirmDialog1Onok = function() {
        // Perform action
        Page.Actions.saveData.invoke();
        // Close dialog
        Page.Widgets.confirmDialog1.close();
    };
};

// Get message styling
Page.setupDialog = function() {
    Page.Widgets.confirmDialog1.getMessageStyle('warning');
};
```