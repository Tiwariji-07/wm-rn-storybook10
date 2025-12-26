# Styling

The Area Chart component supports custom styling through CSS classes and theme configuration.

## Primary CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-area-chart` | Default container class for the area chart component |
| `area-chart-container` | Wrapper class for chart layout and positioning |
| `area-chart-legend` | Styles for chart legend elements |
| `area-chart-tooltip` | Tooltip appearance and positioning |

## Theme Customization

Use the `theme` prop to apply predefined color schemes and styling:

```javascript
// Apply different themes
Page.Widgets.myAreaChart.theme = 'dark';
Page.Widgets.myAreaChart.theme = 'light';
Page.Widgets.myAreaChart.theme = 'ocean';
```

## Custom Colors

Override default colors using the `customcolors` property:

```javascript
// Set custom color palette
Page.Widgets.myAreaChart.customcolors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

// Or use a comma-separated string
Page.Widgets.myAreaChart.customcolors = 'red, blue, green, orange';
```

## Advanced Styling Options

### Rounded Corners for Area Charts
Add the `rounded-area-chart` class for rounded area styling:

```css
.rounded-area-chart .nvd3 .nv-area {
    border-radius: 4px;
}
```

### Custom Grid Lines
Add classes for enhanced grid line appearance:

```css
/* Dotted Y-axis grid lines */
.dotted-yaxis-grid-line .nvd3 .nv-y.nv-axis .tick line {
    stroke-dasharray: 2,2;
}

/* Solid zero axis lines */
.stroked-zero-axis-line .nvd3 .nv-y.nv-axis .nv-axisMaxMin-y line,
.stroked-zero-axis-line .nvd3 .nv-x.nv-axis .zero line {
    stroke-width: 2px;
    stroke: #333;
}
```

### Custom Area Styling

```css
/* Custom area chart styling */
.app-area-chart {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Area fill customization */
.app-area-chart .nvd3 .nv-area {
    fill-opacity: 0.7;
    stroke-width: 2px;
}

/* Legend styling */
.app-area-chart .nvd3 .nv-legend .nv-series {
    font-size: 12px;
    font-weight: 500;
}

/* Tooltip customization */
.app-area-chart .nvtooltip {
    background: rgba(0,0,0,0.8);
    color: white;
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
}
```

## Responsive Design

```css
/* Mobile-responsive area chart */
@media (max-width: 768px) {
    .app-area-chart {
        margin: 10px;
    }
    
    .app-area-chart .nvd3 .nv-axis text {
        font-size: 10px;
    }
}
```