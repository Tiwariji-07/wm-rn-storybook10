# Styling

The Date component supports customization through CSS classes and inline styles for the modal interface and date picker elements.

## CSS Classes

| Class | Description |
|-------|-------------|
| `.date-picker-modal` | Styles the main modal container overlay |
| `.date-picker-header` | Styles the header section containing the title |
| `.date-picker-content` | Styles the main date selection area |
| `.date-picker-footer` | Styles the footer containing action buttons |
| `.date-picker-confirm-btn` | Styles the confirm/select button |
| `.date-picker-cancel-btn` | Styles the cancel button |
| `.date-picker-disabled` | Applied when the component is disabled |
| `.skeleton-loading` | Applied during skeleton loading state |

## Custom Styling

```css
/* Customize modal appearance */
.my-custom-date-picker .date-picker-modal {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Style the header */
.my-custom-date-picker .date-picker-header {
    background-color: #007AFF;
    color: white;
    padding: 16px;
}

/* Customize buttons */
.my-custom-date-picker .date-picker-confirm-btn {
    background-color: #007AFF;
    color: white;
    border-radius: 8px;
}

.my-custom-date-picker .date-picker-cancel-btn {
    background-color: #FF3B30;
    color: white;
    border-radius: 8px;
}
```

## Responsive Styling

```css
/* Tablet-specific styling */
@media (min-width: 768px) {
    .date-picker-modal {
        max-width: 400px;
        margin: 0 auto;
        border-radius: 12px;
    }
}

/* Mobile-specific adjustments */
@media (max-width: 767px) {
    .date-picker-content {
        padding: 20px 16px;
    }
}
```