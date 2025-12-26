# Styling

The Panel component provides several CSS classes for customization:

## Default Classes

| Class Name | Description |
|------------|-------------|
| `app-panel` | Base styling for the panel component |
| `app-panel-rtl` | Right-to-left layout support for panels |

## Theme Classes

| Class Name | Description |
|------------|-------------|
| `panel-default` | Default panel styling with neutral colors |
| `panel-primary` | Primary theme styling with brand colors |
| `panel-success` | Success state styling with green accents |
| `panel-info` | Information styling with blue accents |
| `panel-warning` | Warning state styling with yellow/orange accents |
| `panel-danger` | Error/danger state styling with red accents |

## Child Component Styling

| Class Name | Description |
|------------|-------------|
| `app-panel-content` | Styling for the main content area of the panel |
| `app-panel-footer` | Styling for the footer section of the panel |

## Usage Examples

```javascript
// Apply theme class
Page.Widgets.myPanel.classname = 'panel-primary';

// Combine multiple classes
Page.Widgets.myPanel.classname = 'panel-success custom-panel';

// Apply custom styles
Page.Widgets.myPanel.styles = {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};
```

## Conditional Styling

```javascript
// Apply different styles based on state
Page.updatePanelStyle = function(isActive) {
    Page.Widgets.myPanel.classname = isActive ? 'panel-primary' : 'panel-default';
};
```