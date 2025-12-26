# Methods

Access the radioset widget through the page reference: `Page.Widgets.radiosetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onPress` | item: any | void | Programmatically trigger selection of a specific item |
| `renderChild` | item: any, index: any, colWidth?: DimensionValue | void | Render individual radio button items |
| `setTemplate` | partialName: any | void | Set a custom partial template for rendering items |
| `renderGroupby` | - | void | Render grouped radio buttons when groupby is specified |
| `renderRadioButtons` | items: any | void | Render the complete set of radio buttons |

## Method Usage Examples

### Programmatic Selection
```javascript
// Select a specific item programmatically
const itemToSelect = Page.Variables.myData.dataSet[2];
Page.Widgets.myRadioset.onPress(itemToSelect);

// This will trigger the onChange event and update the UI
```

### Custom Template Configuration
```javascript
// Set a custom partial template
Page.Widgets.myRadioset.setTemplate('customRadioTemplate');

// The partial should be defined in your page partials
```

### Dynamic Rendering Control
```javascript
// Re-render with specific items (useful after data updates)
const filteredItems = Page.Variables.allOptions.dataSet.filter(item => item.active);
Page.Widgets.myRadioset.renderRadioButtons(filteredItems);
```

## Common Use Cases

### Form Reset
```javascript
// Reset radioset selection
Page.Widgets.myRadioset.datavalue = null;

// Or select first item
if (Page.Widgets.myRadioset.dataset && Page.Widgets.myRadioset.dataset.length > 0) {
    Page.Widgets.myRadioset.onPress(Page.Widgets.myRadioset.dataset[0]);
}
```

### Dynamic Item Updates
```javascript
// Update dataset and re-render
Page.Widgets.myRadioset.dataset = newDataArray;
Page.Widgets.myRadioset.renderRadioButtons(newDataArray);
```