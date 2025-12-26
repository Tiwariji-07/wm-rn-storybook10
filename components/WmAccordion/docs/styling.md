# Styling

## Default CSS Classes

### Accordion Container

| Class Name | Description |
|------------|-------------|
| `app-accordion` | Base styling for the accordion container |
| `app-accordion-rtl` | Right-to-left layout support |
| `app-accordion1` | Alternative accordion styling variant |

### Accordion Pane

| Class Name | Description |
|------------|-------------|
| `app-accordionpane` | Default styling for individual accordion panes |

## Customization Examples

### Custom Accordion Styles
```css
/* Custom accordion container */
.my-custom-accordion {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Custom pane styling */
.my-custom-accordion .app-accordionpane {
    border-bottom: 1px solid #f0f0f0;
}

/* Header customization */
.my-custom-accordion .accordion-header {
    background-color: #f8f9fa;
    padding: 16px;
    font-weight: 600;
}

/* Content area styling */
.my-custom-accordion .accordion-content {
    padding: 20px;
    background-color: #ffffff;
}
```

### Responsive Accordion Design
```css
/* Mobile-first responsive design */
.responsive-accordion {
    width: 100%;
    margin: 0;
}

@media (min-width: 768px) {
    .responsive-accordion {
        max-width: 800px;
        margin: 0 auto;
    }
}

/* Touch-friendly pane headers */
.responsive-accordion .accordion-header {
    min-height: 48px;
    display: flex;
    align-items: center;
}
```

### Badge and Icon Styling
```css
/* Custom badge styles */
.accordion-badge {
    background-color: #007bff;
    color: white;
    border-radius: 12px;
    padding: 2px 8px;
    font-size: 12px;
    font-weight: bold;
}

/* Icon positioning and styling */
.accordion-icon {
    margin-right: 12px;
    font-size: 18px;
    color: #6c757d;
}

/* Expand/collapse icon animation */
.accordion-toggle-icon {
    transition: transform 0.3s ease;
}

.accordion-expanded .accordion-toggle-icon {
    transform: rotate(180deg);
}
```