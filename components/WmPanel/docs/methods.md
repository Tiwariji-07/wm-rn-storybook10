# Methods

The Panel component currently does not expose any public methods for programmatic control. Interaction with the panel is primarily through props and event handlers.

## Script Access

Access the panel component through the widgets collection:

```javascript
// Access panel instance
const panelInstance = Page.Widgets.myPanel;

// Modify properties programmatically
Page.Widgets.myPanel.expanded = false;
Page.Widgets.myPanel.title = 'Updated Title';
Page.Widgets.myPanel.badgevalue = '10';
```

### Common Usage Patterns

```javascript
// Toggle panel state programmatically
Page.togglePanel = function() {
    Page.Widgets.myPanel.expanded = !Page.Widgets.myPanel.expanded;
};

// Update badge based on data
Page.updateBadge = function(count) {
    Page.Widgets.myPanel.badgevalue = count.toString();
    Page.Widgets.myPanel.badgetype = count > 0 ? 'danger' : 'success';
};

// Handle panel tap events
Page.myPanelTap = function($event, widget) {
    console.log('Panel tapped:', widget.title);
};
```