# Styling

The Slider component can be customized using CSS classes and inline styles.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-slider` | Default style class applied to the slider component |
| `form-slider-input-horizontal` | Styles for horizontal slider layout |
| `app-slider-disabled` | Applied when slider is in disabled state |

## Customization Examples

```css
/* Custom slider track styling */
.app-slider .slider-track {
    background-color: #e0e0e0;
    height: 4px;
    border-radius: 2px;
}

/* Custom active track color */
.app-slider .slider-track-active {
    background-color: #2196f3;
}

/* Custom thumb styling */
.app-slider .slider-thumb {
    background-color: #ffffff;
    border: 2px solid #2196f3;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    shadow-opacity: 0.3;
    shadow-radius: 2;
    elevation: 3;
}

/* Disabled slider styling */
.app-slider-disabled {
    opacity: 0.6;
}

.app-slider-disabled .slider-thumb {
    background-color: #cccccc;
    border-color: #999999;
}

/* Custom marker styling */
.app-slider .slider-marker {
    background-color: #666666;
    width: 2px;
    height: 8px;
}

/* Tooltip styling */
.app-slider .slider-tooltip {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
}
```

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.customizeSlider = function() {
    Page.Widgets.mySlider.styles = {
        track: {
            backgroundColor: '#ffeb3b',
            height: 6
        },
        thumb: {
            backgroundColor: '#ff9800',
            width: 24,
            height: 24
        }
    };
};
```