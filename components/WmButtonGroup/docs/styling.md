# Styling

The Button Group component provides several CSS classes for customizing its appearance and the appearance of its child buttons.

## Component CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-buttongroup` | Default style class applied to the button group container |
| `btn-group-child` | Applied to all button elements within the group |
| `btn-group-first-child` | Applied specifically to the first button in the group |
| `btn-group-last-child` | Applied specifically to the last button in the group |

## Styling Examples

```css
/* Customize the button group container */
.app-buttongroup {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

/* Style all buttons in the group */
.btn-group-child {
  border: none;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
}

/* Remove border from last button */
.btn-group-last-child {
  border-right: none;
}

/* Special styling for first button */
.btn-group-first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
```

## Vertical Layout Styling

```css
/* Vertical button group adjustments */
.app-buttongroup.vertical .btn-group-child {
  border-right: none;
  border-bottom: 1px solid #e0e0e0;
  display: block;
  width: 100%;
}

.app-buttongroup.vertical .btn-group-last-child {
  border-bottom: none;
}
```