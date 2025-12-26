# Methods

Navbar widget methods can be accessed through the page scope: `Page.Widgets.navbarName.methodName()`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `computeItemStyles` | props: WmNavbarProps | void | Computes and applies styling for navigation items |
| `renderNavItem` | item: NavigationDataItem, index: number, props: WmNavbarProps | void | Renders individual navigation item with specified properties |

### Common Method Usage

```javascript
// Refresh navigation item styles
Page.Widgets.myNavbar.computeItemStyles({
    type: 'pills',
    layout: 'horizontal'
});

// Manually render navigation item
const navItem = {
    label: 'New Item',
    icon: 'fa fa-star',
    link: 'NewPage'
};
Page.Widgets.myNavbar.renderNavItem(navItem, 0, Page.Widgets.myNavbar.props);
```