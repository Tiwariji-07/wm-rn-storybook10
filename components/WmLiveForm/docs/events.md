# Callback Events

Live Form provides comprehensive event callbacks that allow you to customize form behavior at different stages of the CRUD operations.

| Event | Description |
|-------|-------------|
| `onBeforeservicecall` | Triggered before any CRUD operation. Use for validation and data modification. Return false to prevent the operation. |
| `onResult` | Called after any operation completes, regardless of success or failure |
| `onSuccess` | Triggered when a CRUD operation completes successfully |
| `onError` | Called when a CRUD operation fails |
| `onBeforerender` | Executed before form fields are rendered, allows field customization |
| `onBeforesubmit` | Triggered just before form submission, final validation opportunity |
| `onSubmit` | Called when form is submitted |

## Event Implementation Examples

### Validation Before Save
```javascript
Page.liveform1Beforeservicecall = function($event, $operation, $data) {
    // $operation: INSERT, UPDATE, or DELETE
    // $data: form data to be sent to server
    
    if ($operation === 'INSERT' && $data.password) {
        if ($data.password.length < 6) {
            App.toaster.error('Password must be at least 6 characters');
            return false; // Prevents the operation
        }
    }
    return true;
};
```

### Handle Success Response
```javascript
Page.liveform1Success = function($event, $operation, $data) {
    if ($operation === 'INSERT') {
        App.toaster.success('Employee created successfully!');
        // Navigate to list page
        Page.Actions.goToEmployeeList.invoke();
    }
};
```

### Error Handling
```javascript
Page.liveform1Error = function($event, $operation, $data) {
    console.error('Operation failed:', $operation, $data);
    App.toaster.error('Failed to save employee data');
};
```