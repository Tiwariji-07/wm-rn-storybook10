# Methods

Access the Icon widget programmatically using `Page.Widgets.{widgetName}` syntax.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getIconDef` | iconClass: string | IconDef | Retrieves icon definition for a given CSS class |
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property change events |
| `getElementToShow` | props: WmIconProps, iconSrc: any | void | Determines which element to display |
| `loadIcon` | iconImage: string \| undefined | void | Loads an image-based icon |
| `renderIcon` | props: WmIconProps | void | Renders the icon component |

### Common Method Use Cases

```javascript
// Get icon definition for validation
const iconDef = Page.Widgets.myIcon.getIconDef('fa fa-star');
if (iconDef) {
    console.log('Valid icon class');
}

// Dynamically load an image icon
Page.Widgets.myIcon.loadIcon('https://example.com/icon.png');

// Listen for property changes
Page.Widgets.myIcon.onPropertyChange = function(name, newValue, oldValue) {
    if (name === 'iconclass') {
        console.log('Icon changed from', oldValue, 'to', newValue);
    }
};

// Programmatically trigger re-render
Page.Widgets.myIcon.renderIcon({
    iconclass: 'fa fa-check',
    iconsize: '1.5em',
    caption: 'Completed'
});
```