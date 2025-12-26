# Callback Events

| Event | Description |
|-------|-------------|
| `onTap` | Triggered when the icon is tapped/clicked |
| `onTouchstart` | Triggered when touch interaction begins |
| `onDoubletap` | Triggered when the icon is double-tapped |
| `onLongtap` | Triggered when the icon is pressed and held |
| `onTouchend` | Triggered when touch interaction ends |

### Event Handler Examples

```javascript
// Handle icon tap
Page.myIconTap = function(e) {
    console.log('Icon tapped');
    // Perform action
};

// Handle long tap for context menu
Page.myIconLongtap = function(e) {
    // Show context menu or additional options
    Page.Widgets.contextMenu.show = true;
};

// Handle double tap for special actions
Page.myIconDoubletap = function(e) {
    // Toggle favorite state
    Page.Variables.favoriteVariable.setData(!Page.Variables.favoriteVariable.dataSet);
};
```