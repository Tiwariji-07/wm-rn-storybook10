# Methods

Access Live Form methods through the widget reference: `Page.Widgets.{widgetName}.{methodName}()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `findOperationType` | None | void | Determines the current operation type (INSERT/UPDATE/DELETE) |
| `handleSubmit` | event (optional) | void | Programmatically submits the form |
| `onResultCb` | response, status, operationType, event (optional) | void | Internal callback handler for operation results |

## Built-in Form Operations

Live Form also provides standard CRUD operation methods:

| Method | Parameters | Description |
|--------|------------|-------------|
| `save` | None | Saves the current form (INSERT or UPDATE based on context) |
| `delete` | None | Deletes the current record |
| `new` | None | Prepares form for new record creation |
| `reset` | None | Resets form to its initial state |
| `cancel` | None | Cancels current edit operation |

## Common Method Usage

### Programmatic Form Operations
```javascript
// Save current form data
Page.Widgets.EmployeeForm.save();

// Delete current record
Page.Widgets.EmployeeForm.delete();

// Start new record creation
Page.Widgets.EmployeeForm.new();

// Reset form to original values
Page.Widgets.EmployeeForm.reset();

// Cancel current edit
Page.Widgets.EmployeeForm.cancel();
```

### Custom Submit Handling
```javascript
// Custom form submission with validation
function submitEmployeeForm() {
    // Perform custom validation
    if (validateEmployeeData()) {
        Page.Widgets.EmployeeForm.handleSubmit();
    }
}

// Trigger from button click
Page.submitButton.onClick = submitEmployeeForm;
```

### Operation Type Detection
```javascript
// Determine current operation context
Page.Widgets.EmployeeForm.findOperationType();

// Use in custom logic
function customFormLogic() {
    const operationType = Page.Widgets.EmployeeForm.findOperationType();
    
    if (operationType === 'INSERT') {
        // Handle new record logic
    } else if (operationType === 'UPDATE') {
        // Handle edit logic
    }
}
```