# Callback Events

| Event | Description |
|-------|-------------|
| `onSuccess` | Triggered when form submission succeeds. Parameters: `(null, this.proxy, response)` |
| `onError` | Triggered when form submission fails. Parameters: `(null, this.proxy, response)` |
| `onBeforerender` | Called before form fields are rendered. Parameters: `(fields, this.proxy)` |
| `onBeforesubmit` | Called before form submission, can prevent submission by returning false. Parameters: `(null, this.proxy, formData)` |
| `onSubmit` | Triggered when form is submitted. Parameters: `(null, this.proxy, formData)` |
| `onResult` | Called after receiving response (success or error). Parameters: `(null, this.proxy, response)` |
| `onTap` | Triggered when form is tapped/clicked. Parameters: `(null, this.proxy)` |
| `onClose` | Called when form dialog is closed. Parameters: `(null, this)` |

## Child Component Events

### Form Field Events

| Event | Description |
|-------|-------------|
| `onValidate` | Triggered during field validation. Parameters: `()` |
| `onChange` | Called when field value changes. Parameters: `(undefined, this, $new, $old)` |

### Example Event Handlers

```javascript
// Handle form submission with validation
Page.myFormBeforesubmit = function($event, widget, formData) {
    // Validate required fields
    if (!formData.email) {
        Page.Actions.showNotification.invoke({
            message: 'Email is required',
            class: 'error'
        });
        return false; // Prevent submission
    }
    
    // Modify data before submission
    formData.timestamp = new Date();
    return true;
};

// Handle successful submission
Page.myFormSuccess = function($event, widget, response) {
    console.log('Form submitted successfully:', response);
    // Navigate to success page or show confirmation
};

// Handle submission errors
Page.myFormError = function($event, widget, error) {
    console.error('Form submission failed:', error);
    // Show user-friendly error message
};
```