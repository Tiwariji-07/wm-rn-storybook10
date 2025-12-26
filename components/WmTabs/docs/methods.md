# Methods

Tab component methods can be accessed via `Page.Widgets.widgetName` for programmatic control.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `setTabLayout` | event: LayoutChangeEvent | void | Sets the tab layout based on layout change event |
| `setTabPaneHeights` | index: number, nativeEvent: LayoutChangeEvent | void | Sets heights for tab panes dynamically |
| `setTabShown` | tabIndex: number, callback: function | void | Shows a specific tab with callback |
| `addTabPane` | tabPane: WmTabpane | void | Adds a new tab pane to the component |
| `removeTabPane` | tabPane: WmTabpane | void | Removes a tab pane from the component |
| `selectTabPane` | tabPane: WmTabpane | void | Selects a specific tab pane |
| `goToTab` | index: any | void | Navigates to tab at specified index |
| `prev` | none | void | Navigates to the previous tab |
| `next` | none | void | Navigates to the next tab |
| `onChange` | newIndex: number | void | Handles tab change logic |
| `renderSkeletonContent` | props: WmTabsProps | void | Renders skeleton loading content |
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property changes |
| `getBackground` | none | React.JSX.Element \| null | Returns background element |

### Common Method Usage

```javascript
// Navigate to previous tab
Page.Widgets.employeeTabs.prev();

// Navigate to next tab  
Page.Widgets.employeeTabs.next();

// Go to specific tab (0-based index)
Page.Widgets.employeeTabs.goToTab(2); // Goes to third tab

// Select tab pane directly
Page.Widgets.employeeTabs.selectTabPane(Page.Widgets.salesPane);

// Add new tab pane programmatically
Page.Widgets.employeeTabs.addTabPane(newTabPane);

// Remove existing tab pane
Page.Widgets.employeeTabs.removeTabPane(Page.Widgets.oldPane);
```

### Navigation Control Examples

```javascript
// Previous button click handler
Page.previousBtnClick = function($event, widget) {
    Page.Widgets.EmployeeTabs.prev();
};

// Next button click handler
Page.nextBtnClick = function($event, widget) {
    Page.Widgets.EmployeeTabs.next();
};

// Go to specific tab
Page.goToSalesBtnClick = function($event, widget) {
    Page.Widgets.EmployeeTabs.goToTab(1); // Navigate to sales tab
};
```