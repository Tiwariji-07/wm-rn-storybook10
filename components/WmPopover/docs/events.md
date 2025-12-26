# Callback Events

| Event | Description |
|-------|-------------|
| `onShow` | Triggered when the popover becomes visible. Receives event object and widget reference |
| `onHide` | Triggered when the popover is hidden or dismissed. Receives widget reference |
| `onLoad` | Triggered when the popover content is loaded and rendered. Receives widget reference |
| `onTap` | Triggered when the popover trigger is tapped. Receives event object and widget proxy |

### Event Handling Examples

```javascript
// Handle popover show event
Page.myPopoverOnShow = function($event, widget) {
    console.log('Popover opened');
    // Track popover usage analytics
    analytics.track('popover_opened', {
        popover_id: widget.name
    });
};

// Handle popover hide event
Page.myPopoverOnHide = function(widget) {
    console.log('Popover closed');
    // Clean up any temporary data
    widget.badgevalue = null;
};

// Handle popover load
Page.myPopoverOnLoad = function(widget) {
    console.log('Popover content loaded');
    // Initialize popover content
    if (widget.renderPartial) {
        widget.renderPartial();
    }
};

// Handle trigger tap
Page.myPopoverOnTap = function($event, widget) {
    console.log('Popover trigger tapped');
    // Custom logic before popover opens
    if (someCondition) {
        $event.preventDefault();
    }
};
```