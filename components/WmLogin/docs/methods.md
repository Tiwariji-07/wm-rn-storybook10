# Methods

Access the Login component methods through the widget reference: `Page.Widgets.loginWidgetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `doLogin` | `formData: any` | void | Programmatically triggers the login process with provided form data |
| `onLoginSuccess` | `response: AxiosResponse` | void | Handles successful login response from authentication service |
| `onLoginError` | `error: AxiosError` | void | Handles login error responses and displays appropriate error messages |

## Method Usage Examples

### Programmatic Login
```javascript
// Trigger login programmatically
const loginData = {
    username: 'user@example.com',
    password: 'password123'
};

Page.Widgets.myLogin.doLogin(loginData);
```

### Handle Login Success
```javascript
// Override success handler for custom behavior
Page.Widgets.myLogin.onLoginSuccess = function(response) {
    console.log('Login successful:', response.data);
    
    // Store user data
    App.Variables.currentUser.setData(response.data.user);
    
    // Navigate to dashboard
    App.Actions.goToPage_Dashboard.invoke();
    
    // Show success message
    App.toaster.success('Welcome back!');
};
```

### Handle Login Errors
```javascript
// Custom error handling
Page.Widgets.myLogin.onLoginError = function(error) {
    console.error('Login failed:', error);
    
    // Display specific error messages
    if (error.response?.status === 401) {
        App.toaster.error('Invalid username or password');
    } else if (error.response?.status === 429) {
        App.toaster.error('Too many login attempts. Please try again later.');
    } else {
        App.toaster.error('Login failed. Please check your connection.');
    }
    
    // Re-enable form
    Page.Widgets.myLogin.disabled = false;
};
```

### Complete Login Flow
```javascript
// Comprehensive login implementation
Page.onReady = function() {
    // Configure login component
    Page.Widgets.myLogin.onLogin = function(formData) {
        Page.Widgets.myLogin.doLogin(formData);
    };
    
    // Success handling
    Page.Widgets.myLogin.onLoginSuccess = function(response) {
        App.Variables.userSession.setData(response.data);
        App.Actions.navigateToDashboard.invoke();
    };
    
    // Error handling
    Page.Widgets.myLogin.onLoginError = function(error) {
        Page.Widgets.myLogin.showerror = true;
        console.error('Authentication failed:', error);
    };
};
```