# Styling

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-bubble-chart` | Default base style class for the bubble chart component |

## Custom Styling

Bubble charts can be styled using CSS classes and the component's built-in theming system.

### Theme-based Styling
```javascript
// Apply different themes
Page.Widgets.myBubbleChart.theme = 'material';
Page.Widgets.myBubbleChart.theme = 'dark';
Page.Widgets.myBubbleChart.theme = 'classic';
```

### Custom Color Schemes
```javascript
// Set custom colors for bubbles
Page.Widgets.myBubbleChart.customcolors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

// Or use comma-separated string
Page.Widgets.myBubbleChart.customcolors = 'red,blue,green,orange';
```

### Advanced CSS Customization
```css
/* Custom bubble chart styling */
.app-bubble-chart {
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Style chart title */
.app-bubble-chart .chart-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

/* Customize tooltip appearance */
.app-bubble-chart .nvtooltip {
    background-color: rgba(0,0,0,0.8);
    border-radius: 4px;
    color: white;
}

/* Style axis labels */
.app-bubble-chart .nv-axis text {
    fill: #666;
    font-size: 12px;
}

/* Customize legend */
.app-bubble-chart .nv-legend text {
    fill: #333;
    font-size: 14px;
}
```

### Responsive Design
```css
/* Responsive bubble chart */
.app-bubble-chart {
    width: 100%;
    height: 400px;
}

@media (max-width: 768px) {
    .app-bubble-chart {
        height: 300px;
    }
    
    .app-bubble-chart .nv-axis text {
        font-size: 10px;
    }
}
```

### Animation and Transitions
```css
/* Add smooth transitions */
.app-bubble-chart .nv-scatter .nv-group circle {
    transition: r 0.3s ease;
}

.app-bubble-chart .nv-scatter .nv-group circle:hover {
    stroke-width: 2px;
    stroke: #333;
}
```