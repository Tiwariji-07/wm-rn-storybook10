# Styling

The Tile component provides several CSS classes for customization:

## Default Classes

| Class Name | Description |
|------------|-------------|
| `app-tile` | Base styling class applied to all tile components |
| `tile-template-text` | Styling for text content within tiles |
| `well` | Additional container styling for depth effect |

## Custom Styling

```css
/* Override default tile appearance */
.app-tile {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin: 8px;
    padding: 16px;
}

/* Text content styling */
.tile-template-text {
    font-size: 14px;
    color: #333333;
    line-height: 1.4;
}

/* Well effect for depth */
.well {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 4px;
}
```

## Conditional Styling

```javascript
// Apply conditional classes based on state
Page.Widgets.myTile.classname = Page.Variables.isActive ? 'active-tile' : 'inactive-tile';
```

## Touch States

```css
/* Touch feedback styling */
.app-tile:active {
    transform: scale(0.98);
    opacity: 0.8;
}

/* Disabled state */
.app-tile.disabled {
    opacity: 0.5;
    pointer-events: none;
}
```