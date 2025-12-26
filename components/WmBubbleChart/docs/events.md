# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when a bubble is clicked. Provides event data, widget proxy, selected item, and chart item details |
| `onBeforerender` | Fired before the chart is rendered. Useful for customizing chart configuration |
| `onTransform` | Called when chart data is transformed. Can be used for custom data processing |

### Event Parameters

#### onSelect Event
```javascript
Page.bubbleChartSelect = function(event, widget, selectedItem, selectedChartItem) {
    // event.nativeEvent - Original touch/click event
    // widget - Reference to the chart widget
    // selectedItem - The complete data object from dataset
    // selectedChartItem - Chart-specific data (x, y, size values)
    
    console.log('Selected bubble:', selectedChartItem);
    console.log('X value:', selectedChartItem.x);
    console.log('Y value:', selectedChartItem.y);
    console.log('Bubble size:', selectedChartItem.size);
};
```

#### onBeforerender Event
```javascript
Page.bubbleChartBeforerender = function(widget, chartInstance) {
    // Customize chart before rendering
    // chartInstance - nvd3 chart instance for advanced customization
    console.log('Chart about to render');
};
```

#### onTransform Event
```javascript
Page.bubbleChartTransform = function(undefined, widget) {
    // Handle data transformation
    console.log('Data transformed');
};
```