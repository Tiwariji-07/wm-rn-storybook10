# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when a user clicks on a data point or line segment. Provides access to the selected data item and chart coordinates. Use this to implement drill-down functionality or update other widgets based on selection |
| `onBeforerender` | Fired before the chart is rendered. Allows for last-minute configuration changes or data manipulation before the chart appears |
| `onTransform` | Called during chart transformation operations. Useful for custom data processing or applying dynamic styling based on data changes |

### Handle Chart Selection

```javascript
Page.myLineChartSelect = function($event, widget, selectedItem, selectedChartItem) {
    // Access selected data point
    console.log('Selected item:', selectedItem);
    console.log('Chart coordinates:', selectedChartItem);
    
    // Update other widgets with selected data
    Page.Widgets.detailsLabel.caption = `Selected: ${selectedItem.name} - ${selectedItem.value}`;
    
    // Navigate to detailed view
    Page.Actions.goToDetailsPage.invoke({
        inputFields: {
            id: selectedItem.id
        }
    });
};
```

### Pre-render Configuration

```javascript
Page.myLineChartBeforerender = function(widget, chartInstance) {
    // Apply dynamic theming
    if (Page.Variables.isDarkMode.dataValue) {
        widget.customcolors = ['#BB86FC', '#03DAC6', '#CF6679'];
    }
    
    // Configure chart instance directly
    if (chartInstance) {
        chartInstance.showLegend(true);
        chartInstance.useInteractiveGuideline(true);
    }
};
```