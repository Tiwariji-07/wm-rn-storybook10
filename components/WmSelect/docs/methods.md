# Methods

Access the Select widget programmatically using `Page.Widgets.selectName` where `selectName` is the name of your Select widget.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| onPress | event: any | void | Programmatically trigger press action |
| onPropertyChange | name: string, newValue: any, oldValue: any | void | Handle property value changes |
| prepareModalOptions | content: ReactNode, styles: WmSelectStyles, modalService: ModalService | void | Configure modal presentation options |
| focus | none | void | Programmatically focus the select component |
| renderSelect | none | void | Re-render the select component |
| isSelected | item: any | void | Check if an item is currently selected |
| onItemSelect | item: any, isPlaceholder?: boolean | void | Handle item selection programmatically |
| renderSelectItem | item: any, index: number, isPlaceholder: boolean, isLast: boolean | void | Render individual select items |
| updateDefaultQueryModel | none | void | Update the default query configuration |
| onDataItemsUpdate | none | void | Handle updates to data items |

### Common Method Usage

```javascript
// Programmatically focus the select
Page.Widgets.mySelect.focus();

// Check if specific item is selected
var isSelected = Page.Widgets.mySelect.isSelected(someItem);

// Manually trigger item selection
Page.Widgets.mySelect.onItemSelect(selectedItem);

// Update data items
Page.Widgets.mySelect.onDataItemsUpdate();

// Handle property changes
Page.Widgets.mySelect.onPropertyChange('datavalue', newValue, oldValue);
```

### Programmatic Value Setting

```javascript
// Set value programmatically
Page.Widgets.mySelect.datavalue = 'newValue';

// Clear selection
Page.Widgets.mySelect.datavalue = null;

// Set display value directly
Page.Widgets.mySelect.displayValue = 'Custom Display Text';

// Refresh data and selection
Page.Widgets.mySelect.updateDefaultQueryModel();
Page.Widgets.mySelect.onDataItemsUpdate();
```