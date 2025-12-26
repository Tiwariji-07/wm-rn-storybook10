# Styling

| CSS Class | Description |
|-----------|-------------|
| `app-bar-chart` | Default styling class applied to the bar chart container |
| `rounded-cornered-chart` | Adds rounded corners to bar chart bars for a modern appearance |
| `stroked-zero-axis-line` | Creates solid stroked lines on x-axis and y-axis zero lines |
| `dotted-yaxis-grid-line` | Applies dotted styling to y-axis grid lines |

### Custom Styling Examples

```css
/* Customize bar chart container */
.app-bar-chart {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Add rounded corners to bars */
.app-bar-chart.rounded-cornered-chart .nv-bar {
    rx: 4;
    ry: 4;
}

/* Customize grid lines */
.app-bar-chart.stroked-zero-axis-line .nv-axis line.zero {
    stroke: #333;
    stroke-width: 2px;
}

.app-bar-chart.dotted-yaxis-grid-line .nv-y .tick line {
    stroke-dasharray: 3,3;
    stroke: #ccc;
}

/* Chart title and subtitle styling */
.app-bar-chart .chart-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.app-bar-chart .chart-subtitle {
    font-size: 14px;
    color: #666;
    margin-top: 4px;
}

/* Legend customization */
.app-bar-chart .nv-legend .nv-series {
    cursor: pointer;
}

.app-bar-chart .nv-legend .nv-series.disabled {
    opacity: 0.3;
}

/* Tooltip styling */
.nvtooltip {
    background: rgba(0,0,0,0.8);
    color: white;
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
}
```

### Theme-Based Styling

The chart supports various built-in themes that can be applied via the `theme` property:

```javascript
// Apply different themes
Page.Widgets.myBarChart.theme = 'material';
Page.Widgets.myBarChart.theme = 'annabelle';
Page.Widgets.myBarChart.theme = 'bella';
Page.Widgets.myBarChart.theme = 'vivid';
```

Each theme provides a different color palette and visual styling approach suitable for various design requirements.