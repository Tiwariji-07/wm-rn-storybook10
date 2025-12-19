# Callback Events

## Accordion Events

| Event | Description |
|-------|-------------|
| onChange | Triggered when a pane is expanded or collapsed. Parameters: `({}, proxy, expandedId, collapseId, expandedPaneName, collapsedPaneName)` |
| onTap | Triggered when the accordion is tapped. Parameters: `(null, proxy)` |

## Accordion Pane Events

| Event | Description |
|-------|-------------|
| onExpand | Triggered when the pane is expanded. Parameters: `(null, proxy)` |
| onCollapse | Triggered when the pane is collapsed. Parameters: `(null, proxy)` |
| onLoad | Triggered when the pane is loaded. Parameters: `(proxy)` |

## Event Usage Examples

### Accordion onChange Event
```javascript
Page.myAccordionChange = function($event, widget, expandedId, collapseId, expandedPaneName, collapsedPaneName) {
    console.log('Expanded pane:', expandedPaneName);
    console.log('Collapsed pane:', collapsedPaneName);
    
    // Load data when specific pane expands
    if (expandedPaneName === 'dataPane') {
        Page.Variables.dataVariable.invoke();
    }
};
```

### Pane-specific Events
```javascript
// Handle pane expansion
Page.salesPaneExpand = function($event, widget) {
    // Load sales data when pane expands
    Page.Variables.salesData.invoke();
};

// Handle pane collapse
Page.salesPaneCollapse = function($event, widget) {
    // Clean up resources when pane collapses
    Page.Variables.salesData.clearData();
};

// Handle pane load
Page.salesPaneLoad = function(widget) {
    // Initialize pane content
    widget.title = "Sales - " + new Date().getFullYear();
};
```