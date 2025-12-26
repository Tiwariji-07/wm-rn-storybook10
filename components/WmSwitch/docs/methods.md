# Methods

Access the Switch widget programmatically using `Page.Widgets.{widgetName}` where `{widgetName}` is the name of your Switch widget.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onChange` | `value: any` | void | Programmatically trigger a value change |
| `onTap` | `event: any, item: any` | void | Programmatically trigger a tap event |
| `renderChild` | `item: any, index: any` | void | Render a specific child item |
| `renderItems` | none | void | Re-render all switch items |

### Common Method Use Cases

#### Programmatic Value Changes
```javascript
// Change switch value programmatically
Page.Widgets.mySwitch.datavalue = 'high';

// Trigger change event manually
Page.Widgets.mySwitch.onChange('critical');
```

#### Dynamic Dataset Updates
```javascript
// Update dataset and re-render
Page.Widgets.mySwitch.dataset = 'urgent, normal, low';
Page.Widgets.mySwitch.renderItems();

// Add validation after value change
Page.updateSwitchValue = function(newValue) {
    Page.Widgets.mySwitch.datavalue = newValue;
    Page.Widgets.mySwitch.onChange(newValue);
    
    // Trigger form validation
    Page.Widgets.myForm.validate();
};
```

#### Conditional Switch Control
```javascript
// Enable/disable switch based on conditions
Page.toggleSwitchAccess = function(userRole) {
    if (userRole === 'admin') {
        Page.Widgets.mySwitch.disabled = false;
        Page.Widgets.mySwitch.readonly = false;
    } else {
        Page.Widgets.mySwitch.disabled = true;
    }
};
```