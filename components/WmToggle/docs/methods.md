# Methods

Access toggle methods using the widget reference: `Page.Widgets.toggleName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property changes internally |
| `updateDatavalue` | value: any | void | Programmatically updates the toggle's data value |
| `validate` | value: any | void | Validates the current toggle value |
| `onToggleSwitch` | value: any | void | Handles the toggle switch action |
| `onLayoutChange` | event: LayoutChangeEvent | void | Responds to layout changes |
| `getStatusIcon` | - | void | Returns the appropriate status icon |

## Common Method Use Cases

### Programmatic Value Control

```javascript
// Update toggle value programmatically
Page.Widgets.settingsToggle.updateDatavalue(true);

// Toggle the current state
let currentValue = Page.Widgets.settingsToggle.datavalue;
let newValue = currentValue === Page.Widgets.settingsToggle.checkedvalue ? 
               Page.Widgets.settingsToggle.uncheckedvalue : 
               Page.Widgets.settingsToggle.checkedvalue;
Page.Widgets.settingsToggle.updateDatavalue(newValue);
```

### Form Validation

```javascript
// Validate toggle value in a form
Page.validateForm = function() {
    try {
        Page.Widgets.termsToggle.validate(Page.Widgets.termsToggle.datavalue);
        console.log('Toggle validation passed');
        return true;
    } catch (error) {
        console.log('Toggle validation failed:', error);
        return false;
    }
};
```

### Dynamic Toggle Control

```javascript
// Reset toggle to default state
Page.resetToggle = function(toggleWidget) {
    toggleWidget.updateDatavalue(toggleWidget.uncheckedvalue);
    toggleWidget.disabled = false;
    toggleWidget.readonly = false;
};

// Bulk toggle operation
Page.toggleAllNotifications = function(enable) {
    const toggles = ['emailToggle', 'pushToggle', 'smsToggle'];
    toggles.forEach(toggleName => {
        Page.Widgets[toggleName].updateDatavalue(enable);
    });
};
```