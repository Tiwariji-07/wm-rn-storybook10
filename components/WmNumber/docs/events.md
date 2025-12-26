# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the input value changes. Parameters: `(event, widget, newValue, oldValue)` |
| `onFocus` | Triggered when the input receives focus. Parameters: `(event, widget)` |
| `onBlur` | Triggered when the input loses focus. Parameters: `(event, widget)` |
| `onKeypress` | Triggered when a key is pressed while the input is focused. Parameters: `(event, widget)` |
| `onError` | Triggered when validation fails. Parameters: `(event, widget, value, oldValue)` |
| `onFieldChange` | Custom field change handler for advanced validation scenarios |
| `triggerValidation` | Programmatically triggers validation on the field |

### Event Usage Examples

```javascript
// Handle value changes
Page.numberInputOnChange = function($event, widget, newValue, oldValue) {
    if (newValue > 100) {
        Page.Widgets.warningLabel.caption = "Value is quite high!";
    }
};

// Validate on blur
Page.numberInputOnBlur = function($event, widget) {
    if (!widget.datavalue) {
        widget.onError && widget.onError();
    }
};

// Handle validation errors
Page.numberInputOnError = function($event, widget, value, oldValue) {
    console.log("Validation failed for value:", value);
    Page.Widgets.errorMessage.show = true;
};
```