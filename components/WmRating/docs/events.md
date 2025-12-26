# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the user changes the rating value. Receives parameters: (undefined, component proxy, new value, old value) |

### Event Usage

```javascript
// Handle rating changes
Page.myRatingOnChange = function($event, widget, newVal, oldVal) {
    console.log('Rating changed from', oldVal, 'to', newVal);
    
    // Update other components based on rating
    if (newVal >= 4) {
        Page.Widgets.feedbackLabel.caption = 'Thank you for the positive rating!';
    }
};
```