# Callback Events

| Event | Description |
|-------|-------------|
| onFocus | Triggered when the select component receives focus. Receives parameters: (event, widget) |
| onBlur | Triggered when the select component loses focus. Receives parameters: ({}, widget) |
| onChange | Triggered when the selected value changes. Receives parameters: (undefined, widget, newValue, oldValue) |
| onTap | Triggered when the component is tapped. Receives parameters: (event) |
| onTouchstart | Triggered when touch interaction begins. Receives parameters: (event) |
| onDoubletap | Triggered on double tap gesture. Receives parameters: (event) |
| onLongtap | Triggered on long press gesture. Receives parameters: (event) |
| onTouchend | Triggered when touch interaction ends. Receives parameters: (event) |

### Common Event Usage

```javascript
// Handle value change
Page.mySelectChange = function($event, widget, newVal, oldVal) {
    console.log('Selected value changed from', oldVal, 'to', newVal);
    
    // Trigger dependent actions
    if (newVal) {
        Page.Variables.dependentData.setFilter('parentId', newVal);
        Page.Variables.dependentData.update();
    }
};

// Handle focus events
Page.mySelectFocus = function($event, widget) {
    console.log('Select focused');
    // Could load data on demand
    if (!Page.Variables.selectData.dataSet.length) {
        Page.Variables.selectData.update();
    }
};
```