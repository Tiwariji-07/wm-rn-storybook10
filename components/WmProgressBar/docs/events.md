# Callback Events

| Event | Description |
|-------|-------------|
| `onTooltiptext` | Triggered to generate custom tooltip text. Receives parameters: (undefined, proxy, minValue, maxValue, percentage). Use this to customize tooltip content based on current progress values. |
| `onTap` | Triggered when the progress bar is tapped. Receives the touch event object as parameter. |
| `onTouchstart` | Triggered when touch interaction begins on the progress bar. Receives the touch event object. |
| `onDoubletap` | Triggered when the progress bar is double-tapped. Receives the touch event object as parameter. |
| `onLongtap` | Triggered when the progress bar is pressed and held. Receives the touch event object as parameter. Only supported in React Native applications. |
| `onTouchend` | Triggered when touch interaction ends on the progress bar. Receives the touch event object. |

### Event Usage Examples

```javascript
// Custom tooltip text generation
Page.Widgets.myProgressBar.onTooltiptext = function(scope, proxy, minValue, maxValue, percentage) {
    return `Progress: ${percentage.toFixed(1)}% (${proxy.datavalue}/${maxValue})`;
};

// Handle tap events
Page.Widgets.myProgressBar.onTap = function(event) {
    console.log('Progress bar tapped at:', event.touches[0]);
};

// Handle long tap for additional actions
Page.Widgets.myProgressBar.onLongtap = function(event) {
    // Show detailed progress information
    this.showtooltip = true;
};
```