# Styling

The Container component provides several built-in CSS classes for different visual styles and layouts.

## Available Style Classes

| Class Name | Description |
|------------|-------------|
| `app-container` | Default styling for standard container layout and spacing |
| `media-body` | Styling for container used in media object layouts |
| `media-right` | Right-aligned container styling for media layouts |
| `app-elevated-container` | Container with elevated appearance (shadow/depth) |
| `app-outlined-container` | Container with border outline styling |

## Styling Examples

```css
/* Custom container with elevated appearance */
.my-elevated-container {
    background: #ffffff;
    border-radius: 8px;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.1;
    shadow-radius: 4;
    elevation: 3;
}

/* Media layout container */
.media-container {
    flex-direction: row;
    align-items: center;
    padding: 12px;
}

/* Sticky header container */
.sticky-header-container {
    background-color: rgba(255, 255, 255, 0.95);
    border-bottom-width: 1px;
    border-bottom-color: #e0e0e0;
}
```

### Conditional Styling

Use the Conditional Class property to apply styles based on data or state:

```javascript
// Apply different styles based on container state
Page.Widgets.myContainer.conditionalclass = {
    'app-elevated-container': Variables.isHighlighted.dataValue,
    'app-outlined-container': !Variables.isHighlighted.dataValue
};
```