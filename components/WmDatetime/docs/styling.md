# Styling

The datetime component provides several CSS classes for customization:

## Available CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-datetime` | Default style class applied to the datetime component |
| `form-datetime-input-horizontal` | Styles for horizontal datetime input layout |
| `form-timestamp-input-horizontal` | Styles for horizontal timestamp input layout |
| `app-datetime-disabled` | Applied when the component is disabled |
| `app-datetime-rtl` | Applied for right-to-left text direction |
| `app-datetime-with-label` | Applied when the component has a floating label |

## Styling Examples

```css
/* Custom datetime input styling */
.app-datetime {
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

/* Disabled state styling */
.app-datetime-disabled {
  background-color: #f5f5f5;
  opacity: 0.6;
}

/* RTL support */
.app-datetime-rtl {
  text-align: right;
  direction: rtl;
}

/* With floating label */
.app-datetime-with-label {
  margin-top: 20px;
}
```