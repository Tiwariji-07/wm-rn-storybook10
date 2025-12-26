# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the input value changes. Receives (event, widget, newValue, oldValue) |
| `onFocus` | Triggered when the input receives focus. Receives (event, widget) |
| `onBlur` | Triggered when the input loses focus. Receives (event, widget) |
| `onKeypress` | Triggered when a key is pressed while input is focused. Receives (event, widget) |
| `onSubmitEditing` | Triggered when the user submits the input (usually by pressing return key) |

### Event Usage Examples

```javascript
// Handle value changes
Page.Widgets.searchInput.onChange = function(event, widget, newValue, oldValue) {
    if (newValue.length > 3) {
        // Trigger search when user types more than 3 characters
        Page.Actions.searchAction.invoke();
    }
};

// Handle form submission on return key
Page.Widgets.emailInput.onSubmitEditing = function() {
    Page.Widgets.passwordInput.focus();
};

// Validate on blur
Page.Widgets.phoneInput.onBlur = function(event, widget) {
    if (!widget.datavalue.match(/^\d{10}$/)) {
        widget.addClass('error');
    }
};
```