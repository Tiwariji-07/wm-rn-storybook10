# Styling

The Alert Dialog component supports comprehensive styling through CSS classes and inline styles.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-alertdialog` | Primary style class applied to the alert dialog container |
| `app-dialogcontent` | Style class for the dialog content area (child component) |
| `app-dialogactions` | Style class for the dialog actions/buttons area (child component) |

## Alert Type Styling

The component automatically applies appropriate styling based on the `alerttype` prop:

- **Error**: Red color scheme with warning/error icons
- **Success**: Green color scheme with checkmark icons  
- **Warning**: Orange/yellow color scheme with warning icons
- **Information**: Blue color scheme with info icons

## Custom Styling Examples

```css
/* Customize alert dialog appearance */
.app-alertdialog {
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Style the content area */
.app-dialogcontent {
    padding: 20px;
    text-align: center;
}

/* Customize action buttons */
.app-dialogactions {
    padding: 15px;
    border-top: 1px solid #eee;
}

/* Custom error alert styling */
.custom-error-alert {
    background-color: #fff5f5;
    border-left: 4px solid #e53e3e;
}

/* Custom success alert styling */
.custom-success-alert {
    background-color: #f0fff4;
    border-left: 4px solid #38a169;
}
```

## Responsive Styling

Use the `showindevice` prop to control visibility across different screen sizes, and apply device-specific styles:

```css
/* Mobile-specific styling */
@media (max-width: 768px) {
    .app-alertdialog {
        margin: 10px;
        max-width: calc(100% - 20px);
    }
}

/* Tablet and desktop styling */
@media (min-width: 769px) {
    .app-alertdialog {
        max-width: 400px;
    }
}
```