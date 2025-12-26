# Methods

Access the popover widget in your page or app scripts using `Page.Widgets.[widgetName]` or through the widget reference.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getDefaultStyles` | none | void | Retrieves the default styling configuration for the popover |
| `renderPopoverContent` | props: WmPopoverProps, styles: WmPopoverStyles, dimensions: any | void | Renders the popover content with specified properties and styling |
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property change events for the popover component |
| `prepareModalOptions` | content: React.ReactNode, styles: WmPopoverStyles, modalService: ModalService | void | Prepares modal configuration options for popover display |

### Method Usage Examples

```javascript
// Get default styles
Page.Widgets.myPopover.getDefaultStyles();

// Manually render popover content
const popoverProps = {
    title: 'Custom Content',
    type: 'dropdown'
};
const customStyles = {
    width: 250,
    height: 300
};
Page.Widgets.myPopover.renderPopoverContent(popoverProps, customStyles, {width: 250, height: 300});

// Handle property changes programmatically
Page.Widgets.myPopover.onPropertyChange('badgevalue', 10, 5);
```

### Programmatic Control

```javascript
// Show/hide popover programmatically
Page.Widgets.myPopover.show = true;
Page.Widgets.myPopover.show = false;

// Update popover content dynamically
Page.updatePopoverContent = function() {
    Page.Widgets.myPopover.title = 'Updated Title';
    Page.Widgets.myPopover.caption = 'New Caption';
};

// Configure popover on page load
Page.onReady = function() {
    var popover = Page.Widgets.myPopover;
    popover.autoclose = 'outsideClick';
    popover.popoverwidth = 280;
    popover.badgevalue = 3;
};
```