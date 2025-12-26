# Styling

The `layoutgrid` component provides multiple CSS classes for customizing the appearance of the grid system and its child components.

## LayoutGrid Classes

| Class Name | Description |
|------------|-------------|
| `app-layoutgrid` | Default style class applied to the main grid container |
| `table` | Table-like styling for structured layouts |
| `table-header-label` | Styling for header labels in table-style grids |

## GridRow Classes

| Class Name | Description |
|------------|-------------|
| `app-gridrow` | Default style class applied to grid rows |
| `table-row` | Standard table row styling |
| `table-header-row` | Special styling for header rows |
| `table-striped-row0` | Styling for even-numbered rows in striped tables |
| `table-striped-row1` | Styling for odd-numbered rows in striped tables |

## GridColumn Classes

| Class Name | Description |
|------------|-------------|
| `app-gridcolumn` | Default style class applied to grid columns |
| `table-cell` | Table cell styling for structured data display |

### Custom Styling Example

```css
/* Customize grid container */
.app-layoutgrid {
  padding: 16px;
  background-color: #f5f5f5;
}

/* Style grid rows with borders */
.app-gridrow {
  border-bottom: 1px solid #e0e0e0;
  padding: 8px 0;
}

/* Style grid columns */
.app-gridcolumn {
  padding: 8px;
  text-align: center;
}

/* Striped row styling */
.table-striped-row0 {
  background-color: #ffffff;
}

.table-striped-row1 {
  background-color: #f9f9f9;
}
```

Apply custom classes using the `classname` prop on any grid component to extend or override default styling.