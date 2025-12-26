# Methods

The Column Chart component methods can be accessed through the widget reference using `Page.Widgets.[widgetName]` syntax.

## Widget Property Access

Column Chart widgets expose their properties for programmatic access and modification:

| Property Access | Description |
|----------------|-------------|
| `Page.Widgets.chartName.dataset` | Get or set the chart's data source |
| `Page.Widgets.chartName.selecteditem` | Access the currently selected chart item |
| `Page.Widgets.chartName.viewtype` | Get or set the chart arrangement type |
| `Page.Widgets.chartName.customcolors` | Modify the color scheme programmatically |

### Common Method Use Cases

```javascript
// Dynamically update chart data
Page.updateChartData = function() {
    Page.Variables.salesData.invoke({
        onSuccess: function(data) {
            Page.Widgets.salesChart.dataset = data;
        }
    });
};

// Change chart view type based on user selection
Page.toggleChartView = function() {
    var currentView = Page.Widgets.salesChart.viewtype;
    Page.Widgets.salesChart.viewtype = 
        currentView === 'Grouped' ? 'Stacked' : 'Grouped';
};

// Apply conditional styling based on data
Page.applyConditionalStyling = function() {
    var dataLength = Page.Widgets.salesChart.dataset.length;
    if (dataLength > 15) {
        Page.Widgets.salesChart.labelangle = 45;
        Page.Widgets.salesChart.staggerlabels = true;
    }
};

// Reset chart selection
Page.clearChartSelection = function() {
    // Force chart refresh to clear selection
    Page.Widgets.salesChart.selecteditem = null;
};

// Update chart colors dynamically
Page.setChartTheme = function(themeColors) {
    Page.Widgets.salesChart.customcolors = themeColors;
};
```

**Note**: Column Chart components inherit from WmBarChartProps and do not expose additional public methods beyond standard widget property access and event handling.