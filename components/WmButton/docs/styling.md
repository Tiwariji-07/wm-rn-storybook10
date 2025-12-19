# Styling

The Button component supports various CSS classes for different visual styles and states.

## Base Classes

| Class Name | Description |
|------------|-------------|
| app-button | Default style class for all buttons |
| app-button-disabled | Applied when button is disabled |

## Button Variants

| Class Name | Description |
|------------|-------------|
| btn-default | Default button style |
| btn-primary | Primary action button (usually blue) |
| btn-secondary | Secondary action button |
| btn-info | Informational button style |
| btn-success | Success/positive action button (green) |
| btn-warning | Warning button style (yellow/orange) |
| btn-danger | Destructive action button (red) |
| btn-link | Text-only button without background |
| btn-dark | Dark themed button |
| btn-light | Light themed button |

## Special Button Types

| Class Name | Description |
|------------|-------------|
| fab-btn | Floating Action Button style |
| mini-fab-btn | Smaller floating action button |
| btn-only-label | Button with text only, no padding/background |

### Custom Styling Examples

#### Apply Button Variant
```javascript
// Set primary button style
Page.Widgets.myButton.classname = 'btn-primary';

// Combine multiple classes
Page.Widgets.myButton.classname = 'btn-success btn-lg';
```

#### Floating Action Button
```javascript
// Create FAB
Page.Widgets.myButton.classname = 'fab-btn';
Page.Widgets.myButton.iconclass = 'fa fa-plus';
Page.Widgets.myButton.caption = ''; // No text for FAB
```

#### Conditional Styling
```javascript
// Dynamic styling based on state
if (Page.Variables.hasErrors.dataSet) {
    Page.Widgets.submitButton.classname = 'btn-danger';
} else {
    Page.Widgets.submitButton.classname = 'btn-success';
}
```

#### Custom Inline Styles
```javascript
// Apply custom styles
Page.Widgets.myButton.styles = {
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: '10px 20px'
};
```