# Styling

The Message component provides predefined CSS classes for different message types and variants. You can customize the appearance using these classes or by applying custom styles.

## Base Classes

| Class Name | Description |
|------------|-------------|
| `app-message` | Default base style class for all message components |
| `app-message-rtl` | Right-to-left layout support for internationalization |

## Dark Variant Classes

| Class Name | Description |
|------------|-------------|
| `success-dark-message` | Dark theme styling for success messages |
| `error-dark-message` | Dark theme styling for error messages |
| `warning-dark-message` | Dark theme styling for warning messages |
| `info-dark-message` | Dark theme styling for info messages |
| `loading-dark-message` | Dark theme styling for loading messages |

## Light Variant Classes

| Class Name | Description |
|------------|-------------|
| `success-light-message` | Light theme styling for success messages |
| `error-light-message` | Light theme styling for error messages |
| `warning-light-message` | Light theme styling for warning messages |
| `info-light-message` | Light theme styling for info messages |
| `loading-light-message` | Light theme styling for loading messages |

### Custom Styling Examples

```javascript
// Apply custom CSS class
Page.Widgets.customMessage.classname = 'my-custom-message';

// Apply inline styles
Page.Widgets.styledMessage.styles = {
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 16,
    marginTop: 10
};

// Customize close icon
Page.Widgets.iconMessage.closeiconclass = 'fa fa-times';
```

The styling automatically adapts based on the `type` and `variant` props, ensuring consistent visual feedback across your application.