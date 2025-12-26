# Styling

## CSS Classes

| Class Name | Component | Description |
|------------|-----------|-------------|
| `app-dialog` | Dialog | Default style class for the main dialog container |
| `app-dialogcontent` | DialogContent | Default style class for the dialog content area |
| `app-dialogactions` | DialogActions | Default style class for the dialog actions/buttons area |

## Styling Examples

```css
/* Customize dialog container */
.app-dialog {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 500px;
}

/* Style dialog content */
.app-dialogcontent {
    padding: 20px;
    min-height: 200px;
    background-color: #ffffff;
}

/* Customize action buttons area */
.app-dialogactions {
    padding: 15px 20px;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

/* Custom dialog themes */
.success-dialog {
    border-left: 4px solid #4caf50;
}

.warning-dialog {
    border-left: 4px solid #ff9800;
}

.error-dialog {
    border-left: 4px solid #f44336;
}
```

## Child Component Styling

Each child component (`dialogcontent`, `dialogactions`) can be styled independently using their respective CSS classes. Apply custom styles through the `classname` prop or by targeting the default classes.