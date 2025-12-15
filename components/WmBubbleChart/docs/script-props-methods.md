# Script Props & Methods

Properties and methods of the bubble-chart component can be accessed via script using the Page object:

```javascript
// Access bubble chart widget
Page.Widgets.bubbleChart1.setWidgetProperty("prop", value)
Page.Widgets.bubbleChart1.getWidgetProperty("prop")
```

## Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `onSelect` | any | No | - | Callback function triggered when a bubble is selected |
| `xaxisdatakey` | string | Yes | `''` | Data key for X-axis values (inherited) |
| `yaxisdatakey` | string | Yes | `''` | Data key for Y-axis values (inherited) |
| `iconclass` | any | Yes | `''` | CSS class for chart icons (inherited) |
| `dataset` | any | Yes | - | Chart data source (inherited) |

## Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onSelect` | `event: any`, `data: any` | void | Handles bubble selection events |

## Common Use Cases

### Toggle Chart Visibility
```javascript
// Hide the bubble chart
Page.Widgets.bubbleChart1.setWidgetProperty("show", false);

// Show the bubble chart
Page.Widgets.bubbleChart1.setWidgetProperty("show", true);
```

### Update Chart Data
```javascript
// Set new dataset
const newData = [
  {x: 10, y: 20, size: 15, category: "A"},
  {x: 30, y: 40, size: 25, category: "B"}
];
Page.Widgets.bubbleChart1.setWidgetProperty("dataset", newData);
```

### Configure Axis Data Keys
```javascript
// Set X-axis data key
Page.Widgets.bubbleChart1.setWidgetProperty("xaxisdatakey", "revenue");

// Set Y-axis data key
Page.Widgets.bubbleChart1.setWidgetProperty("yaxisdatakey", "profit");
```

### Handle Bubble Selection
```javascript
// Set selection handler
Page.Widgets.bubbleChart1.setWidgetProperty("onSelect", function(event, data) {
  console.log("Selected bubble:", data);
  // Custom logic for bubble selection
});
```

### Enable/Disable Chart Interactions
```javascript
// Disable chart interactions
Page.Widgets.bubbleChart1.setWidgetProperty("disabled", true);

// Enable chart interactions
Page.Widgets.bubbleChart1.setWidgetProperty("disabled", false);
```