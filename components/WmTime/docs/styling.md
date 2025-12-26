# Styling

The Time component supports custom styling through CSS classes and inline styles. The component renders as a modal overlay with a native time picker interface.

## CSS Classes

| Class | Description |
|-------|-------------|
| `.app-time-picker` | Main container for the time picker component |
| `.time-picker-modal` | Modal overlay wrapper |
| `.time-picker-header` | Header section containing the title |
| `.time-picker-content` | Main content area with the time selection interface |
| `.time-picker-actions` | Footer section with action buttons |
| `.time-picker-confirm` | Confirm/Select button styling |
| `.time-picker-cancel` | Cancel button styling |
| `.time-picker-disabled` | Applied when component is disabled |

## Styling Examples

### Custom Modal Appearance
```css
/* Custom time picker modal */
.my-time-picker .time-picker-modal {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 12px;
}

/* Custom header styling */
.my-time-picker .time-picker-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px;
    text-align: center;
    font-weight: bold;
}
```

### Button Customization
```css
/* Custom action buttons */
.my-time-picker .time-picker-confirm {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
}

.my-time-picker .time-picker-cancel {
    background-color: transparent;
    color: #666;
    border: 2px solid #ddd;
    padding: 12px 24px;
    border-radius: 8px;
}
```

### Responsive Design
```css
/* Mobile-first responsive design */
@media (max-width: 768px) {
    .my-time-picker .time-picker-modal {
        margin: 20px;
        width: calc(100% - 40px);
    }
}

@media (min-width: 769px) {
    .my-time-picker .time-picker-modal {
        max-width: 400px;
        margin: 0 auto;
    }
}
```

### Disabled State Styling
```css
/* Disabled appearance */
.my-time-picker.time-picker-disabled {
    opacity: 0.6;
    pointer-events: none;
}

.my-time-picker.time-picker-disabled .time-picker-content {
    background-color: #f5f5f5;
}
```