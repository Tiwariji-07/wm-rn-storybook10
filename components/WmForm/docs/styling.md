# Styling

The Form component provides several CSS classes for styling customization.

## Form Component Classes

| Class Name | Description |
|------------|-------------|
| `.app-form` | Default style class for the main form container |
| `.form-action` | Styles for form action button area |

## Child Component Classes

### Form Body

| Class Name | Description |
|------------|-------------|
| `.app-form-body` | Default style class for form body container |

### Form Field

| Class Name | Description |
|------------|-------------|
| `.app-form-field` | Default style class for individual form fields |
| `.app-form-field-horizontal` | Styles for horizontally laid out form fields |
| `.form-label` | Styles for field labels |

### Form Action

| Class Name | Description |
|------------|-------------|
| `.app-form-action` | Default style class for action buttons |
| `.app-form-action-disabled` | Styles for disabled action buttons |

### Form Footer

| Class Name | Description |
|------------|-------------|
| `.app-form-footer` | Default style class for form footer area |

## Custom Styling Examples

```css
/* Customize form container */
.app-form {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Style form fields */
.app-form-field {
    margin-bottom: 16px;
}

.app-form-field .form-label {
    font-weight: 600;
    color: #333;
    margin-bottom: 4px;
}

/* Horizontal layout styling */
.app-form-field-horizontal {
    flex-direction: row;
    align-items: center;
}

/* Action button styling */
.app-form-action {
    background-color: #007bff;
    border-radius: 4px;
    padding: 12px 24px;
    margin-right: 8px;
}

.app-form-action-disabled {
    background-color: #6c757d;
    opacity: 0.6;
}

/* Form footer styling */
.app-form-footer {
    border-top: 1px solid #dee2e6;
    padding-top: 16px;
    margin-top: 20px;
    text-align: right;
}
```

## Layout-Specific Styling

```css
/* Vertical layout form */
.app-form[data-layout="vertical"] .app-form-field {
    flex-direction: column;
}

/* Horizontal layout form */
.app-form[data-layout="horizontal"] .app-form-field {
    flex-direction: row;
    align-items: center;
}

.app-form[data-layout="horizontal"] .form-label {
    min-width: 120px;
    margin-right: 12px;
    margin-bottom: 0;
}
```