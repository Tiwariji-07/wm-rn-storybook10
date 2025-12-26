# Methods

Access the checkbox widget methods using `Page.Widgets.[widgetName]` in your page scripts.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `setChecked` | dataValue: any, checkedvalue: any | void | Sets the checkbox state programmatically |
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property change events |
| `updateDatavalue` | value: any | void | Updates the checkbox data value |
| `validate` | value: any | void | Validates the checkbox value |
| `onPress` | - | void | Handles press events |

### Common Method Usage

```javascript
// Check the checkbox programmatically
Page.Widgets.myCheckbox.setChecked(true, "accepted");

// Update checkbox value
Page.Widgets.myCheckbox.updateDatavalue(true);

// Validate checkbox
Page.Widgets.myCheckbox.validate(Page.Widgets.myCheckbox.datavalue);

// Programmatically trigger press
Page.Widgets.myCheckbox.onPress();

// Listen to property changes
Page.checkboxPropertyChange = function(name, newValue, oldValue) {
    console.log(`Property ${name} changed from ${oldValue} to ${newValue}`);
};
```

### Method Examples

```javascript
// Toggle checkbox state
Page.toggleCheckbox = function() {
    const currentValue = Page.Widgets.myCheckbox.datavalue;
    const newValue = currentValue === Page.Widgets.myCheckbox.checkedvalue 
        ? Page.Widgets.myCheckbox.uncheckedvalue 
        : Page.Widgets.myCheckbox.checkedvalue;
    
    Page.Widgets.myCheckbox.updateDatavalue(newValue);
};

// Validate required checkbox
Page.validateAgreement = function() {
    const checkbox = Page.Widgets.agreementCheck;
    if (checkbox.datavalue !== checkbox.checkedvalue) {
        Page.Actions.showToast.invoke({
            message: 'You must agree to continue'
        });
        return false;
    }
    return true;
};
```