# Callback Events

| Event | Description | Parameters |
|-------|-------------|------------|
| `onTap` | Triggered when an item is tapped | `($event, this.proxy)` |
| `onLongtap` | Triggered when an item is long-pressed | `(null, this.proxy)` |
| `onDoubletap` | Triggered when an item is double-tapped | `(null, this.proxy)` |
| `onRender` | Called after the list is rendered | `(this, this.state.props.dataset)` |
| `onBeforedatarender` | Called before data is rendered | `(this, this.state.props.dataset)` |
| `onDeselect` | Triggered when an item is deselected | `(this.proxy, item)` |
| `onSelectionlimitexceed` | Called when selection limit is exceeded | `(null, this)` |
| `onTouchstart` | Triggered at the start of a touch gesture | `(e)` |
| `onTouchend` | Triggered at the end of a touch gesture | `(e)` |

## Event Usage Examples

### Handle Item Selection
```javascript
// On item tap
Page.myListTap = function($event, widget) {
    console.log('Selected item:', widget.selecteditem);
};

// On item deselection
Page.myListDeselect = function(widget, item) {
    console.log('Deselected item:', item);
};
```

### Handle Selection Limits
```javascript
// When selection limit is exceeded
Page.myListSelectionlimitexceed = function($event, widget) {
    App.notify('Maximum selection limit reached!');
};
```

### Handle Data Rendering
```javascript
// Before data is rendered
Page.myListBeforedatarender = function(widget, data) {
    // Manipulate data before rendering
    console.log('About to render:', data.length, 'items');
};

// After list is rendered
Page.myListRender = function(widget, data) {
    console.log('List rendered with', data.length, 'items');
};
```