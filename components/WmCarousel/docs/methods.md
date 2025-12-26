# Methods

Access the carousel component methods using the widget reference: `Page.Widgets.widgetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `addSlideLayout` | `index: number, nativeEvent: LayoutChangeEvent` | `void` | Adds layout information for a specific slide index |
| `autoPlay` | None | `void` | Starts automatic carousel animation |
| `stopAnimation` | None | `void` | Stops the current carousel animation |
| `startAnimation` | None | `void` | Starts or resumes carousel animation |
| `onPropertyChange` | `name: string, $new: any, $old: any` | `void` | Handles property change events internally |
| `animatePagination` | `index: number` | `void` | Animates the pagination to a specific slide index |
| `renderPagination` | `data: any` | `void` | Renders pagination indicators based on provided data |

## Common Use Cases

### Control Carousel Playback
```javascript
// Start automatic animation
Page.Widgets.myCarousel.startAnimation();

// Stop animation
Page.Widgets.myCarousel.stopAnimation();

// Navigate to specific slide
Page.Widgets.myCarousel.animatePagination(2);
```

### Handle Slide Changes
```javascript
// Track slide changes
Page.myCarousel_onChange = function(widget, index, prevIndex) {
    console.log(`Moved from slide ${prevIndex} to slide ${index}`);
    // Update related UI or trigger analytics
};
```