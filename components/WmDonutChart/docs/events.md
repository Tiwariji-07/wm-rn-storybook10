# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when a user clicks on a donut slice. Provides access to the selected data item and chart element. Parameters: `(event.nativeEvent, this.proxy, selectedItem, selectedChartItem)` |
| `onBeforerender` | Called before the chart is rendered. Useful for customizing chart configuration or adding custom functionality. Parameters: `(this.proxy, null)` |

### Handling Slice Selection

```javascript
// Capture user selection
Page.donutChartSelect = function($event, widget, selectedItem, selectedChartItem) {
    // Access selected slice data
    var selectedValue = selectedChartItem.y;
    var selectedLabel = selectedChartItem.x;
    
    // Update other widgets based on selection
    Page.Widgets.selectedValueLabel.caption = "Selected: " + selectedLabel;
    Page.Widgets.selectedAmountLabel.caption = "Amount: $" + selectedValue;
    
    // Trigger additional actions
    Page.Actions.updateDetailView.invoke({
        inputFields: {
            category: selectedLabel,
            value: selectedValue
        }
    });
};
```

### Chart Customization Before Render

```javascript
// Customize chart before rendering
Page.donutChartBeforerender = function(widget, chartInstance) {
    // Add custom tooltips
    if (chartInstance && chartInstance.tooltip) {
        chartInstance.tooltip.contentGenerator(function(d) {
            return '<div class="custom-tooltip">' +
                   '<strong>' + d.data.key + '</strong><br/>' +
                   'Value: $' + d.data.value.toLocaleString() +
                   '</div>';
        });
    }
};
```