# Callback Events

| Event | Description |
|-------|-------------|
| `onBeforeadd` | Triggered before a chip is added. Return `false` to prevent addition |
| `onAdd` | Triggered after a chip is successfully added |
| `onChange` | Triggered when the chip selection changes |
| `onBeforeremove` | Triggered before a chip is removed. Return `false` to prevent removal |
| `onRemove` | Triggered after a chip is successfully removed |
| `onChipclick` | Triggered when a chip is clicked/tapped |
| `onChipselect` | Triggered when a chip is selected |
| `onClear` | Triggered when all chips are cleared |
| `onFocus` | Triggered when the input field receives focus |
| `onBlur` | Triggered when the input field loses focus |
| `onSubmit` | Triggered when the input is submitted |
| `onSelect` | Triggered when an item is selected from the dropdown |

## Event Handler Examples

### Control Chip Addition

```javascript
// Prevent duplicate entries
Page.myChipsBeforeadd = function($event, widget, queryModel) {
    const existingValues = widget.datavalue || [];
    const newValue = queryModel.value;
    
    if (existingValues.includes(newValue)) {
        // Return false to prevent addition
        return false;
    }
};
```

### Handle Chip Selection

```javascript
// Track chip selections
Page.myChipsChipselect = function($event, widget, item) {
    console.log('Selected chip:', item);
    // Additional logic for chip selection
};
```

### Validate Before Removal

```javascript
// Confirm before removing important chips
Page.myChipsBeforeremove = function($event, widget, item) {
    if (item.important) {
        // Show confirmation dialog
        return confirm('Remove this important item?');
    }
};
```