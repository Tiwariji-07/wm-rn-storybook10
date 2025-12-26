# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when the textarea value changes. Receives (event, widget, newValue, oldValue) |
| `onBlur` | Triggered when the textarea loses focus. Receives (event, widget) |
| `onFocus` | Triggered when the textarea gains focus. Receives (event, widget) |
| `onKeypress` | Triggered when a key is pressed while the textarea is focused. Receives (event, widget) |

### Event Usage Examples

```javascript
// Handle value changes
Page.commentTextareaChange = function($event, widget, newVal, oldVal) {
    console.log('Text changed from:', oldVal, 'to:', newVal);
    
    // Update character count display
    if (widget.maxchars) {
        const remaining = widget.maxchars - newVal.length;
        Page.Widgets.charCountLabel.caption = remaining + ' characters remaining';
    }
};

// Validate on blur
Page.emailTextareaBlur = function($event, widget) {
    if (widget.datavalue && !widget.regexp.test(widget.datavalue)) {
        // Show validation error
        Page.Widgets.errorLabel.caption = 'Please enter a valid email address';
        Page.Widgets.errorLabel.show = true;
    }
};

// Auto-save on focus loss
Page.notesTextareaBlur = function($event, widget) {
    if (widget.datavalue) {
        // Trigger auto-save
        Page.Variables.saveNotesVariable.invoke();
    }
};
```