# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | 'Title' | Sets the title text displayed in the panel header |
| `subheading` | string | null | Optional subtitle text shown below the title |
| `expanded` | boolean | true | Controls whether the panel is initially expanded or collapsed |
| `collapsible` | boolean | null | Enables expand/collapse functionality for the panel |
| `animation` | string | null | Defines animation type for expand/collapse transitions |

## Badge Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `badgevalue` | string | null | Text or number to display in the badge |
| `badgetype` | string | 'default' | Badge style type (default, primary, success, info, warning, danger) |

## Icon Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | null | CSS class for displaying an icon in the header |
| `iconurl` | string | null | URL path to a custom icon image |
| `iconheight` | number | null | Height of the icon in pixels |
| `iconwidth` | number | null | Width of the icon in pixels |
| `iconmargin` | number | null | Margin around the icon in pixels |

## Layout & Visibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean/String/Number | true | Controls component visibility |
| `showindevice` | array | null | Device breakpoints where component is visible (xs, sm, md, lg, xl, xxl) |
| `showskeleton` | boolean | undefined | Shows loading skeleton while content loads |
| `disabled` | any | false | Disables user interaction with the component |
| `disabletoucheffect` | boolean | false | Removes visual touch feedback effects |

## Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `classname` | string | null | Custom CSS classes to apply to the component |
| `styles` | any | null | Inline styles object for custom styling |

## Advanced

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `renderPartial` | Function | - | Function to render partial content dynamically |

## Child Components

### Panel Content

The `panel-content` component supports all base props including `show`, `disabled`, `classname`, `styles`, `showindevice`, `showskeleton`, and `disabletoucheffect`.

### Panel Footer

The `panel-footer` component supports all base props including `show`, `disabled`, `classname`, `styles`, `showindevice`, `showskeleton`, and `disabletoucheffect`.

### Common Use Cases

```javascript
// Configure panel behavior
Page.Widgets.myPanel.collapsible = true;
Page.Widgets.myPanel.expanded = false;
Page.Widgets.myPanel.animation = 'slide';

// Set badge information
Page.Widgets.myPanel.badgevalue = '5';
Page.Widgets.myPanel.badgetype = 'danger';

// Configure icon
Page.Widgets.myPanel.iconclass = 'fa fa-user';
Page.Widgets.myPanel.iconwidth = 24;
Page.Widgets.myPanel.iconheight = 24;
```