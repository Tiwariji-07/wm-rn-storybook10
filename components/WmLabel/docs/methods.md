# Methods

Access the Label component methods through the widget reference: `Page.Widgets.labelName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onPropertyChange` | name: string, $new: any, $old: any | void | Called when a property value changes |
| `parseCaption` | caption: string | void | Parses and applies rich text formatting to the caption |

### Method Usage Examples

```javascript
// Listen to property changes
Page.Widgets.myLabel.onPropertyChange = function(name, newValue, oldValue) {
    if (name === 'caption') {
        console.log('Caption changed from', oldValue, 'to', newValue);
    }
};

// Manually parse caption with rich text
Page.updateLabelContent = function() {
    const richText = "Check out our **new features** at [our website](https://example.com)";
    Page.Widgets.myLabel.caption = richText;
    Page.Widgets.myLabel.parseCaption(richText);
};

// Dynamic content updates
Page.setLabelWithFormatting = function(text) {
    Page.Widgets.myLabel.parseCaption(text);
};
```