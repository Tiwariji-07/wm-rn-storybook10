# Methods

Tile component methods can be accessed through the widget reference: `Page.Widgets.tileName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getBackground` | None | React.JSX.Element \| null | Returns the background element of the tile component |

### Method Usage Examples

```javascript
// Access tile background element
const backgroundElement = Page.Widgets.myTile.getBackground();
if (backgroundElement) {
    // Perform background-specific operations
    console.log('Tile has custom background');
}
```

### Common Widget Operations

```javascript
// Show/hide tile programmatically
Page.Widgets.myTile.show = true;

// Apply custom styling
Page.Widgets.myTile.styles = {
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    elevation: 2
};

// Add conditional classes
Page.Widgets.myTile.classname = 'highlighted-tile premium-content';
```