# Methods

Lottie component methods are accessed using the widget reference: `Page.Widgets.[widgetName]`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `play()` | none | void | Starts or resumes animation playback |
| `pause()` | none | void | Pauses the animation |
| `reset()` | none | void | Resets animation to the beginning |
| `onPropertyChange()` | name: string, $new: any, $old: any | void | Handles property change events |

### Animation Control Examples

```javascript
// Start/Resume animation
Page.Widgets.myLottie.play();

// Pause animation
Page.Widgets.myLottie.pause();

// Reset animation to beginning
Page.Widgets.myLottie.reset();
```

### Advanced Control Scenarios

```javascript
// Create a loading animation controller
Page.showLoadingAnimation = function() {
    Page.Widgets.loadingLottie.show = true;
    Page.Widgets.loadingLottie.play();
};

Page.hideLoadingAnimation = function() {
    Page.Widgets.loadingLottie.pause();
    Page.Widgets.loadingLottie.show = false;
};

// Toggle animation playback
Page.toggleAnimation = function() {
    var lottie = Page.Widgets.myLottie;
    // Note: You would need to track playing state separately
    // as there's no built-in playing property
    if (Page.Variables.isAnimationPlaying.dataSet) {
        lottie.pause();
        Page.Variables.isAnimationPlaying.dataSet = false;
    } else {
        lottie.play();
        Page.Variables.isAnimationPlaying.dataSet = true;
    }
};
```