# Styling

The Tabs component provides several CSS classes for customization:

## Main Component Classes

| Class Name | Description |
|------------|-------------|
| `app-tabs` | Default style class applied to the tabs container |
| `tabs-with-arrow-indicator` | Style class for tabs with arrow indicators |

## Child Component Classes

| Class Name | Description |
|------------|-------------|
| `app-tabpane` | Default style class applied to individual tab pane content areas |
| `app-tabheader` | Default style class applied to the tab header navigation area |

### Custom Styling Examples

```css
/* Customize tab container */
.app-tabs {
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Style tab headers */
.app-tabheader {
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
}

/* Style tab panes */
.app-tabpane {
    padding: 16px;
    background-color: #ffffff;
    min-height: 200px;
}

/* Customize arrow indicators */
.tabs-with-arrow-indicator {
    border-bottom: 2px solid #007bff;
}
```

### Responsive Styling

```css
/* Mobile-specific tab styling */
@media (max-width: 768px) {
    .app-tabs {
        margin: 0;
        border-radius: 0;
    }
    
    .app-tabheader {
        font-size: 14px;
        padding: 8px;
    }
    
    .app-tabpane {
        padding: 12px;
    }
}
```

The styling system allows for comprehensive customization of the tabs appearance while maintaining consistent behavior across different screen sizes and orientations.