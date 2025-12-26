# Methods

Access the `linearlayout` widget in your script using: `Page.Widgets.widgetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getStyles` | `props: WmLinearlayoutProps` | `void` | Computes and applies styles based on the provided props |

### Using Layout Methods

```javascript
// Access the layout widget
const layout = Page.Widgets.myLinearLayout;

// Get computed styles (typically used internally)
layout.getStyles(layout.props);
```

### Common Layout Operations

```javascript
// Show/hide layout programmatically
Page.Widgets.myLayout.show = false;

// Enable/disable layout
Page.Widgets.myLayout.disabled = true;

// Update spacing dynamically
Page.Widgets.myLayout.spacing = 20;

// Change direction at runtime
Page.Widgets.myLayout.direction = 'column';
```