# Methods

Access pie chart methods through the widget reference: `Page.Widgets.pieChartName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getLabel` | `d: {x: any, y: any}`, `props: WmPieChartProps` | string | Returns formatted label text for a data point based on current label type settings |
| `onSelect` | `event: any`, `data: any` | void | Programmatically trigger selection of a pie segment |

### Method Usage Examples

```javascript
// Get formatted label for a data point
const labelText = Page.Widgets.myPieChart.getLabel(
    { x: 'Product A', y: 150 },
    Page.Widgets.myPieChart.props
);
console.log('Formatted label:', labelText);

// Programmatically select a segment
Page.Widgets.myPieChart.onSelect(
    { type: 'programmatic' },
    { x: 'Product A', y: 150 }
);

// Access chart data and properties
const chartData = Page.Widgets.myPieChart.dataset;
const selectedItem = Page.Widgets.myPieChart.selecteditem;

// Update chart configuration dynamically
Page.Widgets.myPieChart.donutratio = 0.5;
Page.Widgets.myPieChart.labeltype = 'percent';
```

### Common Method Use Cases

```javascript
// Dynamic label formatting based on conditions
function updateChartLabels() {
    const chart = Page.Widgets.salesPieChart;
    
    if (chart.dataset.length > 5) {
        chart.showlabels = 'hide'; // Hide labels for crowded charts
        chart.showlegend = 'bottom';
    } else {
        chart.showlabels = 'outside';
        chart.labeltype = 'key-value';
    }
}

// Programmatic selection based on business logic
function selectTopPerformer() {
    const chart = Page.Widgets.performancePieChart;
    const data = chart.dataset;
    
    // Find highest value
    const maxItem = data.reduce((prev, current) => 
        (prev.value > current.value) ? prev : current
    );
    
    // Select the top performer
    chart.onSelect({}, maxItem);
}
```