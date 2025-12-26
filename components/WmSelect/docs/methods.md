# Methods

Access the Select widget methods using `Page.Widgets.[widgetName]` followed by the method name.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onPress` | `event: any` | void | Handles press events on the widget |
| `onPropertyChange` | `name: string, newValue: any, oldValue: any` | void | Handles property change events |
| `prepareModalOptions` | `content: React.ReactNode, styles: WmSelectStyles, modalService: ModalService` | void | Prepares modal configuration for dropdown display |
| `focus` | - | void | Programmatically sets focus to the widget |
| `renderSelect` | - | void | Renders the select widget component |
| `isSelected` | `item: any` | void | Checks if a specific item is currently selected |
| `onItemSelect` | `item: any, isPlaceholder?: boolean` | void | Handles item selection events |
| `renderSelectItem` | `item: any, index: number, isPlaceholder: boolean, isLast: boolean` | void | Renders individual dropdown items |
| `updateDefaultQueryModel` | - | void | Updates the default query model for data binding |
| `onDataItemsUpdate` | - | void | Handles updates to the data items collection |

### Common Method Use Cases

```javascript
// Programmatically focus the select widget
Page.Widgets.mySelect.focus();

// Handle value changes programmatically
Page.mySelectChange = function($event, widget, newVal, oldVal) {
    console.log('Selection changed from', oldVal, 'to', newVal);
    
    // Perform actions based on selection
    if (newVal === 'premium') {
        Page.Widgets.extraOptions.show = true;
    }
};

// Check if specific item is selected
var isItemSelected = Page.Widgets.mySelect.isSelected(someItem);

// Handle property changes
Page.Widgets.mySelect.onPropertyChange('datavalue', newValue, oldValue);
```

### Data Management Methods

```javascript
// Update data items after external changes
Page.Widgets.mySelect.onDataItemsUpdate();

// Update query model for data binding
Page.Widgets.mySelect.updateDefaultQueryModel();

// Handle item selection with custom logic
Page.Widgets.mySelect.onItemSelect(selectedItem, false);
```