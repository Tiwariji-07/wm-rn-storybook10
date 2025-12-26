# Methods

The Donut Chart component can be accessed and controlled through JavaScript using the standard widget reference pattern: `Page.Widgets.widgetName`.

Currently, the Donut Chart component does not expose specific public methods beyond the standard widget methods. Interaction with the chart is primarily handled through props and events.

### Standard Widget Access

```javascript
// Access the donut chart widget
var donutChart = Page.Widgets.myDonutChart;

// Update chart data dynamically
donutChart.dataset = newDataArray;

// Change chart configuration
donutChart.donutratio = 0.7;
donutChart.centerlabel = "Updated Total";

// Programmatically refresh the chart
// (Note: Chart will automatically re-render when dataset or props change)
```

### Dynamic Data Updates

```javascript
// Function to update chart with new data
Page.updateDonutChart = function(newData) {
    var chart = Page.Widgets.salesDonutChart;
    
    // Update the dataset
    chart.dataset = newData;
    
    // Optionally update other properties
    var total = newData.reduce(function(sum, item) {
        return sum + item.value;
    }, 0);
    
    chart.centerlabel = "Total: $" + total.toLocaleString();
};
```