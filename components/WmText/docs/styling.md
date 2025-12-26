# Styling

The Text widget provides several CSS classes for customizing appearance and behavior:

## Default Style Classes

| Class Name | Description |
|------------|-------------|
| `app-text` | Default base style class applied to all text inputs |
| `app-input` | General input styling class |
| `app-text-disabled` | Applied when the input is disabled |
| `app-text-rtl` | Applied for right-to-left text direction |
| `app-text-with-label` | Applied when floating label is present |

## Form-Specific Classes

| Class Name | Description |
|------------|-------------|
| `form-text-input-horizontal` | Horizontal form layout styling for text inputs |
| `form-password-input-horizontal` | Horizontal form layout styling for password inputs |

## Custom Styling Examples

```css
/* Custom text input styling */
.app-text {
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 12px 16px;
    font-size: 16px;
}

/* Focus state */
.app-text:focus {
    border-color: #2196F3;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
}

/* Disabled state */
.app-text-disabled {
    background-color: #f5f5f5;
    color: #9e9e9e;
    opacity: 0.6;
}

/* Error state */
.app-text.error {
    border-color: #f44336;
    background-color: #fff5f5;
}

/* Floating label styling */
.app-text-with-label {
    padding-top: 20px;
}

/* RTL support */
.app-text-rtl {
    direction: rtl;
    text-align: right;
}
```

## Platform-Specific Styling

The Text widget automatically applies platform-appropriate styling for iOS and Android, but can be customized using the `styles` prop:

```javascript
// Apply custom styles
Page.Widgets.myTextInput.styles = {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16
};
```