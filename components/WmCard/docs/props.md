# Props

## Content Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | null | Main title text displayed in the card header |
| `subheading` | string | null | Secondary heading text displayed below the title |
| `itemlabel` | string | null | Label text for the card item |
| `itemlink` | string | null | URL or navigation link for the card |
| `itembadge` | string | null | Badge text or identifier displayed on the card |
| `itemchildren` | string | null | Child elements or nested content |

## Visual Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `picturesource` | string | null | URL or path to the main card image |
| `imageheight` | number | 200 | Height of the card image in pixels |
| `itemicon` | string | null | Icon identifier or name to display |
| `iconclass` | string | null | CSS class for icon styling |
| `iconurl` | string | null | URL path to a custom icon image |
| `iconheight` | number | null | Height of the icon in pixels |
| `iconwidth` | number | null | Width of the icon in pixels |
| `iconmargin` | number | null | Margin around the icon in pixels |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | string | null | Action configuration for interactive elements |
| `isactive` | string | null | Determines if the card is in an active state |
| `disabled` | any | false | Disables user interaction with the card |
| `show` | any | true | Controls visibility of the card component |
| `disabletoucheffect` | boolean | false | Disables visual touch feedback effects |

## Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Inline styles object for custom styling |
| `classname` | string | null | Additional CSS classes to apply |
| `showindevice` | Array | null | Device breakpoints where card should be visible (xs, sm, md, lg, xl, xxl) |
| `showskeleton` | boolean | undefined | Shows skeleton loading state when true |

## Child Component Props

### Card Content
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `renderPartial` | Function | - | Custom render function for partial content |

### Card Footer
The card footer inherits the same base styling and behavior properties as the main card component.

### Common Usage Examples

```javascript
// Configure basic card content
Page.Widgets.myCard.title = "Product Name";
Page.Widgets.myCard.subheading = "Product Category";
Page.Widgets.myCard.picturesource = "assets/images/product.jpg";

// Set up card with icon
Page.Widgets.myCard.itemicon = "star";
Page.Widgets.myCard.iconclass = "fa fa-star";
Page.Widgets.myCard.iconheight = 24;
Page.Widgets.myCard.iconwidth = 24;

// Configure responsive visibility
Page.Widgets.myCard.showindevice = ["md", "lg", "xl"];

// Add interactive link
Page.Widgets.myCard.itemlink = "/product-details/123";
Page.Widgets.myCard.itembadge = "New";
```