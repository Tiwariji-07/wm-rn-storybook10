# Props

## Visual Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'default' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'default'` | Determines the visual appearance and color scheme of the progress bar |
| `styles` | `any` | `null` | Custom inline styles to apply to the component |
| `classname` | `string` | `null` | Additional CSS class names to apply for custom styling |

## Progress Values

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `datavalue` | `number` | `30` | Current progress value, should be between minvalue and maxvalue |
| `minvalue` | `number` | `0` | Minimum value for the progress range |
| `maxvalue` | `number` | `100` | Maximum value for the progress range |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilitylabel` | `string` | `undefined` | Accessibility label for screen readers |
| `accessibilityrole` | `AccessibilityRole` | `'progressbar'` | ARIA role for accessibility compliance |

## Tooltip Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showtooltip` | `boolean` | `false` | Whether to display a tooltip on hover or interaction |
| `tooltipposition` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | Position of the tooltip relative to the progress bar |
| `onTooltiptext` | `Function \| null` | `null` | Function to generate custom tooltip text |

## Behavior Control

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `any` | `false` | Whether the component is disabled and non-interactive |
| `show` | `any` | `true` | Controls component visibility |
| `disabletoucheffect` | `boolean` | `false` | Disables touch feedback effects |

## Advanced Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Array of device sizes where the component should be visible |
| `showskeleton` | `boolean` | `undefined` | Shows skeleton loading state when true |

### Common Usage Examples

```javascript
// Configure basic progress
Page.Widgets.myProgressBar.datavalue = 75;
Page.Widgets.myProgressBar.type = 'success';

// Set custom range
Page.Widgets.myProgressBar.minvalue = 0;
Page.Widgets.myProgressBar.maxvalue = 200;
Page.Widgets.myProgressBar.datavalue = 150;

// Enable tooltip with custom positioning
Page.Widgets.myProgressBar.showtooltip = true;
Page.Widgets.myProgressBar.tooltipposition = 'down';

// Configure accessibility
Page.Widgets.myProgressBar.accessibilitylabel = 'File upload progress';
```