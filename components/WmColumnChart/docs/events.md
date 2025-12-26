# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when user selects/clicks on a chart element. Provides access to both the selected data item and chart-specific information |
| `onBeforerender` | Fired before the chart renders, allowing for custom chart configuration and modifications |

## Event Details

### onSelect Event

**Parameters:** `(event.nativeEvent, this.proxy, selectedItem, selectedChartItem)`

- `event.nativeEvent`: The original native event
- `this.proxy`: Reference to the chart widget instance
- `selectedItem`: The complete data object from the dataset
- `selectedChartItem`: Chart-specific data including x, y values and formatting

```javascript
Page.columnChartSelect = function($event, widget, selectedItem, selectedChartItem) {
    // Access the selected data
    console.log('Selected Item:', selectedItem);
    console.log('Chart Data:', selectedChartItem);
    
    // Use the selection for further processing
    Page.Variables.selectedCategory.dataSet = selectedItem;
    
    // Display selected values in other widgets
    Page.Widgets.selectedValue.datavalue = selectedChartItem.y;
    Page.Widgets.selectedLabel.datavalue = selectedChartItem.x;
};
```

### onBeforerender Event

**Parameters:** `(this.proxy, null)`

- `this.proxy`: Reference to the chart widget instance
- `null`: Second parameter is null for this event

```javascript
Page.columnChartBeforerender = function(widget, chartInstance) {
    // Customize chart before rendering
    if (chartInstance) {
        // Access underlying chart library configuration
        chartInstance.showLegend(true);
        chartInstance.margin({top: 20, right: 20, bottom: 60, left: 70});
    }
    
    // Modify chart based on data or conditions
    if (Page.Variables.chartData.dataSet.length > 10) {
        widget.labelangle = 45; // Rotate labels for better readability
    }
};
```