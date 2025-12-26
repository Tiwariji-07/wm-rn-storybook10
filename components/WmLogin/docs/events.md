# Callback Events

| Event | Description |
|-------|-------------|
| `onLogin` | Triggered when the user submits the login form. Receives form data including username and password for processing authentication |

## Event Usage Examples

### Handling Login Submission
```javascript
// Basic login event handler
Page.Widgets.myLogin.onLogin = function(formData) {
    // Process login credentials
    console.log('Username:', formData.username);
    console.log('Password:', formData.password);
    
    // Call authentication service
    App.Services.authService.authenticate(formData);
};
```

### Advanced Login Processing
```javascript
// Enhanced login with validation and error handling
Page.Widgets.myLogin.onLogin = function(formData) {
    // Validate form data
    if (!formData.username || !formData.password) {
        App.toaster.error('Please enter both username and password');
        return;
    }
    
    // Show loading state
    Page.Widgets.myLogin.disabled = true;
    
    // Process authentication
    App.Variables.loginVariable.setData(formData);
};
```