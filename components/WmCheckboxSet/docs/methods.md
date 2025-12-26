# Methods

Access the CheckboxSet widget through the page reference: `Page.Widgets.checkboxSetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onPress` | item: any | void | Handles press events for individual checkbox items |
| `renderChild` | item: any, index: any, colWidth: DimensionValue | void | Renders individual checkbox items with specified column width |
| `computeDisplayValue` | - | void | Calculates and updates the display representation of selected values |
| `updateDatavalue` | value: any | void | Programmatically updates the selected values |
| `setTemplate` | partialName: any | void | Sets a custom template for rendering items |
| `renderGroupby` | - | void | Renders grouped checkbox items when groupby is configured |
| `renderCheckboxses` | items: any | void | Renders the collection of checkbox items |

## Method Usage Examples

### Programmatic Value Updates

```javascript
// Update selected values programmatically
Page.Widgets.myCheckboxSet.updateDatavalue(['value1', 'value2', 'value3']);

// Clear all selections
Page.Widgets.myCheckboxSet.updateDatavalue([]);

// Select all available options
const allValues = Page.Widgets.myCheckboxSet.dataset.map(item => item.value);
Page.Widgets.myCheckboxSet.updateDatavalue(allValues);
```

### Custom Template Configuration

```javascript
// Set a custom template for rendering items
Page.Widgets.myCheckboxSet.setTemplate('customCheckboxTemplate');

// Refresh display values after data changes
Page.Widgets.myCheckboxSet.computeDisplayValue();
```

### Handle Individual Item Interaction

```javascript
// Programmatically trigger item press
const selectedItem = Page.Variables.optionsData.dataSet[0];
Page.Widgets.myCheckboxSet.onPress(selectedItem);
```