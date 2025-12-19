# Methods

The Button component can be accessed and controlled programmatically through the page script using `Page.Widgets.buttonName`.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| setWidgetProperty | (property, value) | void | Sets any widget property dynamically |
| getWidgetProperty | (property) | any | Gets the current value of a widget property |

### Common Method Use Cases

#### Dynamic Property Updates
```javascript
// Change button caption dynamically
Page.Widgets.myButton.setWidgetProperty('caption', 'Updated Text');

// Update icon class
Page.Widgets.myButton.setWidgetProperty('iconclass', 'fa fa-check');

// Toggle button state
Page.Widgets.myButton.setWidgetProperty('disabled', !Page.Widgets.myButton.disabled);
```

#### Property Access
```javascript
// Get current button state
const isDisabled = Page.Widgets.myButton.getWidgetProperty('disabled');
const currentCaption = Page.Widgets.myButton.getWidgetProperty('caption');

// Conditional actions based on state
if (!isDisabled) {
    // Button is enabled, perform action
}
```

#### Animation Control
```javascript
// Apply animation
Page.Widgets.myButton.setWidgetProperty('animation', 'fadeIn');
Page.Widgets.myButton.setWidgetProperty('animationdelay', 500);

// Remove animation
Page.Widgets.myButton.setWidgetProperty('animation', null);
```