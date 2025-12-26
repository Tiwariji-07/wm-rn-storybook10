# Styling

The Button component provides multiple built-in CSS classes for different visual styles and states.

## Default Classes

| Class Name | Description |
|------------|-------------|
| `app-button` | Default button style class |
| `app-button-disabled` | Applied when button is disabled |

## Button Variants

| Class Name | Description |
|------------|-------------|
| `btn-default` | Default button appearance |
| `btn-primary` | Primary action button (usually blue) |
| `btn-secondary` | Secondary action button |
| `btn-success` | Success/positive action (usually green) |
| `btn-warning` | Warning action (usually yellow/orange) |
| `btn-danger` | Destructive/negative action (usually red) |
| `btn-info` | Informational action (usually light blue) |
| `btn-light` | Light colored button |
| `btn-dark` | Dark colored button |
| `btn-link` | Button styled as a link |

## Special Button Types

| Class Name | Description |
|------------|-------------|
| `btn-only-label` | Button with only text, no background |
| `fab-btn` | Floating Action Button style |
| `mini-fab-btn` | Mini Floating Action Button |

### Styling Examples

```javascript
// Apply primary button style
Page.Widgets.myButton.classname = "btn-primary";

// Combine multiple classes
Page.Widgets.myButton.classname = "btn-success btn-lg";

// Floating action button
Page.Widgets.fabButton.classname = "fab-btn";
Page.Widgets.fabButton.iconclass = "fa fa-plus";
Page.Widgets.fabButton.caption = "";

// Custom styling with inline styles
Page.Widgets.customButton.styles = {
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingHorizontal: 20
};
```

### Conditional Styling

```javascript
// Dynamic styling based on state
if (someCondition) {
    Page.Widgets.myButton.classname = "btn-success";
} else {
    Page.Widgets.myButton.classname = "btn-danger";
}

// Disable touch effects for custom styling
Page.Widgets.customButton.disabletoucheffect = true;
Page.Widgets.customButton.styles = {
    opacity: 0.8
};
```