# Callback Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onFocus` | (event, proxy) | Triggered when the locale selector gains focus |
| `onBlur` | ({}, proxy) | Triggered when the locale selector loses focus |
| `onChange` | (undefined, proxy, value, oldValue) | Triggered when a new locale is selected. Default behavior changes app locale and reloads the application |
| `onTap` | (e) | Triggered when the component is tapped |
| `onTouchstart` | (e) | Triggered when touch interaction begins |
| `onDoubletap` | (e) | Triggered on double-tap gesture |
| `onLongtap` | (e) | Triggered on long-press gesture |
| `onTouchend` | (e) | Triggered when touch interaction ends |

## Event Usage Examples

```javascript
// Custom locale change handler
Page.myLocaleSelectChange = function($event, widget, newVal, oldVal) {
    // Custom logic before locale change
    console.log('Changing locale from', oldVal, 'to', newVal);
    
    // Change app locale
    App.changeLocale({datavalue: newVal});
    
    // Optional: Custom reload logic
    // App.reload();
};

// Handle focus events
Page.myLocaleSelectFocus = function($event, widget) {
    console.log('Locale selector focused');
};
```