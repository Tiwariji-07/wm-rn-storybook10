# Methods

Access the Chips component methods using the widget reference: `Page.Widgets.chipWidgetName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onPropertyChange` | `name: string`, `$new: any`, `$old: any` | `void` | Handles property changes |
| `reset` | None | `void` | Resets the component to its initial state |
| `onDataItemsUpdate` | None | `void` | Refreshes the component when dataset changes |
| `addItem` | `$event: any`, `widget: any` | `void` | Programmatically adds a chip item |
| `computeDisplayValue` | None | `void` | Recalculates display values for chips |
| `selectChip` | `chipItem: any` | `void` | Programmatically selects a specific chip |
| `setDatavalue` | `newChipList: any` | `void` | Sets the selected chip values |
| `createCustomDataModel` | `val: string` | `void` | Creates a custom data model for new values |
| `resetSearchModel` | None | `void` | Resets the search/filter state |
| `isDuplicate` | `item: any` | `void` | Checks if an item is a duplicate |
| `removeItem` | `item: any`, `index: any` | `void` | Removes a specific chip item |
| `renderChip` | `item: any`, `index: any` | `void` | Renders a chip with given data |
| `rendertemplate` | `item: any`, `index: any` | `void` | Renders chip using custom template |
| `updateDefaultQueryModel` | None | `void` | Updates the default query model |

## Common Method Usage

### Programmatic Chip Management

```javascript
// Add chips programmatically
Page.addSelectedTags = function() {
    const tags = ['JavaScript', 'React Native', 'Mobile'];
    Page.Widgets.skillChips.setDatavalue(tags);
};

// Reset chips
Page.clearAllChips = function() {
    Page.Widgets.skillChips.reset();
};

// Select specific chip
Page.selectImportantChip = function() {
    const importantChip = { name: 'Priority', value: 'high' };
    Page.Widgets.statusChips.selectChip(importantChip);
};
```

### Dynamic Data Updates

```javascript
// Refresh chips when data changes
Page.refreshChipData = function() {
    // Update the dataset variable first
    Page.Variables.chipDataVariable.update();
    
    // Then refresh the chips component
    Page.Widgets.myChips.onDataItemsUpdate();
};

// Custom data model creation
Page.addCustomChip = function(customValue) {
    Page.Widgets.myChips.createCustomDataModel(customValue);
};
```