# Styling

The Progress Circle widget provides multiple CSS classes for customization and theming.

## Default Style Classes

| Class Name | Description |
|------------|-------------|
| `app-progress-circle` | Base style class applied to all progress circle instances |

## Type-Specific Classes

| Class Name | Description |
|------------|-------------|
| `app-default-progress-circle` | Styles for the default progress circle variant |
| `app-success-progress-circle` | Styles for the success state (green/positive) |
| `app-info-progress-circle` | Styles for the info state (blue/informational) |
| `app-warning-progress-circle` | Styles for the warning state (yellow/caution) |
| `app-danger-progress-circle` | Styles for the error/danger state (red/negative) |

## Additional Variant Classes

| Class Name | Description |
|------------|-------------|
| `app-progress-circle1` | Alternative style variant 1 |
| `app-progress-circle2` | Alternative style variant 2 |
| `app-progress-circle3` | Alternative style variant 3 |

### Custom Styling Examples

```css
/* Customize default progress circle */
.app-progress-circle {
    width: 120px;
    height: 120px;
}

/* Success state customization */
.app-success-progress-circle {
    border-color: #28a745;
    color: #28a745;
}

/* Warning state customization */
.app-warning-progress-circle {
    border-color: #ffc107;
    color: #856404;
}
```