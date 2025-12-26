# Callback Events

| Event | Description |
|-------|-------------|
| `onFocus` | Triggered when the checkbox receives focus |
| `onTap` | Triggered when the checkbox is tapped/clicked |
| `onChange` | Triggered when the checkbox value changes. Provides new and old values |
| `onBlur` | Triggered when the checkbox loses focus |

### Event Parameters

- **onFocus**: `(event, widget)` - Receives null event and widget proxy
- **onTap**: `(event, widget)` - Receives null event and widget proxy  
- **onChange**: `(event, widget, dataValue, oldValue)` - Receives event, widget proxy, new value, and previous value
- **onBlur**: `(event, widget)` - Receives null event and widget proxy

### Event Usage Examples

```javascript
// Handle checkbox change
Page.checkboxChange = function($event, widget, dataValue, oldValue) {
    if (dataValue) {
        console.log('Checkbox checked');
    } else {
        console.log('Checkbox unchecked');
    }
};

// Validate on blur
Page.checkboxBlur = function($event, widget) {
    if (!widget.datavalue) {
        // Show validation message
        Page.Actions.showToast.invoke({
            message: 'Please accept terms to continue'
        });
    }
};
```