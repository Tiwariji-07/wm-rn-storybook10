# Methods

Accordion methods can be accessed via the widget reference: `Page.Widgets.accordionName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `addAccordionPane` | `accordionPane: WmAccordionpane` | `void` | Dynamically adds a new pane to the accordion |
| `removeAccordionPane` | `accordionPane: WmAccordionpane` | `void` | Removes an existing pane from the accordion |
| `expand` | `accordionName: string` | `void` | Expands the specified accordion pane by name |
| `collapse` | `accordionName: string` | `void` | Collapses the specified accordion pane by name |
| `toggle` | `index: number, expand: boolean` | `void` | Toggles pane state at specified index |

### Common Method Usage

#### Programmatic Control
```javascript
// Expand specific pane
Page.Widgets.myAccordion.expand('ordersPane');

// Collapse specific pane
Page.Widgets.myAccordion.collapse('ordersPane');

// Toggle pane by index
Page.Widgets.myAccordion.toggle(1, true); // Expand pane at index 1
```

#### Dynamic Pane Management
```javascript
// Add new pane dynamically
const newPane = /* create new accordion pane */;
Page.Widgets.myAccordion.addAccordionPane(newPane);

// Remove existing pane
Page.Widgets.myAccordion.removeAccordionPane(Page.Widgets.oldPane);
```

#### Conditional Expansion
```javascript
// Expand different panes based on user role
if (Page.Variables.currentUser.dataSet.role === 'admin') {
    Page.Widgets.settingsAccordion.expand('adminPanel');
} else {
    Page.Widgets.settingsAccordion.expand('userSettings');
}
```

#### Sequential Pane Navigation
```javascript
// Function to navigate through panes
Page.navigateToNextPane = function(currentIndex) {
    const totalPanes = Page.Widgets.myAccordion.accordionpanes.length;
    const nextIndex = (currentIndex + 1) % totalPanes;
    
    Page.Widgets.myAccordion.collapse(currentIndex);
    Page.Widgets.myAccordion.expand(nextIndex);
};
```