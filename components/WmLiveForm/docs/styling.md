# Styling

Live Form styling is handled through WaveMaker's responsive design system and automatically adapts to mobile form factors. The component uses semantic CSS classes that provide consistent styling across the application.

## Component Structure Classes

| CSS Class | Description |
|-----------|-------------|
| `.app-liveform` | Main container for the Live Form component |
| `.liveform-field` | Individual form field containers |
| `.liveform-actions` | Container for form action buttons (Save, Cancel, etc.) |
| `.form-group` | Bootstrap-based field grouping |
| `.has-error` | Applied to fields with validation errors |
| `.readonly-mode` | Applied when form is in read-only state |

## Layout Classes

| CSS Class | Description |
|-----------|-------------|
| `.col-layout-1` | Single column layout |
| `.col-layout-2` | Two column layout |
| `.col-layout-3` | Three column layout |
| `.field-wrapper` | Individual field wrapper for responsive behavior |

## Mobile-Specific Styling

Live Form automatically applies mobile-optimized styles:

- **Touch-friendly input sizing** for better usability
- **Responsive column layouts** that stack on smaller screens
- **Optimized button spacing** for touch interfaces
- **Accessible form labels** with proper contrast ratios

## Custom Styling Examples

```css
/* Custom form container styling */
.app-liveform {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 16px;
}

/* Field spacing for mobile */
.liveform-field {
    margin-bottom: 16px;
}

/* Action button styling */
.liveform-actions .btn {
    min-height: 44px;
    margin: 4px;
}

/* Error state styling */
.has-error .form-control {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
```

**Note**: Live Form inherits styling from bound field widgets (TextInput, NumberInput, DatePicker, etc.). Customize individual field appearance through their respective widget styles.