# Methods

Access the bar chart widget through the page reference: `Page.Widgets.[widgetName]`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `labelFn` | data: any | string \| number \| string[] \| number[] \| null | Formats label text for the given data point |
| `getBarChart` | props: WmBarChartProps | void | Initializes or updates the bar chart with new properties |
| `onSelect` | event: any, data: any | void | Programmatically triggers selection event with specified data |

### Common Method Usage

```javascript
// Refresh chart with new data
Page.refreshChart = function() {
    var newProps = {
        dataset: Page.Variables.updatedData.dataSet,
        customcolors: ['#FF6B6B', '#4ECDC4']
    };
    Page.Widgets.myBarChart.getBarChart(newProps);
};

// Programmatically select a bar
Page.selectSpecificBar = function() {
    var mockEvent = { type: 'programmatic' };
    var selectedData = { category: 'Q1', value: 1000 };
    Page.Widgets.myBarChart.onSelect(mockEvent, selectedData);
};

// Custom label formatting
Page.getFormattedLabel = function(dataPoint) {
    return Page.Widgets.myBarChart.labelFn(dataPoint);
};

// Update chart properties dynamically
Page.updateChartOrientation = function(isHorizontal) {
    Page.Widgets.myBarChart.horizontal = isHorizontal;
    Page.Widgets.myBarChart.getBarChart({
        horizontal: isHorizontal,
        viewtype: 'Grouped'
    });
};
```