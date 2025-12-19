# Methods

Access the Select Locale component methods using `Page.Widgets.widgetName` where widgetName is the name of your component.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| onPress | event: any | void | Handles press events on the component |
| onPropertyChange | name: string, newValue: any, oldValue: any | void | Called when component properties change |
| prepareModalOptions | content: React.ReactNode, styles: WmSelectStyles, modalService: ModalService | void | Configures modal display options |
| focus | - | void | Programmatically focuses the component |
| renderSelect | - | void | Renders the select dropdown |
| isSelected | item: any | void | Checks if an item is currently selected |
| onItemSelect | item: any, isPlaceholder?: boolean | void | Handles item selection logic |
| renderSelectItem | item: any, index: number, isPlaceholder: boolean, isLast: boolean | void | Renders individual select items |
| updateDefaultQueryModel | - | void | Updates the default query parameters |
| onDataItemsUpdate | - | void | Called when the data items are updated |

### Common Method Usage

```javascript
// Focus the select locale component
Page.Widgets.selectLocale.focus();

// Check if specific locale is selected
const isEnglishSelected = Page.Widgets.selectLocale.isSelected({value: 'en'});

// Update data items
Page.Widgets.selectLocale.onDataItemsUpdate();
```

### Programmatic Locale Management

```javascript
// Get current selected locale
const currentLocale = Page.Widgets.selectLocale.datavalue;

// Set new locale and trigger change
Page.Widgets.selectLocale.datavalue = 'fr';
Page.Widgets.selectLocale.onPropertyChange('datavalue', 'fr', currentLocale);
```