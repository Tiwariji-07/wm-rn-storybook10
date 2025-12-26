# Styling

The radioset component provides several CSS classes for customization:

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-radioset` | Default style class applied to the radioset container |
| `form-radioset-input-horizontal` | Applied when radioset is configured for horizontal layout |
| `app-radioset-disabled` | Applied when the radioset is in disabled state |

## Styling Examples

### Custom Radioset Styling
```css
/* Basic radioset container styling */
.app-radioset {
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 8px;
}

/* Horizontal layout specific styling */
.form-radioset-input-horizontal {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

/* Disabled state styling */
.app-radioset-disabled {
    opacity: 0.5;
    background-color: #e0e0e0;
}
```

### Custom Radio Button Styling
```css
/* Style individual radio buttons */
.app-radioset .radio-button {
    margin: 5px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
}

.app-radioset .radio-button.selected {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
}
```

### Responsive Layout Styling
```css
/* Responsive adjustments */
@media (max-width: 768px) {
    .app-radioset {
        padding: 8px;
    }
    
    .app-radioset .radio-button {
        width: 100%;
        margin: 3px 0;
    }
}

@media (min-width: 769px) {
    .form-radioset-input-horizontal .radio-button {
        flex: 1;
        max-width: calc(50% - 10px);
    }
}
```

## Dynamic Styling

### Conditional Styling
```javascript
// Apply custom classes based on state
Page.myRadiosetChange = function($event, widget, selectedValue) {
    if (selectedValue === 'premium') {
        widget.classname = 'app-radioset premium-theme';
    } else {
        widget.classname = 'app-radioset standard-theme';
    }
};
```

### Style Object Application
```javascript
// Apply styles programmatically
Page.Widgets.myRadioset.styles = {
    container: {
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        padding: 16
    },
    text: {
        fontSize: 16,
        color: '#333'
    }
};
```