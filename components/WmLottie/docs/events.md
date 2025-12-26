# Callback Events

| Event | Description |
|-------|-------------|
| `onReady` | Triggered when the animation is loaded and ready to play |
| `onPlay` | Triggered when the animation starts playing or resumes |
| `onPause` | Triggered when the animation is paused |
| `onComplete` | Triggered when the animation completes one cycle |

### Event Handler Examples

```javascript
// Handle animation ready event
Page.myLottieOnReady = function($event, widget) {
    console.log('Animation is ready to play');
    // Start animation automatically
    widget.play();
};

// Handle animation completion
Page.myLottieOnComplete = function($event, widget) {
    console.log('Animation completed');
    // Reset animation for replay
    widget.reset();
};

// Handle play/pause events
Page.myLottieOnPlay = function($event, widget) {
    console.log('Animation started playing');
};

Page.myLottieOnPause = function($event, widget) {
    console.log('Animation paused');
};
```