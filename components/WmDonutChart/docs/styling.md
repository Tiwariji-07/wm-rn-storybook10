# Styling

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-donut-chart` | Default style class applied to the donut chart component |

## Customization Options

The Donut Chart component can be styled using CSS classes and supports various visual customization options:

### Basic Styling

```css
/* Custom donut chart styling */
.app-donut-chart {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #ffffff;
}

/* Custom center label styling */
.app-donut-chart .center-label {
    font-weight: bold;
    font-size: 18px;
    color: #333;
}
```

### Legend Customization

```css
/* Style the chart legend */
.app-donut-chart .nv-legend .nv-series {
    cursor: pointer;
}

.app-donut-chart .nv-legend text {
    font-size: 12px;
    fill: #666;
}
```

### Tooltip Styling

```css
/* Custom tooltip appearance */
.nvtooltip {
    background: rgba(0,0,0,0.8);
    color: white;
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
}
```

### Responsive Design

```css
/* Responsive donut chart */
@media (max-width: 768px) {
    .app-donut-chart {
        height: 300px;
    }
    
    .app-donut-chart .nv-legend {
        transform: scale(0.9);
    }
}
```

## Advanced Customization

For more advanced styling, you can target specific SVG elements within the chart:

```css
/* Style individual slices */
.app-donut-chart .nv-slice path {
    stroke: #fff;
    stroke-width: 2px;
}

/* Hover effects */
.app-donut-chart .nv-slice:hover path {
    opacity: 0.8;
    transform: scale(1.05);
    transition: all 0.3s ease;
}
```