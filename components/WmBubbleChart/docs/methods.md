# Methods

Access the bubble chart widget methods through the page reference: `Page.Widgets.widgetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onSelect` | event: any, data: any | void | Programmatically trigger selection of a data point |

### Method Usage Examples

```javascript
// Access chart widget
var bubbleChart = Page.Widgets.myBubbleChart;

// Programmatically trigger selection
bubbleChart.onSelect(null, selectedDataItem);

// Access chart properties
console.log('Chart title:', bubbleChart.title);
console.log('Dataset:', bubbleChart.dataset);

// Modify chart configuration
bubbleChart.title = 'Updated Chart Title';
bubbleChart.customcolors = ['red', 'blue', 'green'];

// Update data source
bubbleChart.dataset = Page.Variables.newSalesData.dataSet;
```

### Common Method Use Cases

```javascript
// Refresh chart with new data
Page.refreshBubbleChart = function() {
    // Update the data source
    Page.Variables.salesData.invoke();
    
    // The chart will automatically update when the variable data changes
};

// Programmatically select a specific data point
Page.selectHighestPerformer = function() {
    var dataset = Page.Widgets.salesChart.dataset;
    var highest = dataset.reduce((max, current) => 
        current.profit > max.profit ? current : max
    );
    
    Page.Widgets.salesChart.onSelect(null, highest);
};

// Dynamic color assignment based on data
Page.updateChartColors = function() {
    var colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
    Page.Widgets.salesChart.customcolors = colors;
};
```