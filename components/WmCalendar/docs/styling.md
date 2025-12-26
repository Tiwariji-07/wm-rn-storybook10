# Styling

The Calendar widget supports custom styling through CSS classes and inline styles.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-calendar` | Default style class applied to the calendar component |
| `app-calendar-rtl` | Right-to-left layout styling for RTL languages |

## Custom Styling Examples

```css
/* Customize calendar appearance */
.app-calendar {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background-color: #ffffff;
}

/* Style for RTL layouts */
.app-calendar-rtl {
  direction: rtl;
  text-align: right;
}

/* Custom event styling */
.app-calendar .calendar-event {
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
}

/* Mobile-specific styling */
@media (max-width: 768px) {
  .app-calendar {
    font-size: 14px;
    padding: 8px;
  }
}
```

## Inline Styles

```javascript
// Apply custom inline styles
Page.Widgets.myCalendar.styles = {
  backgroundColor: "#f5f5f5",
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "16px"
};

// Add custom CSS class
Page.Widgets.myCalendar.classname = "my-custom-calendar";
```

## Touch Effect Styling

When `disabletoucheffect` is `false` (default), the calendar provides visual feedback for touch interactions. You can customize these effects:

```css
.app-calendar .touch-highlight {
  background-color: rgba(0, 123, 255, 0.1);
  transition: background-color 0.2s ease;
}
```