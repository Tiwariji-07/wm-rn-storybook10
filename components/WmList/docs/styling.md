# Styling

The List component provides several CSS classes for customizing appearance and layout.

## Primary Style Classes

| Class | Description |
|-------|-------------|
| `app-list` | Default base style for all list components |
| `app-horizontal-list` | Styles for horizontally oriented lists |
| `app-vertical-list` | Styles for vertically oriented lists |
| `app-horizontal-list-dense` | Dense layout for horizontal lists |
| `app-list-dense` | Dense layout styling for compact lists |

## Child Component Styles

### list-template
| Class | Description |
|-------|-------------|
| `app-list-template` | Default style for list item templates |
| `list-card-template` | Card-style layout for list items |
| `horizontal-list-template` | Template styling for horizontal layouts |
| `vertical-list-template` | Template styling for vertical layouts |

### list-action-template
| Class | Description |
|-------|-------------|
| `app-list-action-template` | Default style for action templates |
| `list-action-btn` | Styling for action buttons within lists |

## Styling Examples

### Custom List Appearance
```css
/* Custom list styling */
.app-list.my-custom-list {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 16px;
}

/* Dense horizontal list */
.app-horizontal-list-dense {
    gap: 8px;
    padding: 12px;
}

/* Custom item template */
.list-card-template {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin: 8px;
}
```

### Action Template Styling
```css
/* Custom action buttons */
.list-action-btn {
    background-color: #007bff;
    color: white;
    border-radius: 6px;
    padding: 8px 16px;
}

/* Left positioned actions */
.app-list-action-template[position="left"] {
    justify-content: flex-start;
}

/* Right positioned actions */
.app-list-action-template[position="right"] {
    justify-content: flex-end;
}
```

### Responsive List Layout
```css
/* Responsive grid layout */
@media (max-width: 768px) {
    .app-horizontal-list {
        flex-direction: column;
    }
}

@media (min-width: 769px) {
    .app-horizontal-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;
    }
}
```