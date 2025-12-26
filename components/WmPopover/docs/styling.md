# Styling

The Popover component uses specific CSS classes for different visual states and presentation modes.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `.app-popover` | Default base styling class for all popover components |
| `.app-popover-action-sheet` | Specific styling for action sheet type popovers |
| `.popover-dropdown` | Specific styling for dropdown type popovers |

## Styling Examples

### Custom Popover Appearance

```css
/* Custom popover styling */
.app-popover {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Action sheet specific styling */
.app-popover-action-sheet {
    background-color: #ffffff;
    border-top: 1px solid #e0e0e0;
}

/* Dropdown specific styling */
.popover-dropdown {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    max-height: 300px;
    overflow-y: auto;
}
```

### Trigger Button Styling

```css
/* Style the popover trigger */
.app-popover .btn {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
}

/* Icon styling */
.app-popover .app-icon {
    margin-right: 8px;
    font-size: 16px;
}

/* Badge styling */
.app-popover .badge {
    background-color: #dc3545;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    position: absolute;
    top: -8px;
    right: -8px;
}
```

### Responsive Styling

```css
/* Mobile-first responsive design */
@media (max-width: 768px) {
    .app-popover-action-sheet {
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
    }
}

@media (min-width: 769px) {
    .popover-dropdown {
        position: absolute;
        z-index: 1000;
    }
}
```