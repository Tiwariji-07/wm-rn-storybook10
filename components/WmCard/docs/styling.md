# Styling

The Card component provides several CSS classes for customization:

## Default Style Classes

| Class Name | Description |
|------------|-------------|
| `app-card` | Default style class applied to the main card container |
| `app-card-content` | Style class for the card content area |
| `app-card-footer` | Style class for the card footer section |

## Custom Styling Examples

```css
/* Customize main card appearance */
.app-card {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 8px;
    background-color: #ffffff;
}

/* Style card content area */
.app-card-content {
    padding: 16px;
    background-color: #f9f9f9;
}

/* Customize card footer */
.app-card-footer {
    border-top: 1px solid #e0e0e0;
    padding: 12px 16px;
    background-color: #fafafa;
}

/* Active card state */
.app-card.active {
    border: 2px solid #007bff;
    box-shadow: 0 6px 12px rgba(0, 123, 255, 0.2);
}

/* Disabled card state */
.app-card.disabled {
    opacity: 0.6;
    pointer-events: none;
}

/* Custom card variants */
.app-card.featured {
    border-left: 4px solid #28a745;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

/* Responsive card styling */
@media (max-width: 768px) {
    .app-card {
        margin: 4px;
        border-radius: 8px;
    }
    
    .app-card-content {
        padding: 12px;
    }
}
```

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myCard.styles = {
    backgroundColor: '#e3f2fd',
    borderRadius: '16px',
    padding: '20px'
};

// Add custom CSS class
Page.Widgets.myCard.classname = 'featured-card custom-shadow';

// Conditional styling based on data
Page.applyCardTheme = function(card, data) {
    if (data.priority === 'high') {
        card.classname = 'app-card priority-high';
    } else if (data.status === 'completed') {
        card.classname = 'app-card status-completed';
    }
};
```