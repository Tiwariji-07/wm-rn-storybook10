# Methods

Access the selectlocale component methods using:
`Page.Widgets.[componentName].[methodName]()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onPress` | event: any | void | Handles press events on the component |
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property value changes |
| `prepareModalOptions` | content: React.ReactNode, styles: WmSelectStyles, modalService: ModalService | void | Configures modal display options for locale selection |
| `focus` | - | void | Programmatically sets focus to the component |
| `renderSelect` | - | void | Renders the select component |
| `isSelected` | item: any | void | Checks if a locale item is currently selected |
| `onItemSelect` | item: any, isPlaceholder?: boolean | void | Handles selection of a locale item |
| `renderSelectItem` | item: any, index: number, isPlaceholder: boolean, isLast: boolean | void | Renders individual locale items |
| `updateDefaultQueryModel` | - | void | Updates the default query model for data filtering |
| `onDataItemsUpdate` | - | void | Handles updates to the locale data items |

## Common Method Usage

### Programmatic Locale Selection

```javascript
// Focus the locale selector
Page.Widgets.myLocaleSelect.focus();

// Check if specific locale is selected
var isEnglishSelected = Page.Widgets.myLocaleSelect.isSelected({code: 'en'});

// Programmatically select a locale
Page.Widgets.myLocaleSelect.onItemSelect({code: 'es', name: 'Spanish'});
```

### Handle Property Changes

```javascript
// Listen for dataset changes
Page.Widgets.myLocaleSelect.onPropertyChange('dataset', newDataset, oldDataset);

// Update query model when filters change
Page.Widgets.myLocaleSelect.updateDefaultQueryModel();
```