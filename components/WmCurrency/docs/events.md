# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the currency value changes. Parameters: `(event, widget, newValue, oldValue)` |
| `onBlur` | Triggered when the field loses focus. Parameters: `(event, widget)` |
| `onFocus` | Triggered when the field gains focus. Parameters: `(event, widget)` |
| `onKeypress` | Triggered when a key is pressed while field is focused. Parameters: `(event, widget)` |
| `onError` | Triggered when validation fails or an error occurs. Parameters: `(event, widget, value, oldValue)` |

### Event Usage Examples

```javascript
// Handle value changes
Page.myCurrencyOnChange = function($event, widget, newValue, oldValue) {
    console.log('Currency changed from', oldValue, 'to', newValue);
    // Update related calculations
    Page.Widgets.totalAmount.datavalue = newValue * Page.Widgets.quantity.datavalue;
};

// Validate on blur
Page.myCurrencyOnBlur = function($event, widget) {
    if (widget.datavalue < 0) {
        widget.onError('Negative values not allowed');
    }
};
```