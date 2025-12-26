# Props

## Animation Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `source` | string | `''` | Location of the Lottie animation JSON file |
| `speed` | any | `1` | Controls animation speed. Use negative values for reverse direction |
| `autoplay` | any | `false` | Enables automatic playback when component loads |
| `loop` | any | `false` | Makes animation repeat continuously |

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean \| String \| Number | `true` | Controls component visibility |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Device breakpoints where component is visible |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | `false` | Disables user interaction with the component |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects |
| `showskeleton` | boolean | `undefined` | Shows loading skeleton while animation loads |

## Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | `null` | Custom inline styles for the component |
| `classname` | string | `null` | Additional CSS class names |

### Configure Animation Behavior

```javascript
// Set animation to loop continuously
Page.Widgets.myLottie.loop = true;

// Enable autoplay
Page.Widgets.myLottie.autoplay = true;

// Set animation speed (2x faster)
Page.Widgets.myLottie.speed = 2;

// Reverse animation direction
Page.Widgets.myLottie.speed = -1;
```

### Load Animation Source

```javascript
// Set animation source from URL
Page.Widgets.myLottie.source = 'https://example.com/animation.json';

// Set animation source from local file
Page.Widgets.myLottie.source = './assets/animations/loading.json';
```