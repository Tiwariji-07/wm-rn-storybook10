# Props

## Navigation Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | 'pills' | Sets the navigation style type |
| `layout` | string | '' | Defines the layout arrangement of navigation items |
| `dataset` | any | null | Data source for navigation items. Can be bound to variables, services, or static data |
| `ischildnav` | boolean | false | Indicates if this is a child navigation component |
| `indent` | any | 0 | Sets the indentation level for nested navigation items |

## Item Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemlabel` | string \| function | 'label' | Property name or function to get item label |
| `itemlink` | string \| function | 'link' | Property name or function to get item navigation link |
| `itemicon` | string \| function | 'icon' | Property name or function to get item icon |
| `itembadge` | string \| function | null | Property name or function to get item badge |
| `itemchildren` | string | null | Property name for child navigation items |
| `isactive` | string \| function | null | Property name or function to determine active state |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onSelect` | function | ($event, target, $item) => {} | Callback function when navigation item is selected |
| `getDisplayExpression` | function | (label) => null | Function to customize display expression |
| `disabled` | boolean | false | Disables the entire navigation component |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

## Display

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | boolean \| string \| number | true | Controls component visibility |
| `showindevice` | array | null | Array of device sizes where component should be visible ('xs', 'sm', 'md', 'lg', 'xl', 'xxl') |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |

## Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | object | null | Custom inline styles object |
| `classname` | string | null | Additional CSS class names |

### Configure Navigation Behavior

```javascript
// Set navigation data from a variable
Page.Widgets.myNavbar.dataset = Page.Variables.menuData.dataSet;

// Handle navigation selection
Page.Widgets.myNavbar.onSelect = function($event, target, $item) {
    console.log('Selected item:', $item.label);
    // Navigate to selected page
    App.Actions.goToPage($item.link);
};

// Configure item display properties
Page.Widgets.myNavbar.itemlabel = 'title';
Page.Widgets.myNavbar.itemicon = 'iconClass';
Page.Widgets.myNavbar.itemlink = 'url';
```

### Dynamic Navigation Setup

```javascript
// Create navigation data programmatically
Page.navigationData = [
    { title: 'Home', iconClass: 'fa fa-home', url: 'Main' },
    { title: 'Profile', iconClass: 'fa fa-user', url: 'Profile' },
    { title: 'Settings', iconClass: 'fa fa-cog', url: 'Settings' }
];

// Bind to navbar
Page.Widgets.myNavbar.dataset = Page.navigationData;
```