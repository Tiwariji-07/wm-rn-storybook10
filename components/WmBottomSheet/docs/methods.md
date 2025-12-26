# Methods

Access bottom sheet methods using the widget reference: `Page.Widgets.bottomSheetName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `open()` | None | `void` | Opens the bottom sheet with animation |
| `close()` | None | `void` | Closes the bottom sheet with animation |
| `onPropertyChange()` | `name: string, $new: any, $old: any` | `void` | Internal method for handling property changes |

### Method Usage Examples

```javascript
// Open bottom sheet programmatically
Page.Widgets.myBottomSheet.open();

// Close bottom sheet programmatically
Page.Widgets.myBottomSheet.close();

// Use methods in button click events
Page.showBottomSheetButtonClick = function($event, widget) {
    Page.Widgets.filterBottomSheet.open();
};

Page.hideBottomSheetButtonClick = function($event, widget) {
    Page.Widgets.filterBottomSheet.close();
};

// Chain methods with other operations
Page.showFiltersClick = function($event, widget) {
    // Load filter data first
    Page.loadFilterData();
    // Then show bottom sheet
    Page.Widgets.filterBottomSheet.open();
};
```

### Additional Methods (from Documentation)

These methods may be available depending on the implementation:

- `expandBottomSheet()` - Expands the bottom sheet to the expanded height ratio
- `collapseBottomSheet()` - Collapses the bottom sheet to the initial height ratio  
- `isSheetExpanded()` - Returns true if the bottom sheet is currently expanded