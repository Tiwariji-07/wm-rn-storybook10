# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when user taps on a bar. Provides event details, widget reference, selected data item, and chart-specific selection info |
| `onBeforerender` | Fired before the chart renders. Allows for chart configuration and customization |
| `onTransform` | Called during chart data transformation. Useful for data manipulation before rendering |

### Event Handler Examples

```javascript
// Handle bar selection
Page.myBarChartSelect = function(event, widget, selectedItem, selectedChartItem) {
    console.log('Selected bar data:', selectedItem);
    console.log('Chart item details:', selectedChartItem);
    
    // Update other widgets with selected data
    Page.Widgets.selectedLabel.caption = selectedItem.category;
    Page.Widgets.selectedValue.caption = selectedChartItem.y;
};

// Configure chart before rendering
Page.myBarChartBeforerender = function(widget, chartInstance) {
    // Customize chart appearance
    if (chartInstance && chartInstance.color) {
        chartInstance.color(['#FF6B6B', '#4ECDC4', '#45B7D1']);
    }
};

// Transform data before display
Page.myBarChartTransform = function(data, widget) {
    // Modify or filter data before chart rendering
    return data.filter(item => item.value > 0);
};
```