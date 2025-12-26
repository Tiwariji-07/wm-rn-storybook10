# Methods

Dialog methods can be accessed through the widget reference using `Page.Widgets.dialogName`.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `open` | none | void | Opens the dialog and displays it |
| `close` | none | void | Closes the dialog and hides it |
| `prepareModalOptions` | content: React.ReactNode, modalService: ModalService | void | Prepares modal configuration options |

### Method Usage Examples

```javascript
// Open dialog on button click
Page.openDialogButtonClick = function($event, widget) {
    Page.Widgets.designdialog1.open();
};

// Close dialog programmatically
Page.closeDialogButtonClick = function($event, widget) {
    Page.Widgets.designdialog1.close();
};

// Conditional dialog opening
Page.showConfirmationDialog = function() {
    if (Page.Variables.userNeedsConfirmation.dataValue) {
        Page.Widgets.confirmationDialog.open();
    }
};

// Close dialog with validation
Page.validateAndCloseDialog = function() {
    if (Page.isFormValid()) {
        Page.Widgets.dataEntryDialog.close();
    } else {
        Page.showValidationErrors();
    }
};
```