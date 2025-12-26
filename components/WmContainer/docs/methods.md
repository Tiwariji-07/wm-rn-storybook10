# Methods

Access container methods through the widget reference: `Page.Widgets.containerName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getBackground` | none | React.JSX.Element \| null | Returns the background JSX element for the container or null if none |
| `getStickyHeaderTranslateY` | none | void | Calculates and applies the Y-axis translation for sticky header positioning |

### Common Method Usage

```javascript
// Get container background element
const backgroundElement = Page.Widgets.myContainer.getBackground();
if (backgroundElement) {
    console.log("Container has custom background");
}

// Manually trigger sticky header calculation
Page.Widgets.stickyContainer.getStickyHeaderTranslateY();

// Example: Programmatically update sticky container
function updateStickyContainer() {
    const container = Page.Widgets.headerContainer;
    container.sticky = true;
    container.getStickyHeaderTranslateY();
    container.stickyContainerVisibility = true;
}
```