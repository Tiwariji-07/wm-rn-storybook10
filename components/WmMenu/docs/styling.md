# Styling

The Menu component provides specific CSS classes for customization:

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `.app-menu` | Default style class applied to the menu container |
| `.app-menu-rtl` | Style class for right-to-left text direction support |

## Styling Examples

```css
/* Customize menu container */
.app-menu {
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  background: #ffffff;
}

/* Style menu items */
.app-menu .menu-item {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
}

/* Style menu icons */
.app-menu .menu-icon {
  margin-right: 8px;
  width: 20px;
  text-align: center;
}

/* RTL support */
.app-menu-rtl .menu-icon {
  margin-left: 8px;
  margin-right: 0;
}

/* Custom hover effects */
.app-menu .menu-item:hover {
  background-color: #f5f5f5;
}

/* Nested menu styling */
.app-menu .submenu {
  padding-left: 20px;
  background-color: #fafafa;
}
```

## Dynamic Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myMenu.styles = {
  backgroundColor: '#2196F3',
  color: 'white',
  borderRadius: '4px'
};

// Add custom CSS classes
Page.Widgets.myMenu.classname = 'custom-menu-theme';
```