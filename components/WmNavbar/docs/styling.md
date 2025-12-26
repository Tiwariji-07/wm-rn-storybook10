# Styling

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-navbar` | Default style class applied to the navbar component |
| `stackedNav` | Applied when navigation items are arranged in a stacked layout |
| `childNav` | Applied to child navigation components |
| `justifiedNav` | Applied when navigation items are justified across available space |

## Style Customization

The navbar component supports custom styling through the `styles` prop and additional CSS classes through the `classname` prop.

```css
/* Custom navbar styling */
.app-navbar {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
}

.app-navbar.stackedNav {
    flex-direction: column;
}

.app-navbar.justifiedNav {
    justify-content: space-between;
}

.app-navbar.childNav {
    margin-left: 20px;
    border-left: 2px solid #007bff;
}
```

## Responsive Styling

The component automatically applies responsive styles based on the `showindevice` prop, allowing for device-specific styling and layout adjustments.