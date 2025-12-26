# Styling

The Textarea component provides several CSS classes for customization:

## Primary Classes

| Class Name | Description |
|------------|-------------|
| `app-textarea` | Default base styling for all textarea components |
| `form-textarea-input-horizontal` | Styling for horizontal form layout orientation |
| `app-textarea-disabled` | Applied when the textarea is in disabled state |
| `app-textarea-rtl` | Right-to-left text direction support |
| `app-textarea-with-label` | Additional styling when floating label is present |

## Styling Examples

```css
/* Custom textarea styling */
.app-textarea {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    line-height: 1.5;
}

/* Focused state */
.app-textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* Disabled state customization */
.app-textarea-disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
}

/* With floating label */
.app-textarea-with-label {
    margin-top: 20px;
}

/* RTL text support */
.app-textarea-rtl {
    text-align: right;
    direction: rtl;
}

/* Error state */
.app-textarea.error {
    border-color: #dc3545;
}

/* Character limit warning */
.app-textarea.near-limit {
    border-color: #ffc107;
}
```

## Responsive Styling

```css
/* Mobile optimizations */
@media (max-width: 768px) {
    .app-textarea {
        font-size: 16px; /* Prevents zoom on iOS */
        min-height: 100px;
    }
}

/* Tablet and desktop */
@media (min-width: 769px) {
    .app-textarea {
        min-height: 120px;
    }
}
```