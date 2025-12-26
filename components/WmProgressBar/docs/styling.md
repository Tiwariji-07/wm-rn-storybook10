# Styling

The Progress Bar widget provides several CSS classes for customization and theming.

## Default CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-progress-bar` | Base class applied to all progress bar instances |
| `app-default-progress-bar` | Applied when type is 'default' |
| `app-success-progress-bar` | Applied when type is 'success' |
| `app-info-progress-bar` | Applied when type is 'info' |
| `app-warning-progress-bar` | Applied when type is 'warning' |
| `app-danger-progress-bar` | Applied when type is 'error' |

## Custom Styling Examples

```css
/* Customize default progress bar appearance */
.app-progress-bar {
    border-radius: 8px;
    height: 12px;
    background-color: #f0f0f0;
}

/* Style success state */
.app-success-progress-bar {
    background: linear-gradient(90deg, #4caf50, #66bb6a);
    box-shadow: 0 2px 4px rgba(76, 175, 80, 0.3);
}

/* Style warning state */
.app-warning-progress-bar {
    background: linear-gradient(90deg, #ff9800, #ffb74d);
    animation: pulse 1.5s infinite;
}

/* Style error state */
.app-danger-progress-bar {
    background: linear-gradient(90deg, #f44336, #ef5350);
}

/* Custom pulse animation for warning state */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* Responsive progress bar sizing */
@media (max-width: 768px) {
    .app-progress-bar {
        height: 8px;
        border-radius: 4px;
    }
}
```

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myProgressBar.styles = {
    backgroundColor: '#e3f2fd',
    border: '2px solid #2196f3',
    borderRadius: '20px',
    height: '20px'
};

// Add custom CSS classes
Page.Widgets.myProgressBar.classname = 'custom-progress-bar animated';
```