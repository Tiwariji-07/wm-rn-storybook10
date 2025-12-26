# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when user taps on a data point. Provides access to the selected item and chart coordinates |
| `onBeforerender` | Called before the chart is rendered, allowing customization of chart configuration |
| `onTransform` | Fired when chart data is transformed or updated |

## Event Details

### onSelect Event
Fired when a user interacts with a data point on the area chart.

**Parameters:**
- `event.nativeEvent`: The native touch/click event
- `this.proxy`: Reference to the chart widget
- `selectedItem`: The data object from the dataset
- `selectedChartItem`: Chart-specific coordinates and values

**Example:**
```javascript
Page.areaChart1Select = function(event, widget, selectedItem, selectedChartItem) {
    // Access the selected data point
    console.log('Selected value:', selectedChartItem.y);
    console.log('X coordinate:', selectedChartItem.x);
    
    // Use selected data to update other widgets
    Page.Widgets.detailsText.caption = `Selected: ${selectedItem.name} - ${selectedChartItem.y}`;
    
    // Navigate to detail page with selected data
    Page.Variables.selectedItemVar.setData(selectedItem);
};
```

### onBeforerender Event
Allows customization of the chart before it's displayed.

**Example:**
```javascript
Page.areaChart1Beforerender = function(widget, chartInstance) {
    // Customize chart behavior before rendering
    if (chartInstance) {
        chartInstance.showControls(false);
        chartInstance.interpolate('cardinal');
    }
};
```