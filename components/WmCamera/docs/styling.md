# Styling

The Camera component provides styling through CSS classes and inline styles for customizing its appearance.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-camera` | Default style class applied to the camera component |
| Custom classes via `classname` | Additional styling classes |
| Icon classes via `iconclass` | Styling for the camera icon |

## Styling Examples

### Custom Camera Button Styling

```css
/* Custom camera button appearance */
.app-camera {
    background-color: #007bff;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.app-camera:active {
    background-color: #0056b3;
    transform: scale(0.95);
}

/* Custom icon styling */
.custom-camera-icon {
    color: white;
    font-size: 18px;
}
```

### Responsive Camera Button

```css
/* Responsive sizing */
.responsive-camera {
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Different styles for device sizes */
@media (max-width: 768px) {
    .responsive-camera {
        min-height: 50px;
        font-size: 14px;
    }
}
```

### Inline Styling

```javascript
// Apply inline styles programmatically
Page.Widgets.myCamera.styles = {
    backgroundColor: '#28a745',
    borderRadius: '50%',
    width: 80,
    height: 80
};

// Update icon size
Page.Widgets.myCamera.iconsize = 24;
```