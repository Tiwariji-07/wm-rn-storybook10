# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when a pie segment is selected. Provides access to selected data item and chart segment details |
| `onBeforerender` | Fired before the chart renders. Useful for chart customization and configuration |
| `onTransform` | Called during data transformation. Allows modification of data before visualization |

### Event Parameters

**onSelect Event**:
- `event.nativeEvent`: Native touch/click event
- `this.proxy`: Chart widget reference
- `selectedItem`: Selected data item from dataset
- `selectedChartItem`: Chart-specific selection data including x, y values

**onBeforerender Event**:
- `this.proxy`: Chart widget reference
- `null`: Second parameter (unused)

**onTransform Event**:
- `undefined`: First parameter (unused)
- `this.proxy`: Chart widget reference

### Event Usage Examples

```javascript
// Handle pie segment selection
Page.myPieChartSelect = function(event, widget, selectedItem, selectedChartItem) {
    console.log('Selected segment:', selectedItem);
    console.log('Chart data:', selectedChartItem);
    
    // Update another widget with selected data
    Page.Widgets.selectedLabel.caption = 
        `Selected: ${selectedChartItem.x} - ${selectedChartItem.y}`;
};

// Customize chart before rendering
Page.myPieChartBeforerender = function(widget, chartInstance) {
    // Apply custom formatting or configurations
    console.log('Chart about to render');
};
```