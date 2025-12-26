# Methods

Area chart methods are accessed through the widget reference using `Page.Widgets.{widgetName}` syntax.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onSelect` | `event: any`, `data: any` | `void` | Programmatically trigger selection of a data point |

## Method Details

### onSelect(event, data)
Programmatically triggers the selection event for a specific data point.

**Parameters:**
- `event`: Event object (can be null for programmatic calls)
- `data`: The data item to select

**Example:**
```javascript
// Programmatically select the first data point
const firstDataPoint = Page.Variables.chartData.dataSet[0];
Page.Widgets.myAreaChart.onSelect(null, firstDataPoint);
```

## Widget Property Access

All area chart properties can be accessed and modified at runtime:

```javascript
// Update chart data
Page.Widgets.myAreaChart.dataset = newDataSet;

// Change chart appearance
Page.Widgets.myAreaChart.title = 'Updated Chart Title';
Page.Widgets.myAreaChart.customcolors = ['#ff6b6b', '#4ecdc4', '#45b7d1'];

// Modify axis configuration
Page.Widgets.myAreaChart.xaxislabel = 'New X-Axis Label';
Page.Widgets.myAreaChart.showlegend = 'bottom';

// Update interpolation for smoother curves
Page.Widgets.myAreaChart.interpolation = 'cardinal';
```

## Common Method Usage Patterns

```javascript
// Refresh chart with new data
Page.refreshAreaChart = function() {
    Page.Variables.chartDataVar.invoke();
    // Data binding will automatically update the chart
};

// Highlight specific data point
Page.highlightDataPoint = function(index) {
    const dataPoint = Page.Variables.chartData.dataSet[index];
    if (dataPoint) {
        Page.Widgets.myAreaChart.onSelect(null, dataPoint);
    }
};

// Toggle chart visibility
Page.toggleChart = function() {
    Page.Widgets.myAreaChart.show = !Page.Widgets.myAreaChart.show;
};
```