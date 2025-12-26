# Styling

The Checkbox component supports custom styling through CSS classes and style objects.

## Default CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-checkbox` | Default style class applied to all checkbox components |
| `form-checkbox-input-horizontal` | Styles for horizontal form layout checkboxes |
| `app-checkbox-disabled` | Styles applied when checkbox is disabled |

## Custom Styling

Apply custom styles using the `styles` prop or `classname` prop:

```javascript
// Using styles prop
Page.Widgets.myCheckbox.styles = {
    backgroundColor: '#f0f0f0',
    borderColor: '#007bff',
    borderWidth: 2
};

// Using classname prop
Page.Widgets.myCheckbox.classname = 'custom-checkbox-style';
```

## CSS Customization

```css
/* Custom checkbox styling */
.custom-checkbox-style {
    margin: 10px;
    padding: 5px;
}

/* Override default styles */
.app-checkbox {
    border-radius: 4px;
    transition: all 0.3s ease;
}

/* Disabled state styling */
.app-checkbox-disabled {
    opacity: 0.6;
    pointer-events: none;
}

/* Horizontal form layout */
.form-checkbox-input-horizontal {
    display: flex;
    flex-direction: row;
    align-items: center;
}
```

## Touch Effect Styling

Control touch feedback using the `disabletoucheffect` prop:

```javascript
// Disable touch effects for custom styling
Page.Widgets.myCheckbox.disabletoucheffect = true;
```