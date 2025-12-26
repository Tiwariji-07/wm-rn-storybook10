# Callback Events

| Event | Description |
|-------|-------------|
| `onTap` | Fired when a radio button is tapped. Parameters: `(null, this.proxy)` |
| `onChange` | Fired when the selected value changes. Parameters: `(undefined, this.proxy, selectedValue, oldValue)` |

## Event Handler Examples

### onChange Event
```javascript
// Handle selection changes
Page.myRadiosetChange = function($event, widget, selectedValue, oldValue) {
    console.log('Selection changed from', oldValue, 'to', selectedValue);
    
    // Perform actions based on selection
    if (selectedValue === 'premium') {
        Page.Widgets.premiumFeatures.show = true;
    } else {
        Page.Widgets.premiumFeatures.show = false;
    }
};
```

### onTap Event
```javascript
// Handle tap events (fired before onChange)
Page.myRadiosetTap = function($event, widget) {
    console.log('Radioset tapped');
    // Add haptic feedback or animations
};
```