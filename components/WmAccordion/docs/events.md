# Callback Events

## Accordion Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onChange` | `({}, proxy, expandedId, collapseId, expandedName, collapsedName)` | Triggered when any pane is expanded or collapsed |
| `onTap` | `(null, proxy)` | Fired when accordion header is tapped |

## Accordion Pane Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onExpand` | `(null, proxy)` | Triggered when the pane is expanded |
| `onCollapse` | `(null, proxy)` | Fired when the pane is collapsed |
| `onLoad` | `(proxy)` | Called when the pane content is loaded |

### Event Usage Examples

#### Track Accordion Changes
```javascript
Page.myAccordionChange = function(widget, proxy, expandedId, collapseId, expandedName, collapsedName) {
    console.log('Expanded pane:', expandedName);
    console.log('Collapsed pane:', collapsedName);
    
    // Update analytics or perform actions based on expanded content
    if (expandedName === 'orders') {
        Page.Actions.loadOrderData.invoke();
    }
};
```

#### Handle Individual Pane Events
```javascript
Page.ordersPaneExpand = function(widget, proxy) {
    // Load data when orders pane is expanded
    Page.Variables.OrdersData.invoke();
};

Page.ordersPaneCollapse = function(widget, proxy) {
    // Clean up or save state when pane is collapsed
    Page.saveUserPreferences();
};
```