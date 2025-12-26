# Props

## Authentication Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onLogin` | Function | `() => {}` | Callback function triggered when login form is submitted |
| `showerror` | boolean | `true` | Controls whether error messages are displayed to the user |

## Display & Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean \| String \| Number | `true` | Controls component visibility and supports conditional rendering |
| `disabled` | any | `false` | Disables the entire login component when set to true |
| `showskeleton` | boolean | `undefined` | Shows loading skeleton while component is initializing |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects on mobile devices |

## Responsive & Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Array of device sizes where component should be visible |
| `classname` | string | `null` | Additional CSS classes for custom styling |
| `styles` | any | `null` | Inline styles object for component customization |

## Common Use Cases

### Basic Login Setup
```javascript
// Configure login callback
Page.Widgets.myLogin.onLogin = function(formData) {
    console.log('Login attempt:', formData);
};

// Enable error display
Page.Widgets.myLogin.showerror = true;
```

### Conditional Login Display
```javascript
// Show login only on specific devices
Page.Widgets.myLogin.showindevice = ['sm', 'md', 'lg'];

// Conditional visibility based on user state
Page.Widgets.myLogin.show = !App.Variables.currentUser.isLoggedIn;
```

### Custom Styling
```javascript
// Apply custom styling
Page.Widgets.myLogin.classname = 'custom-login-theme';
Page.Widgets.myLogin.styles = {
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '20px'
};
```