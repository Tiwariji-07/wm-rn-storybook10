# Props

## Accordion Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | 'fadeInDown' | Animation effect applied when expanding/collapsing panes |
| children | any | - | Child accordion pane components |
| defaultpaneindex | number | 0 | Index of the pane that should be expanded by default |
| closeothers | any | true | Whether expanding one pane should close others |
| disabled | any | false | Disables the entire accordion component |
| show | Boolean/String/Number | true | Controls visibility of the accordion |
| styles | any | null | Custom styling object |
| classname | string | null | Additional CSS class names |
| showindevice | array | null | Device breakpoints where component is visible ['xs','sm','md','lg','xl','xxl'] |
| showskeleton | boolean | undefined | Shows skeleton loading state |
| disabletoucheffect | boolean | false | Disables touch feedback effects |

## Accordion Pane Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| children | any | - | Content to be displayed in the pane |
| iconclass | string | null | CSS class for the pane header icon |
| title | string | 'Title' | Header title text for the pane |
| renderPartial | Function | - | Function to render partial page content |
| subheading | string | null | Subtitle text displayed below the title |
| badgevalue | string | null | Value displayed in the badge area |
| badgetype | string | null | Badge style type (primary, success, info, warning, danger) |
| disabled | any | false | Disables the specific pane |
| show | Boolean/String/Number | true | Controls visibility of the pane |
| styles | any | null | Custom styling for the pane |
| classname | string | null | Additional CSS classes for the pane |
| showindevice | array | null | Device breakpoints where pane is visible |
| showskeleton | boolean | undefined | Shows skeleton loading for the pane |
| disabletoucheffect | boolean | false | Disables touch effects for the pane |

## Common Use Cases

### Configure Accordion Behavior
```javascript
// Allow multiple panes to be open
Page.Widgets.myAccordion.closeothers = false;

// Change animation style
Page.Widgets.myAccordion.animation = "slideDown";

// Set default expanded pane
Page.Widgets.myAccordion.defaultpaneindex = 2;
```

### Setup Pane Headers
```javascript
// Configure pane with badge and icon
Page.Widgets.salesPane.title = "Sales Department";
Page.Widgets.salesPane.subheading = "Q4 Performance";
Page.Widgets.salesPane.badgevalue = "15";
Page.Widgets.salesPane.badgetype = "success";
Page.Widgets.salesPane.iconclass = "fa fa-chart-line";
```

### Dynamic Content Loading
```javascript
// Hide skeleton after content loads
Page.Widgets.dataPane.showskeleton = false;

// Show pane conditionally
Page.Widgets.adminPane.show = Page.Variables.userRole.dataValue === 'admin';
```