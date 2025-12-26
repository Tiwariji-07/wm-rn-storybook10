# Props

## Layout & Visibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean \| String \| Number | `true` | Controls the visibility of the tile component |
| `showindevice` | Array | `null` | Specifies device breakpoints where tile should be visible (`'xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl'`) |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | `false` | When true, disables all interactions with the tile |
| `disabletoucheffect` | Boolean | `false` | Disables visual touch feedback effects |

## Animation & Loading

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | String | `null` | CSS animation class to apply to the tile |
| `animationdelay` | Number | `null` | Delay in milliseconds before animation starts |
| `showskeleton` | Boolean | `undefined` | Shows skeleton loading state while content loads |

## Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | `null` | Custom inline styles object |
| `classname` | String | `null` | Additional CSS classes to apply |

### Configure Tile Behavior

```javascript
// Enable skeleton loading
Page.Widgets.myTile.showskeleton = true;

// Add slide-in animation
Page.Widgets.myTile.animation = "slideInUp";
Page.Widgets.myTile.animationdelay = 200;

// Hide on small devices
Page.Widgets.myTile.showindevice = ['md', 'lg', 'xl'];
```

### Conditional Visibility

```javascript
// Show tile based on user role
Page.Widgets.myTile.show = Page.Variables.userData.role === 'admin';

// Toggle tile state
Page.Widgets.myTile.disabled = !Page.Variables.isDataLoaded;
```