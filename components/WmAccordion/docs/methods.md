# Methods

Accordion methods can be accessed via JavaScript using `Page.Widgets.accordionName.methodName()` for accordion-level methods or `Page.Widgets.paneName.methodName()` for pane-specific methods.

## Accordion Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| addAccordionPane | accordionPane: WmAccordionpane | void | Adds a new accordion pane to the accordion |
| removeAccordionPane | accordionPane: WmAccordionpane | void | Removes an accordion pane from the accordion |
| expand | accordionName: string | void | Expands the specified accordion pane |
| collapse | accordionName: string | void | Collapses the specified accordion pane |
| toggle | index: number, expand: any | void | Toggles the pane at the specified index |
| expandCollapseIcon | item: any, index: number, showBadge: any, showIcon: any, useChevron: any, isExpanded: any | void | Handles expand/collapse icon rendering |
| renderAccordionpane | item: any, index: any, accordionpanes: any[] | void | Renders an accordion pane |

## Common Method Usage

### Programmatic Pane Control
```javascript
// Expand a specific pane
Page.expandSalesData = function() {
    Page.Widgets.myAccordion.expand('salesPane');
};

// Collapse a specific pane
Page.collapseSalesData = function() {
    Page.Widgets.myAccordion.collapse('salesPane');
};

// Toggle pane by index
Page.toggleFirstPane = function() {
    Page.Widgets.myAccordion.toggle(0, true);
};
```

### Dynamic Pane Management
```javascript
// Add new pane dynamically
Page.addNewSection = function() {
    var newPane = /* create new accordion pane */;
    Page.Widgets.myAccordion.addAccordionPane(newPane);
};

// Remove pane
Page.removeSection = function() {
    var paneToRemove = Page.Widgets.targetPane;
    Page.Widgets.myAccordion.removeAccordionPane(paneToRemove);
};
```

### Interactive Controls
```javascript
// Button click handlers for accordion control
Page.expandAllPanes = function() {
    Page.Widgets.myAccordion.closeothers = false;
    Page.Widgets.myAccordion.expand('pane1');
    Page.Widgets.myAccordion.expand('pane2');
    Page.Widgets.myAccordion.expand('pane3');
};

Page.collapseAllPanes = function() {
    Page.Widgets.myAccordion.collapse('pane1');
    Page.Widgets.myAccordion.collapse('pane2');
    Page.Widgets.myAccordion.collapse('pane3');
};
```