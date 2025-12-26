# Styling

The Toggle widget provides several CSS classes for customization:

## Available CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-toggle` | Default style class applied to all toggle widgets |
| `form-toggle-input-horizontal` | Styles for horizontal layout in forms |
| `app-toggle-on` | Applied when toggle is in the checked/on state |
| `app-toggle-off` | Applied when toggle is in the unchecked/off state |
| `app-toggle-rtl` | Styles for right-to-left language support |
| `app-toggle-disabled` | Applied when toggle is disabled |

## Styling Examples

```css
/* Customize default toggle appearance */
.app-toggle {
    border-radius: 20px;
    transition: all 0.3s ease;
}

/* Style the checked state */
.app-toggle-on {
    background-color: #4CAF50;
    border-color: #45a049;
}

/* Style the unchecked state */
.app-toggle-off {
    background-color: #ccc;
    border-color: #999;
}

/* Custom disabled state */
.app-toggle-disabled {
    opacity: 0.5;
    pointer-events: none;
}

/* Right-to-left support */
.app-toggle-rtl {
    direction: rtl;
}

/* Custom toggle sizes */
.toggle-large {
    transform: scale(1.2);
}

.toggle-small {
    transform: scale(0.8);
}
```

## Dynamic Styling

```javascript
// Apply custom classes dynamically
Page.Widgets.myToggle.classname = "toggle-large custom-primary";

// Apply inline styles
Page.Widgets.myToggle.styles = {
    backgroundColor: '#007bff',
    borderRadius: '25px'
};
```