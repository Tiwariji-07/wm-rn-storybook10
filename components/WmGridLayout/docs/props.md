# Props

## LayoutGrid Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | `false` | Disables the grid layout and all interactions |
| `show` | Boolean \| String \| Number | `true` | Controls visibility of the grid layout |
| `styles` | any | `null` | Custom style object for the grid container |
| `classname` | string | `null` | Additional CSS class name for custom styling |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Array of device sizes where the grid should be visible |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state when true |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects |

## GridRow Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | `false` | Disables the row and its interactions |
| `show` | Boolean \| String \| Number | `true` | Controls visibility of the row |
| `styles` | any | `null` | Custom style object for the row |
| `classname` | string | `null` | Additional CSS class name for the row |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Device-specific visibility control |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects |

## GridColumn Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `columnwidth` | number | `null` | Width of the column (1-12 in bootstrap system) |
| `xscolumnwidth` | number | `null` | Column width specifically for extra small devices |
| `disabled` | any | `false` | Disables the column and its interactions |
| `show` | Boolean \| String \| Number | `true` | Controls visibility of the column |
| `styles` | any | `null` | Custom style object for the column |
| `classname` | string | `null` | Additional CSS class name for the column |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Device-specific visibility control |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects |

### Configure Grid Responsive Behavior

```javascript
// Show grid only on tablet and desktop
Page.Widgets.myGrid.showindevice = ['md', 'lg', 'xl'];

// Configure column widths for different layouts
Page.Widgets.myColumn1.columnwidth = 6; // Half width
Page.Widgets.myColumn2.columnwidth = 6; // Half width

// Set specific width for mobile devices
Page.Widgets.myColumn1.xscolumnwidth = 12; // Full width on mobile
```

### Configure Grid Visibility and Loading States

```javascript
// Enable skeleton loading
Page.Widgets.myGrid.showskeleton = true;

// Hide grid conditionally
Page.Widgets.myGrid.show = false;

// Disable touch effects
Page.Widgets.myGrid.disabletoucheffect = true;
```