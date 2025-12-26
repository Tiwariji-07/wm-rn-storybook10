# Props

## Core Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | `string` | `''` | The text displayed on the menu trigger button |
| `dataset` | `any` | `null` | Data source for menu items (can be array or variable) |
| `iconclass` | `any` | `'fa fa-caret-down'` | CSS class for the trigger icon |
| `disabled` | `any` | `false` | Whether the menu is disabled |
| `show` | `Boolean \| String \| Number` | `true` | Controls menu visibility |

## Item Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemlabel` | `string \| ((item: any) => string)` | `'label'` | Property or function to get item label |
| `itemlink` | `string \| ((item: any) => string)` | `'link'` | Property or function to get item link |
| `itemicon` | `string \| ((item: any) => string)` | `'icon'` | Property or function to get item icon |
| `itembadge` | `string \| ((item: any) => string)` | `null` | Property or function to get item badge |
| `itemchildren` | `string` | `null` | Property name for nested menu items |
| `isactive` | `string \| ((item: any) => string)` | `null` | Property or function to determine if item is active |

## Animation and Display

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animateitems` | `string` | `'slide'` | Animation type for menu items (slide, fade, scale) |
| `getDisplayExpression` | `any` | `(label: string) => null` | Custom expression for item display |
| `disabletoucheffect` | `boolean` | `false` | Disable touch feedback effects |

## Styling and Layout

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | `any` | `null` | Custom CSS styles object |
| `classname` | `string` | `null` | Additional CSS classes |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Device sizes where menu is visible |
| `showskeleton` | `boolean` | `undefined` | Show skeleton loading state |

### Common Use Cases

```javascript
// Configure dynamic menu from data
Page.Widgets.myMenu.dataset = [
  { label: 'Home', icon: 'fa fa-home', link: '/home' },
  { label: 'Profile', icon: 'fa fa-user', link: '/profile' },
  { label: 'Settings', icon: 'fa fa-gear', link: '/settings' }
];

// Set custom item properties
Page.Widgets.myMenu.itemlabel = 'title';
Page.Widgets.myMenu.itemicon = 'iconClass';
Page.Widgets.myMenu.itemlink = 'url';

// Configure animations
Page.Widgets.myMenu.animateitems = 'fade';

// Create nested menu structure
Page.Widgets.myMenu.dataset = [
  {
    label: 'Products',
    children: [
      { label: 'Category 1', link: '/products/cat1' },
      { label: 'Category 2', link: '/products/cat2' }
    ]
  }
];
Page.Widgets.myMenu.itemchildren = 'children';
```