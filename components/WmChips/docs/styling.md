# Styling

The Chips component provides several CSS classes for customization:

## Default Style Classes

| Class Name | Description |
|------------|-------------|
| `app-chips` | Default style class for the chips container |
| `form-chips-input-horizontal` | Horizontal layout styling for form chips |
| `app-chips-disabled` | Applied when the component is disabled |

## Custom Styling Examples

### Basic Chip Styling

```css
/* Customize chip appearance */
.app-chips .chip-item {
    background-color: #007AFF;
    border-radius: 20px;
    color: white;
    padding: 8px 16px;
    margin: 4px;
}

/* Disabled state */
.app-chips-disabled {
    opacity: 0.6;
    pointer-events: none;
}
```

### Selected Chip Styling

```css
/* Style for selected chips */
.app-chips .chip-selected {
    background-color: #34C759;
    border: 2px solid #30D158;
}

/* Icon styling in chips */
.app-chips .chip-icon {
    margin-right: 8px;
    font-size: 16px;
}
```

### Input Field Styling

```css
/* Customize the input field */
.form-chips-input-horizontal .chip-input {
    border: none;
    outline: none;
    padding: 8px;
    font-size: 16px;
    min-width: 120px;
}

/* Input placeholder styling */
.form-chips-input-horizontal .chip-input::placeholder {
    color: #999;
    font-style: italic;
}
```

### Responsive Chip Layout

```css
/* Responsive chip container */
.app-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px;
}

/* Ensure chips don't overflow on small screens */
@media (max-width: 480px) {
    .app-chips .chip-item {
        font-size: 14px;
        padding: 6px 12px;
    }
}
```

### Badge and Icon Styling

```css
/* Left and right badge styling */
.app-chips .chip-left-badge {
    background-color: #FF3B30;
    color: white;
    border-radius: 10px;
    padding: 2px 6px;
    font-size: 12px;
    margin-right: 8px;
}

.app-chips .chip-right-badge {
    background-color: #FF9500;
    color: white;
    border-radius: 10px;
    padding: 2px 6px;
    font-size: 12px;
    margin-left: 8px;
}
```