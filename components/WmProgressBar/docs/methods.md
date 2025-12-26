# Methods

The Progress Bar widget inherits from BaseProps and does not expose any specific public methods beyond the standard widget methods available through the WaveMaker framework.

## Widget Access

Access the Progress Bar widget programmatically using:

```javascript
// Access widget instance
var progressBarWidget = Page.Widgets.myProgressBar;

// Update progress value
progressBarWidget.datavalue = 65;

// Change visual type
progressBarWidget.type = 'warning';

// Toggle visibility
progressBarWidget.show = false;
```

## Common Programmatic Operations

```javascript
// Animate progress update
function updateProgress(targetValue) {
    var currentValue = Page.Widgets.myProgressBar.datavalue;
    var increment = (targetValue - currentValue) / 10;
    
    var interval = setInterval(function() {
        currentValue += increment;
        Page.Widgets.myProgressBar.datavalue = currentValue;
        
        if (currentValue >= targetValue) {
            clearInterval(interval);
            Page.Widgets.myProgressBar.type = 'success';
        }
    }, 100);
}

// Reset progress bar
function resetProgress() {
    Page.Widgets.myProgressBar.datavalue = 0;
    Page.Widgets.myProgressBar.type = 'default';
    Page.Widgets.myProgressBar.showtooltip = false;
}

// Set progress with validation
function setProgress(value) {
    var widget = Page.Widgets.myProgressBar;
    var clampedValue = Math.max(widget.minvalue, Math.min(widget.maxvalue, value));
    widget.datavalue = clampedValue;
    
    // Update type based on progress
    if (clampedValue >= widget.maxvalue) {
        widget.type = 'success';
    } else if (clampedValue < widget.maxvalue * 0.3) {
        widget.type = 'warning';
    }
}
```