# Methods

Access the Anchor component methods through the widget reference: `Page.Widgets.[anchorName]`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onTap` | navigationService: NavigationService, e: SyntheticEvent | void | Programmatically trigger the tap action and navigation |
| `renderBadge` | none | void | Re-render the badge component if badge value has changed |

### Method Usage Examples

```javascript
// Programmatically trigger anchor navigation
Page.navigateToLink = function() {
    const anchor = Page.Widgets.myAnchor;
    anchor.onTap(App.navigationService, null);
};

// Update badge and refresh display
Page.updateAnchorBadge = function(newBadgeValue) {
    const anchor = Page.Widgets.myAnchor;
    anchor.badgevalue = newBadgeValue;
    anchor.renderBadge();
};

// Conditional navigation with validation
Page.conditionalNavigation = function() {
    const anchor = Page.Widgets.myAnchor;
    
    if (anchor.hyperlink && !anchor.disabled) {
        anchor.onTap(App.navigationService, {
            preventDefault: function() {},
            target: anchor
        });
    } else {
        App.notify('Navigation not available', 'error');
    }
};
```