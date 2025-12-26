# Callback Events

| Event | Description |
|-------|-------------|
| `onTap` | Triggered when user taps the tile. Parameters: `(e)` |
| `onDoubletap` | Triggered when user double-taps the tile. Parameters: `(e)` |
| `onLongtap` | Triggered when user performs a long press on the tile. Parameters: `(e)` |
| `onTouchstart` | Triggered when user starts touching the tile. Parameters: `(e)` |
| `onTouchend` | Triggered when user stops touching the tile. Parameters: `(e)` |

### Event Usage Examples

```javascript
// Handle tile tap for navigation
Page.Widgets.myTile.onTap = function(e) {
    Page.Variables.selectedTile.setData(e.target.dataset.tileId);
    Page.Actions.navigateToDetails.invoke();
};

// Long tap for context menu
Page.Widgets.myTile.onLongtap = function(e) {
    Page.Widgets.contextMenu.show = true;
};

// Double tap for quick actions
Page.Widgets.myTile.onDoubletap = function(e) {
    Page.Variables.tileData.invoke();
};
```