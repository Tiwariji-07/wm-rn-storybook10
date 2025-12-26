# Props

## Content Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | any | 'Link' | Text displayed on the popover trigger button |
| `title` | string | null | Title text shown in the popover header |
| `renderPartial` | Function | null | Function to render partial page content in popover |
| `type` | 'action-sheet' \| 'dropdown' | 'action-sheet' | Presentation style of the popover |

## Layout & Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `popoverwidth` | string \| number \| null | 240 | Width of the popover content area |
| `popoverheight` | string \| number \| null | 360 | Height of the popover content area |
| `iconclass` | any | null | CSS class for the trigger icon |
| `iconurl` | string | null | URL for custom icon image |
| `iconposition` | any | 'left' | Position of icon relative to caption (left, right, top) |
| `iconwidth` | number | null | Width of the custom icon in pixels |
| `iconheight` | number | null | Height of the custom icon in pixels |
| `iconmargin` | number | null | Margin around the icon in pixels |
| `badgevalue` | any | null | Value displayed in badge overlay on trigger |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autoclose` | 'outsideClick' \| 'disabled' \| 'always' | 'outsideClick' | When the popover should automatically close |
| `autoopen` | boolean | false | Whether popover opens automatically on component load |
| `animation` | string | null | Animation effect for popover appearance |
| `contentanimation` | string | null | Animation effect for popover content |
| `draghandle` | boolean | false | Shows drag handle for repositioning popover |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | 'button' | ARIA role for the trigger element |
| `hint` | string | undefined | Tooltip text shown on hover |

## Common Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | true | Controls visibility of the component |
| `disabled` | any | false | Disables user interaction with the popover |
| `styles` | any | null | Custom styling object |
| `classname` | string | null | Additional CSS classes |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component is visible |
| `showskeleton` | boolean | undefined | Shows loading skeleton while content loads |
| `disabletoucheffect` | boolean | false | Disables touch feedback animations |

### Configure Popover Behavior

```javascript
// Set auto-close behavior
Page.Widgets.myPopover.autoclose = 'always';

// Configure popover dimensions
Page.Widgets.myPopover.popoverwidth = 300;
Page.Widgets.myPopover.popoverheight = 400;

// Add badge notification
Page.Widgets.myPopover.badgevalue = 5;

// Change popover type
Page.Widgets.myPopover.type = 'dropdown';
```

### Icon Configuration

```javascript
// Using icon class
Page.Widgets.myPopover.iconclass = 'fa fa-menu';
Page.Widgets.myPopover.iconposition = 'left';

// Using custom icon URL
Page.Widgets.myPopover.iconurl = 'assets/images/menu-icon.png';
Page.Widgets.myPopover.iconwidth = 24;
Page.Widgets.myPopover.iconheight = 24;
```