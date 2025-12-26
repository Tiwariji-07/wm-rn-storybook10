# Methods

The Button component inherits from BaseProps but does not define additional public methods. You can access and manipulate the button through its properties using the standard widget access pattern.

## Widget Access

Access the button widget using: `Page.Widgets.buttonName`

### Common Method Usage

```javascript
// Show/hide button
Page.Widgets.myButton.show = true;
Page.Widgets.myButton.show = false;

// Enable/disable button
Page.Widgets.myButton.disabled = false;
Page.Widgets.myButton.disabled = true;

// Update button text and styling
Page.Widgets.myButton.caption = "Updated Text";
Page.Widgets.myButton.classname = "btn-success";

// Change icon dynamically
Page.Widgets.myButton.iconclass = "fa fa-check";
Page.Widgets.myButton.iconposition = "right";

// Update badge value
Page.Widgets.myButton.badgevalue = "3";

// Trigger programmatic events
Page.Widgets.myButton.onTap();
```

### Property Access Examples

```javascript
// Get current button state
const isDisabled = Page.Widgets.myButton.disabled;
const currentCaption = Page.Widgets.myButton.caption;
const isVisible = Page.Widgets.myButton.show;

// Conditional button updates
if (Page.Widgets.myButton.disabled) {
    Page.Widgets.myButton.disabled = false;
    Page.Widgets.myButton.caption = "Enabled";
}
```