# Methods

Line Chart methods are accessed through the widget reference using `Page.Widgets.[widgetName]`.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onSelect` | event: any, data: any | void | Programmatically trigger selection event with specified data |

### Programmatic Selection

```javascript
// Trigger selection programmatically
Page.selectDataPoint = function() {
    const mockEvent = {
        target: Page.Widgets.myLineChart
    };
    
    const selectedData = {
        x: '2024',
        y: 1250,
        series: 'Revenue'
    };
    
    Page.Widgets.myLineChart.onSelect(mockEvent, selectedData);
};
```

### Access Chart Data

```javascript
// Get current chart configuration
Page.getChartConfig = function() {
    const chart = Page.Widgets.myLineChart;
    
    return {
        dataSource: chart.dataset,
        xField: chart.xaxisdatakey,
        yField: chart.yaxisdatakey,
        theme: chart.theme,
        lineThickness: chart.linethickness
    };
};

// Update chart dynamically
Page.updateChart = function(newData) {
    Page.Widgets.myLineChart.dataset = newData;
};
```