# Styling

The `linearlayout` component provides CSS classes for customization:

## Layout Styles

| Class Name | Description |
|------------|-------------|
| `app-linearlayout` | Default style class applied to the layout container |

## Child Component Styles

| Class Name | Description |
|------------|-------------|
| `app-linearlayoutitem` | Default style class applied to layout items |

## Custom Styling

```javascript
// Apply custom CSS class
Page.Widgets.myLayout.classname = 'custom-layout-style';

// Apply inline styles
Page.Widgets.myLayout.styles = {
  backgroundColor: '#f5f5f5',
  padding: 16,
  borderRadius: 8
};

// Style individual layout items
Page.Widgets.myLayoutItem.classname = 'custom-item-style';
Page.Widgets.myLayoutItem.styles = {
  margin: 8,
  backgroundColor: 'white'
};
```

## CSS Customization

```css
/* Custom layout styling */
.custom-layout-style {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
}

/* Custom layout item styling */
.custom-item-style {
  background-color: #f9f9f9;
  margin: 4px;
  border-radius: 4px;
}

/* Responsive styling */
@media (max-width: 768px) {
  .app-linearlayout {
    flex-direction: column;
  }
}
```