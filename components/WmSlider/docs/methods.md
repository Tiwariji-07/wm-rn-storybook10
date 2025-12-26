# Methods

Slider methods can be accessed using the widget reference: `Page.Widgets.sliderName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getValueFromGesture` | positionX: number | void | Calculates slider value from gesture position |
| `getPositionFromValue` | value: number | void | Calculates position from given value |
| `configureGesture` | gesture: PanGesture, gestureType: SliderGestureType | void | Sets up gesture handling for slider interaction |
| `getScaledDataValue` | - | void | Returns scaled value based on current data |
| `getDataValue` | - | void | Returns current data value |
| `initNumericSlider` | - | void | Initializes slider with numeric configuration |
| `onPropertyChange` | name: string, newValue: any, oldValue: any | void | Handles property change events |
| `onDataItemsUpdate` | - | void | Updates slider when dataset items change |
| `initScale` | - | void | Initializes slider scale and markers |
| `computePosition` | from: number, gestureType: SliderGestureType | void | Computes thumb position for given value |
| `getTooltipLabel` | value: any, initialValue: any, type: 'lowThumb' \| 'highThumb' | void | Generates tooltip content for slider thumbs |
| `renderToolTips` | props: WmSliderProps | void | Renders tooltip elements |
| `renderOldMarkerStyle` | props: WmSliderProps | void | Renders markers in legacy style |
| `renderMarkers` | props: WmSliderProps | void | Renders scale markers |
| `renderTracks` | props: WmSliderProps | void | Renders slider track elements |

### Common Method Use Cases

```javascript
// Programmatically set slider value
Page.setSliderValue = function(value) {
    Page.Widgets.mySlider.datavalue = value;
    Page.Widgets.mySlider.initScale();
};

// Reset slider to default state
Page.resetSlider = function() {
    Page.Widgets.mySlider.datavalue = Page.Widgets.mySlider.minvalue;
    Page.Widgets.mySlider.onDataItemsUpdate();
};

// Get current slider value
Page.getCurrentValue = function() {
    return Page.Widgets.mySlider.getDataValue();
};
```