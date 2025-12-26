# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `datavalue` | number | 30 | The current progress value displayed by the circle |
| `minvalue` | number | 0 | The minimum value for the progress range |
| `maxvalue` | number | 100 | The maximum value for the progress range |
| `type` | 'default' \| 'success' \| 'info' \| 'warning' \| 'error' | 'default' | Visual style variant indicating the status type |

## Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | '' | Primary title text displayed with the progress circle |
| `subtitle` | string | '' | Secondary subtitle text displayed below the title |
| `captionplacement` | string | 'inside' | Controls where the progress value is displayed ('inside' or 'hidden') |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | false | Disables user interaction with the component |
| `show` | Boolean \| String \| Number | true | Controls component visibility |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | 'progressbar' | Accessibility role for the component |

## Layout & Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom inline styles object |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where component is visible |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |

### Common Use Cases

```javascript
// Basic progress tracking
Page.Widgets.myProgress.datavalue = 75;
Page.Widgets.myProgress.title = "Upload Progress";

// Configure progress range
Page.Widgets.myProgress.minvalue = 0;
Page.Widgets.myProgress.maxvalue = 200;
Page.Widgets.myProgress.datavalue = 150;

// Set success state
Page.Widgets.myProgress.type = "success";
Page.Widgets.myProgress.title = "Complete";

// Hide progress value
Page.Widgets.myProgress.captionplacement = "hidden";
```