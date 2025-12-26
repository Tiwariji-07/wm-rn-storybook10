# Styling

The Line Chart component supports extensive styling customization through CSS classes and theme configuration.

## Primary CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-line-chart` | Default container class for the line chart component. Use this to apply overall styling to the chart container |

## Theme-based Styling

```css
/* Custom theme styling */
.app-line-chart.custom-theme {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Title and subtitle styling */
.app-line-chart .chart-title {
    color: #2c3e50;
    font-weight: 600;
    font-size: 18px;
}

.app-line-chart .chart-subtitle {
    color: #7f8c8d;
    font-size: 14px;
    margin-top: 4px;
}
```

## Specialized Chart Classes

```css
/* Rounded corners for enhanced visual appeal */
.app-line-chart.rounded-chart {
    border-radius: 12px;
    overflow: hidden;
}

/* Custom grid line styling */
.app-line-chart.dotted-grid .nvd3 .nv-axis line {
    stroke-dasharray: 2,2;
    stroke-opacity: 0.5;
}

/* Enhanced line styling */
.app-line-chart.bold-lines .nvd3 .nv-line {
    stroke-width: 3px;
}

/* Custom point highlighting */
.app-line-chart.highlight-points .nvd3 .nv-point {
    stroke-width: 2px;
    fill-opacity: 1;
    stroke-opacity: 1;
}
```

## Responsive Styling

```css
/* Mobile-responsive adjustments */
@media (max-width: 768px) {
    .app-line-chart {
        padding: 8px;
    }
    
    .app-line-chart .chart-title {
        font-size: 16px;
    }
    
    .app-line-chart .nvd3 .nv-axis text {
        font-size: 10px;
    }
}

/* Tablet adjustments */
@media (min-width: 769px) and (max-width: 1024px) {
    .app-line-chart {
        padding: 12px;
    }
}
```

## Dark Theme Support

```css
/* Dark theme styling */
.app-line-chart.dark-theme {
    background-color: #2c3e50;
    color: #ecf0f1;
}

.app-line-chart.dark-theme .nvd3 .nv-axis text {
    fill: #bdc3c7;
}

.app-line-chart.dark-theme .nvd3 .nv-axis line {
    stroke: #34495e;
}
```