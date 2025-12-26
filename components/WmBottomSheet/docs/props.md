# Props

## Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | `Boolean\|String\|Number` | `true` | Controls the visibility of the bottom sheet |
| `showonrender` | `boolean` | `false` | If true, the sheet opens automatically on page load |
| `disabled` | `any` | `false` | Disables the bottom sheet when set to true |
| `modal` | `boolean` | `true` | Displays the bottom sheet as a modal with backdrop |
| `enablemodalsupport` | `boolean` | `true` | Enables modal behavior and overlay support |

## Height & Sizing

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `bottomsheetheightratio` | `number` | `0.3` | Sets the initial height as a ratio (0 to 1) of the screen height |
| `expand` | `boolean` | `false` | Enables expansion on swipe-up when set to true |
| `bottomsheetexpandedheightratio` | `number` | `0.5` | Sets the height ratio for expanded state |
| `bottomsheetminimumheight` | `number` | `0.1` | Minimum height ratio the sheet can be collapsed to |
| `issticky` | `boolean` | `false` | Makes the bottom sheet stick to a position |

## Interaction Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autoclose` | `'outsideClick'\|'disabled'` | `'outsideClick'` | Controls auto-close behavior - outsideClick closes on tap outside, disabled prevents auto-close |
| `disableswipedownclose` | `boolean` | `false` | Prevents closing via swipe down gesture |
| `enabledragsettle` | `boolean` | `false` | Allows sheet to settle at drag release position instead of snapping |
| `disablescrollonrest` | `boolean` | `false` | Prevents content scrolling when sheet is in collapsed state |
| `disabletoucheffect` | `boolean` | `false` | Disables touch feedback effects |

## Keyboard & Events

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `keyboardverticaloffset` | `number` | `100` | Vertical offset adjustment when keyboard appears |
| `onOpened` | `Function` | `null` | Callback function triggered when sheet opens |
| `onClose` | `Function` | `null` | Callback function triggered when sheet closes |

## Styling & Layout

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | `any` | `null` | Custom styles object for the component |
| `classname` | `string` | `null` | CSS class name for custom styling |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Device breakpoints where component should be visible |
| `showskeleton` | `boolean` | `undefined` | Shows skeleton loading state when enabled |

### Common Use Cases

```javascript
// Basic bottom sheet configuration
Page.Widgets.myBottomSheet.bottomsheetheightratio = 0.4;
Page.Widgets.myBottomSheet.expand = true;
Page.Widgets.myBottomSheet.bottomsheetexpandedheightratio = 0.8;

// Configure auto-close behavior
Page.Widgets.myBottomSheet.autoclose = 'disabled'; // Prevent closing on outside tap
Page.Widgets.myBottomSheet.disableswipedownclose = true; // Prevent swipe down close

// Show bottom sheet on page load
Page.Widgets.myBottomSheet.showonrender = true;
```