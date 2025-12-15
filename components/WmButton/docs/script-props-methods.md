# Script Props & Methods

The button component properties and methods can be accessed and manipulated via JavaScript using the widget reference pattern. Access the button widget using `Page.Widgets.buttonName` where `buttonName` is the name of your button component.

## Property Access

Set properties using the `setWidgetProperty` method:

```javascript
Page.Widgets.button1.setWidgetProperty("propertyName", value);
```

Get properties using the `getWidgetProperty` method:

```javascript
var value = Page.Widgets.button1.getWidgetProperty("propertyName");
```

## Available Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animation` | string | null | CSS animation class to apply to the button |
| `animationdelay` | number | null | Delay in milliseconds before animation starts |
| `caption` | string | null | Text displayed on the button |
| `badgevalue` | string | null | Badge value displayed on the button |
| `iconclass` | string | null | CSS class for button icon |

## Common Use Cases

### Toggle Button Visibility

```javascript
// Hide button
Page.Widgets.button1.setWidgetProperty("show", false);

// Show button
Page.Widgets.button1.setWidgetProperty("show", true);
```

### Enable/Disable Button

```javascript
// Disable button
Page.Widgets.button1.setWidgetProperty("disabled", true);

// Enable button
Page.Widgets.button1.setWidgetProperty("disabled", false);
```

### Update Button Caption

```javascript
// Change button text
Page.Widgets.button1.setWidgetProperty("caption", "Click Me!");

// Dynamic caption based on state
var isActive = Page.Variables.userActive.dataValue;
Page.Widgets.button1.setWidgetProperty("caption", isActive ? "Deactivate" : "Activate");
```

### Set Button Icon

```javascript
// Set icon class
Page.Widgets.button1.setWidgetProperty("iconclass", "fa fa-save");

// Change icon dynamically
Page.Widgets.button1.setWidgetProperty("iconclass", "wi wi-loading");
```

### Update Badge Value

```javascript
// Set badge value
Page.Widgets.button1.setWidgetProperty("badgevalue", "5");

// Clear badge
Page.Widgets.button1.setWidgetProperty("badgevalue", "");
```

### Apply Animation

```javascript
// Apply animation with delay
Page.Widgets.button1.setWidgetProperty("animation", "fadeIn");
Page.Widgets.button1.setWidgetProperty("animationdelay", 500);
```

## Methods

No custom methods are available for this component. Use the standard widget methods (`setWidgetProperty`, `getWidgetProperty`) for property manipulation.