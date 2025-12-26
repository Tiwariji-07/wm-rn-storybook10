# Styling

The Column Chart component supports various CSS customization options for enhanced visual appearance.

## Default Style Classes

| Class Name | Description |
|------------|-------------|
| `app-column-chart` | Default style class applied to the column chart container |

## Chart Customization Classes

| Class Name | Description |
|------------|-------------|
| `rounded-cornered-chart` | Adds rounded corners to column chart bars for a modern appearance |
| `stroked-zero-axis-line` | Creates solid stroked lines on x-axis and y-axis zero lines |
| `dotted-yaxis-grid-line` | Applies dotted styling to y-axis grid lines |

## Theme-Based Styling

The chart supports multiple built-in themes that can be applied via the `theme` property:

```css
/* Custom theme styling example */
.app-column-chart {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fafafa;
}

/* Rounded corners for modern appearance */
.app-column-chart.rounded-cornered-chart .nv-bar {
    rx: 4px;
    ry: 4px;
}

/* Custom grid line styling */
.app-column-chart.dotted-yaxis-grid-line .nv-y .tick line {
    stroke-dasharray: 2,2;
    stroke-opacity: 0.5;
}

.app-column-chart.stroked-zero-axis-line .nv-y .nv-axislabel,
.app-column-chart.stroked-zero-axis-line .nv-x .nv-axislabel {
    font-weight: bold;
}
```

## Color Customization

Customize chart colors through the `customcolors` property or CSS:

```css
/* Override default color scheme */
.app-column-chart .nv-bar:nth-child(1) { fill: #FF6384; }
.app-column-chart .nv-bar:nth-child(2) { fill: #36A2EB; }
.app-column-chart .nv-bar:nth-child(3) { fill: #FFCE56; }

/* Legend styling */
.app-column-chart .nv-legend .nv-series {
    cursor: pointer;
}

/* Tooltip customization */
.nvtooltip {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    color: white;
    font-size: 12px;
    padding: 8px;
}
```

## Responsive Design

```css
/* Mobile-responsive adjustments */
@media (max-width: 768px) {
    .app-column-chart {
        font-size: 12px;
    }
    
    .app-column-chart .nv-axislabel {
        font-size: 11px;
    }
}
```

**Note**: When using custom styling classes, ensure they are applied to the chart widget through the widget's CSS class property for proper rendering.