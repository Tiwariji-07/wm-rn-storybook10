# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | `any` | `null` | Data source for dynamic carousel content |
| `type` | `'static' \| 'dynamic'` | `'static'` | Carousel mode - static for fixed content, dynamic for data-driven content |
| `animation` | `'auto' \| 'none'` | `'auto'` | Controls automatic slide animation |
| `animationinterval` | `number` | `3` | Animation interval in seconds for auto-play |
| `controls` | `'both' \| 'none' \| 'navs' \| 'indicators'` | `'both'` | Visibility of navigation controls |
| `itemkey` | `($item: any, $index: any) => any` | `null` | Key function for dynamic carousel items |
| `renderSlide` | `($item: any, $index: number, carousel: any) => React.ReactNode` | Required | Render function for dynamic carousel slides |

## Gesture & Interaction

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `enablegestures` | `any` | `true` | Enables touch gesture navigation |
| `threshold` | `number` | `5` | Swipe threshold for gesture recognition |
| `disabletoucheffect` | `boolean` | `false` | Disables touch feedback effects |

## Display & Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `maxnoofdots` | `any` | `5` | Maximum number of pagination dots to display |
| `stopatlast` | `boolean` | `false` | Stops at last slide instead of looping |
| `showskeletonchildren` | `boolean` | `false` | Shows skeleton loading for child content |

## Common Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `any` | `false` | Disables carousel interaction |
| `show` | `any` | `true` | Controls component visibility |
| `styles` | `any` | `null` | Custom styling object |
| `classname` | `string` | `null` | Additional CSS class names |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Device breakpoints for visibility |
| `showskeleton` | `boolean` | `undefined` | Shows skeleton loading state |

## Child Component Properties

### carousel-content & carousel-template
Both child components share the same property set:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `any` | `false` | Disables the content area |
| `show` | `any` | `true` | Controls content visibility |
| `styles` | `any` | `null` | Custom styling for content |
| `classname` | `string` | `null` | CSS classes for content |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Device-specific visibility |
| `showskeleton` | `boolean` | `undefined` | Skeleton loading for content |
| `disabletoucheffect` | `boolean` | `false` | Touch effect control |

## Common Use Cases

### Configure Dynamic Carousel
```javascript
// Set up data-driven carousel
Page.Widgets.myCarousel.dataset = Page.Variables.imageData.dataSet;
Page.Widgets.myCarousel.type = 'dynamic';

// Configure animation
Page.Widgets.myCarousel.animation = 'auto';
Page.Widgets.myCarousel.animationinterval = 5;
```

### Configure Static Carousel
```javascript
// Set up static carousel
Page.Widgets.myCarousel.type = 'static';
Page.Widgets.myCarousel.controls = 'both';
Page.Widgets.myCarousel.stopatlast = true;
```

### Customize Gesture Behavior
```javascript
// Fine-tune touch interactions
Page.Widgets.myCarousel.enablegestures = true;
Page.Widgets.myCarousel.threshold = 10;
Page.Widgets.myCarousel.disabletoucheffect = false;
```