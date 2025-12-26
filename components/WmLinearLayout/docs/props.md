# Props

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | `'row'` | Defines the primary axis direction for arranging child elements |
| `horizontalalign` | `'left' \| 'center' \| 'right'` | `'left'` | Controls horizontal alignment of child elements within the container |
| `verticalalign` | `'top' \| 'center' \| 'bottom'` | `'top'` | Controls vertical alignment of child elements within the container |
| `spacing` | `any` | `0` | Space between child elements. Inherited by child layouts if not specified |

## Common Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `any` | `false` | Disables user interaction with the layout |
| `show` | `Boolean \| String \| Number` | `true` | Controls visibility of the layout |
| `styles` | `any` | `null` | Custom inline styles object |
| `classname` | `string` | `null` | CSS class name for custom styling |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Device breakpoints where layout should be visible |
| `showskeleton` | `boolean` | `undefined` | Shows skeleton loading state |
| `disabletoucheffect` | `boolean` | `false` | Disables touch feedback effects |

## Child Component Props (linearlayoutitem)

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `flexgrow` | `number` | `null` | Defines how much the item should grow relative to other items |
| `flexshrink` | `number` | `null` | Defines how much the item should shrink relative to other items |
| `disabled` | `any` | `false` | Disables user interaction with the layout item |
| `show` | `Boolean \| String \| Number` | `true` | Controls visibility of the layout item |
| `styles` | `any` | `null` | Custom inline styles object for the item |
| `classname` | `string` | `null` | CSS class name for custom styling of the item |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Device breakpoints where item should be visible |
| `showskeleton` | `boolean` | `undefined` | Shows skeleton loading state for the item |
| `disabletoucheffect` | `boolean` | `false` | Disables touch feedback effects for the item |

### Configure Layout Direction

```javascript
// Set horizontal layout
Page.Widgets.myLayout.direction = 'row';

// Set vertical layout
Page.Widgets.myLayout.direction = 'column';

// Reverse horizontal layout
Page.Widgets.myLayout.direction = 'row-reverse';
```

### Configure Alignment

```javascript
// Center align horizontally
Page.Widgets.myLayout.horizontalalign = 'center';

// Center align vertically
Page.Widgets.myLayout.verticalalign = 'center';

// Set spacing between items
Page.Widgets.myLayout.spacing = 16;
```

### Configure Flex Properties

```javascript
// Set flex grow for responsive sizing
Page.Widgets.myLayoutItem1.flexgrow = 2;
Page.Widgets.myLayoutItem2.flexgrow = 1;

// Item1 will take twice the available space compared to Item2
```