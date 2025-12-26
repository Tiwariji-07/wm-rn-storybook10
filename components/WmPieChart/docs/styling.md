# Styling

## Default Style Classes

| Class Name | Description |
|------------|-------------|
| `app-pie-chart` | Primary container class for pie chart component styling |

## Chart-Specific Styling

The pie chart component supports various styling approaches:

### Theme-based Styling
```css
/* Custom theme colors */
.app-pie-chart .pie-slice {
    stroke: #ffffff;
    stroke-width: 2px;
}

/* Legend styling */
.app-pie-chart .chart-legend {
    font-size: 12px;
    font-family: 'Helvetica, Arial, sans-serif';
}
```

### Label Customization
```css
/* Pie chart labels */
.app-pie-chart .slice-label {
    fill: #333333;
    font-size: 11px;
    font-weight: bold;
    text-anchor: middle;
}

/* Center label for donut charts */
.app-pie-chart .center-label {
    text-anchor: middle;
    font-size: 16px;
    font-weight: bold;
    fill: #666666;
}
```

### Responsive Design
```css
/* Mobile-optimized styling */
@media (max-width: 768px) {
    .app-pie-chart {
        min-height: 300px;
    }
    
    .app-pie-chart .slice-label {
        font-size: 10px;
    }
    
    .app-pie-chart .chart-legend {
        font-size: 11px;
    }
}
```

### Interactive States
```css
/* Hover effects */
.app-pie-chart .pie-slice:hover {
    opacity: 0.8;
    cursor: pointer;
}

/* Selected state */
.app-pie-chart .pie-slice.selected {
    stroke-width: 3px;
    stroke: #007bff;
}
```

### Custom Color Schemes
```css
/* Override default color palette */
.app-pie-chart.custom-colors .pie-slice:nth-child(1) { fill: #FF6384; }
.app-pie-chart.custom-colors .pie-slice:nth-child(2) { fill: #36A2EB; }
.app-pie-chart.custom-colors .pie-slice:nth-child(3) { fill: #FFCE56; }
.app-pie-chart.custom-colors .pie-slice:nth-child(4) { fill: #4BC0C0; }
.app-pie-chart.custom-colors .pie-slice:nth-child(5) { fill: #9966FF; }
```