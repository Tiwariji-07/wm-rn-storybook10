# Methods

Access these methods using `Page.Widgets.listName.methodName()` where `listName` is your list component's name.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `setGroupData` | `items: any` | void | Set grouped data for the list |
| `onPropertyChange` | `name: string, $new: any, $old: any` | void | Handle property changes |
| `getDefaultStyles` | - | void | Get default styling configuration |
| `getIndex` | `item: any` | void | Get the index of a specific item |
| `getNoOfColumns` | - | void | Get the number of columns in current layout |

## Method Usage Examples

### Working with List Data
```javascript
// Set grouped data
const groupedData = [
    { group: 'Category A', items: [/*...*/] },
    { group: 'Category B', items: [/*...*/] }
];
Page.Widgets.myList.setGroupData(groupedData);

// Get item index
const selectedItem = Page.Widgets.myList.selecteditem;
const index = Page.Widgets.myList.getIndex(selectedItem);
console.log('Selected item index:', index);
```

### Layout Information
```javascript
// Get current column count
Page.Widgets.myList.getNoOfColumns();

// Get default styles
Page.Widgets.myList.getDefaultStyles();
```

### Property Management
```javascript
// Handle property changes
Page.Widgets.myList.onPropertyChange('dataset', newData, oldData);
```

## Additional List Operations

### Selection Management
```javascript
// Select an item programmatically
Page.Widgets.myList.selecteditem = dataItem;

// Clear selection
Page.Widgets.myList.selecteditem = null;
```

### Data Manipulation
```javascript
// Update dataset
Page.Widgets.myList.dataset = newDataArray;

// Modify specific properties
Page.Widgets.myList.title = 'Updated Title';
Page.Widgets.myList.nodatamessage = 'No items available';
```

### Navigation Control
```javascript
// Change navigation type
Page.Widgets.myList.navigation = 'Scroll';

// Update page size
Page.Widgets.myList.pagesize = 15;
```