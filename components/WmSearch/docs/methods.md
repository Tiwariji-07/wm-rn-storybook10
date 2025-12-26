# Methods

Access the search component methods using the widget reference: `Page.Widgets.searchWidgetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `clearSearch` | - | void | Clears the current search query and results |
| `updateFilteredData` | queryText: string | void | Updates filtered data based on query text |
| `focus` | - | void | Programmatically focuses the search input |
| `onChange` | value: any | void | Handles change events programmatically |
| `invokeChange` | e: any | void | Invokes change event with event object |
| `onFocus` | - | void | Handles focus events programmatically |
| `onBlur` | - | void | Handles blur events programmatically |
| `searchIconPress` | - | void | Handles search icon press action |
| `onItemSelect` | item: any | void | Handles item selection from results |
| `renderSearchBar` | - | void | Renders the search input bar |
| `reset` | - | void | Resets the search component to initial state |
| `renderSearchItem` | item: any, index: number | void | Renders individual search result items |
| `updateDefaultQueryModel` | - | void | Updates the default query model |
| `onDataItemsUpdate` | - | void | Handles data items update events |
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property change events |
| `setTemplate` | partialName: any | void | Sets custom template for rendering |
| `prepareModalOptions` | content: React.ReactNode, styles: WmSearchStyles, modalService: ModalService | void | Prepares modal options for full-screen search |

### Common Method Usage

```javascript
// Clear search programmatically
Page.Widgets.mySearch.clearSearch();

// Focus the search input
Page.Widgets.mySearch.focus();

// Reset to initial state
Page.Widgets.mySearch.reset();

// Update filtered data manually
Page.Widgets.mySearch.updateFilteredData('new query');

// Trigger item selection
Page.Widgets.mySearch.onItemSelect(selectedItem);
```

### Event Handling

```javascript
// Handle search changes
Page.mySearchChange = function($event, widget, newValue, oldValue) {
    console.log('Search query changed to:', newValue);
    // Process search results
};

// Handle item selection
Page.mySearchSelect = function($event, widget, selectedValue) {
    console.log('Item selected:', selectedValue);
    // Handle selection
};
```