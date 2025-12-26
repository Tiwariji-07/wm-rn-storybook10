# Props

## Accordion Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | `'fadeInDown'` | Animation type for expand/collapse transitions |
| `defaultpaneindex` | number | `0` | Index of the pane to be expanded by default |
| `closeothers` | boolean | `true` | Whether to close other panes when one is expanded |
| `expandediconclass` | string | - | CSS class for the icon when pane is expanded |
| `collapsediconclass` | string | - | CSS class for the icon when pane is collapsed |
| `disabled` | boolean | `false` | Disables the entire accordion component |
| `show` | boolean | `true` | Controls component visibility |
| `styles` | object | `null` | Custom inline styles |
| `classname` | string | `null` | Additional CSS class names |
| `showindevice` | array | `null` | Device sizes where component is visible |
| `showskeleton` | boolean | `undefined` | Shows skeleton loader while content loads |
| `disabletoucheffect` | boolean | `false` | Disables touch ripple effects |

## Accordion Pane Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | `null` | CSS class for pane header icon |
| `title` | string | `'Title'` | Main heading text for the pane |
| `subheading` | string | `null` | Secondary heading below the title |
| `badgevalue` | string | `null` | Text or number displayed in badge |
| `badgetype` | string | `null` | Badge style (primary, success, info, warning, danger) |
| `disabled` | boolean | `false` | Disables individual pane interaction |
| `show` | boolean | `true` | Controls pane visibility |
| `renderPartial` | function | - | Function to render partial page content |

### Common Use Cases

#### Configure Accordion Behavior
```javascript
// Allow multiple panes to be open
Page.Widgets.myAccordion.closeothers = false;

// Change animation style
Page.Widgets.myAccordion.animation = "slideDown";

// Set default expanded pane
Page.Widgets.myAccordion.defaultpaneindex = 2;
```

#### Setup Accordion Pane with Badge
```javascript
// Configure pane with badge
Page.Widgets.myPane.title = "Orders";
Page.Widgets.myPane.badgevalue = "5";
Page.Widgets.myPane.badgetype = "primary";
Page.Widgets.myPane.iconclass = "wi wi-shopping-cart";
```