# Styling

The Login component provides several CSS classes for customization:

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-login` | Default style class applied to the main login container |
| `app-login-username` | Styles the username input field container |
| `app-login-password` | Styles the password input field container |

## Custom Styling Examples

### Basic Login Styling
```css
.app-login {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 24px;
    margin: 16px;
}

.app-login-username {
    margin-bottom: 16px;
}

.app-login-username input {
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
}

.app-login-password {
    margin-bottom: 20px;
}

.app-login-password input {
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
}
```

### Themed Login Styling
```css
/* Dark theme login */
.app-login.dark-theme {
    background-color: #2d3748;
    border: 1px solid #4a5568;
}

.app-login.dark-theme .app-login-username input,
.app-login.dark-theme .app-login-password input {
    background-color: #4a5568;
    border-color: #718096;
    color: #ffffff;
}

/* Branded login */
.app-login.branded {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.app-login.branded .app-login-username input,
.app-login.branded .app-login-password input {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    placeholder-color: rgba(255, 255, 255, 0.7);
}
```

### Responsive Login Styling
```css
/* Mobile-first responsive design */
.app-login {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .app-login {
        margin: 8px;
        padding: 16px;
    }
    
    .app-login-username input,
    .app-login-password input {
        font-size: 18px; /* Better touch targets on mobile */
        padding: 14px;
    }
}

@media (min-width: 769px) {
    .app-login {
        margin: 24px auto;
        padding: 32px;
    }
}
```