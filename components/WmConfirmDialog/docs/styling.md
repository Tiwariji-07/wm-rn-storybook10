# Styling

## Component CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-confirmdialog` | Primary styling class for the confirm dialog container |
| `app-confirmdialog-rtl` | Right-to-left language support styling |

## Child Component Styles

### DialogContent Styling
| Class Name | Description |
|------------|-------------|
| `app-dialogcontent` | Default styling for the dialog content area containing the message |

### DialogActions Styling
| Class Name | Description |
|------------|-------------|
| `app-dialogactions` | Default styling for the dialog action buttons container |

## Custom Styling Examples

```css
/* Custom confirm dialog styling */
.app-confirmdialog {
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Style the dialog content */
.app-dialogcontent {
    padding: 20px;
    text-align: center;
    font-size: 16px;
    color: #333;
}

/* Style the action buttons */
.app-dialogactions {
    padding: 15px 20px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
}

/* RTL language support */
.app-confirmdialog-rtl {
    direction: rtl;
    text-align: right;
}

/* Warning theme */
.warning-dialog {
    border-left: 4px solid #ff9800;
}

.warning-dialog .app-dialogcontent {
    background-color: #fff3e0;
}

/* Error theme */
.error-dialog {
    border-left: 4px solid #f44336;
}

.error-dialog .app-dialogcontent {
    background-color: #ffebee;
    color: #c62828;
}
```