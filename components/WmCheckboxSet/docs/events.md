# Callback Events

| Event | Description |
|-------|-------------|
| `onTap` | Triggered when the checkbox set container is tapped. Receives parameters: `(null, widget)` |
| `onChange` | Triggered when the selection changes. Receives parameters: `(undefined, widget, selectedValue, oldValue)` where selectedValue contains the new selection and oldValue contains the previous selection |

## Event Usage Examples

```javascript
// Handle selection changes
Page.myCheckboxSetChange = function(widget, selectedValue, oldValue) {
    console.log('Selected values:', selectedValue);
    console.log('Previous values:', oldValue);
    
    // Update related components based on selection
    Page.Widgets.summaryLabel.caption = selectedValue.length + ' items selected';
};

// Handle tap events
Page.myCheckboxSetTap = function(widget) {
    console.log('Checkbox set tapped');
};
```