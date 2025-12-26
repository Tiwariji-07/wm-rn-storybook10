# Props

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | 'row' \| 'column' | - | Sets the flex direction for child components |
| `wrap` | boolean \| string | - | Controls whether children wrap to new lines |
| `alignment` | string | - | Sets the alignment of child components |
| `gap` | number \| string \| 'auto' | - | Spacing between all child components |
| `columngap` | number \| string \| 'auto' | - | Horizontal spacing between child components |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `scrollable` | Boolean | false | Enables scrolling when content exceeds container bounds |
| `sticky` | Boolean | false | Makes the container stick to top during scroll |
| `stickyContainerVisibility` | Boolean | false | Controls visibility of sticky container |
| `stickyContainerOpacity` | Animated.Value | - | Animated opacity value for sticky container |

## Animation Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | null | CSS animation class to apply to container |
| `animationdelay` | number | null | Delay before animation starts (in milliseconds) |

## Event Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onLoad` | Function | - | Callback function executed when container loads |

### Common Use Cases

```javascript
// Create a horizontal layout with gaps
Page.Widgets.myContainer.direction = "row";
Page.Widgets.myContainer.gap = 16;
Page.Widgets.myContainer.alignment = "center";

// Enable scrolling for long content
Page.Widgets.myContainer.scrollable = true;

// Add entrance animation
Page.Widgets.myContainer.animation = "fadeIn";
Page.Widgets.myContainer.animationdelay = 500;

// Create sticky header
Page.Widgets.headerContainer.sticky = true;
Page.Widgets.headerContainer.stickyContainerVisibility = true;
```