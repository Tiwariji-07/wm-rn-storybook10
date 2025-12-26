# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the toggle value changes. Receives parameters: (null, this.proxy, dataValue, oldValue) |
| `onTap` | Called when user taps the toggle widget. Receives parameters: (null, this) |
| `onFocus` | Fired when the toggle receives focus. Receives parameters: (null, this) |
| `onBlur` | Triggered when the toggle loses focus. Receives parameters: (null, this.proxy) |

## Event Handler Examples

```javascript
// Handle toggle value changes
Page.settingsToggleChange = function($event, widget, newVal, oldVal) {
    console.log('Toggle changed from', oldVal, 'to', newVal);
    
    // Update related settings
    if (newVal === true) {
        Page.Widgets.advancedPanel.show = true;
    } else {
        Page.Widgets.advancedPanel.show = false;
    }
};

// Handle toggle tap events
Page.notificationToggleTap = function($event, widget) {
    console.log('Toggle tapped');
    // Additional tap handling logic
};

// Handle focus events for accessibility
Page.featureToggleFocus = function($event, widget) {
    // Show help text when toggle receives focus
    Page.Widgets.helpText.show = true;
};

// Handle blur events
Page.featureToggleBlur = function($event, widget) {
    // Hide help text when toggle loses focus
    Page.Widgets.helpText.show = false;
};
```