# Styling

The Accordion component can be customized using CSS classes and styling properties.

## CSS Classes

### Accordion Classes

| Class Name | Description |
|------------|-------------|
| app-accordion | Default style class applied to the accordion container |
| app-accordion-rtl | RTL (right-to-left) layout support for the accordion |
| app-accordion1 | Alternative accordion styling variant |

### Accordion Pane Classes

| Class Name | Description |
|------------|-------------|
| app-accordionpane | Default style class applied to each accordion pane |

## Custom Styling Examples

### Accordion Container Styling
```css
/* Custom accordion styling */
.my-custom-accordion {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
}

/* RTL layout adjustments */
.app-accordion-rtl {
    direction: rtl;
}

/* Compact accordion variant */
.app-accordion1 .app-accordionpane {
    margin-bottom: 2px;
}
```

### Accordion Pane Styling
```css
/* Custom pane header styling */
.app-accordionpane .panel-heading {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px;
}

/* Pane content area */
.app-accordionpane .panel-body {
    padding: 20px;
    background-color: #f8f9fa;
}

/* Badge styling */
.app-accordionpane .badge {
    border-radius: 12px;
    font-weight: 600;
}
```

### Responsive Accordion
```css
/* Mobile-friendly accordion */
@media (max-width: 768px) {
    .app-accordion {
        margin: 0 10px;
    }
    
    .app-accordionpane .panel-heading {
        padding: 12px;
        font-size: 14px;
    }
}
```

### Animation Customization
```css
/* Custom expand/collapse animations */
.app-accordionpane .panel-collapse {
    transition: all 0.3s ease-in-out;
}

/* Custom fadeInDown animation */
.fadeInDown {
    animation: fadeInDown 0.4s ease-out;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```