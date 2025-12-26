# Methods

Alert Dialog widgets can be accessed programmatically through the Page.Widgets object using the widget's name.

## Available Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `open()` | none | void | Opens and displays the alert dialog |
| `close()` | none | void | Closes and hides the alert dialog |
| `getMessageStyle(type)` | type: string | void | Returns the appropriate styling for the specified alert type |

### Common Method Use Cases

```javascript
// Open an alert dialog on button click
Page.showAlertClick = function($event, widget) {
    Page.Widgets.alertdialog1.open();
};

// Close dialog programmatically
Page.closeAlertClick = function($event, widget) {
    Page.Widgets.alertdialog1.close();
};

// Dynamic alert with different types
Page.showDynamicAlert = function(alertType, message) {
    var alertWidget = Page.Widgets.alertdialog1;
    alertWidget.alerttype = alertType;
    alertWidget.message = message;
    alertWidget.getMessageStyle(alertType);
    alertWidget.open();
};

// Show confirmation dialog
Page.confirmAction = function() {
    var confirmDialog = Page.Widgets.confirmAlert;
    confirmDialog.title = "Confirm Action";
    confirmDialog.message = "Are you sure you want to proceed?";
    confirmDialog.alerttype = "warning";
    confirmDialog.open();
};
```

### Programmatic Dialog Control

```javascript
// Chain multiple dialogs
Page.showSequentialAlerts = function() {
    Page.Widgets.alert1.onOk = function() {
        Page.Widgets.alert1.close();
        setTimeout(function() {
            Page.Widgets.alert2.open();
        }, 500);
    };
    Page.Widgets.alert1.open();
};
```