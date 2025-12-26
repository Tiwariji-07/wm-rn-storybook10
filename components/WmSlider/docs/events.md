# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the slider value changes. Receives parameters: (null, widget, clampedValue, oldValue) where clampedValue is the new value and oldValue is the previous value |

### Event Usage Examples

```javascript
// Handle slider value changes
Page.volumeSliderChange = function($event, widget, newValue, oldValue) {
    console.log('Volume changed from', oldValue, 'to', newValue);
    // Update volume level
    Page.Variables.currentVolume.dataSet = newValue;
};

// Range slider change handler
Page.priceRangeSliderChange = function($event, widget, newValue, oldValue) {
    if (Array.isArray(newValue)) {
        const [minPrice, maxPrice] = newValue;
        Page.Variables.priceFilter.setData({
            min: minPrice,
            max: maxPrice
        });
    }
};
```