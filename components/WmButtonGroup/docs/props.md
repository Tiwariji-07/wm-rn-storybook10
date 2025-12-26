# Props

## Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vertical` | boolean | null | Determines the orientation of button arrangement. When true, buttons are stacked vertically |
| `classname` | string | null | Custom CSS class name to apply additional styling |
| `styles` | any | null | Inline styles object for custom styling |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean \| String \| Number | true | Controls component visibility. Can be bound to dynamic values |
| `disabled` | any | false | Disables all buttons in the group when set to true |
| `disabletoucheffect` | boolean | false | Removes touch feedback effects when set to true |

## Loading & Skeleton Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showskeleton` | boolean | undefined | Shows skeleton loading state while content loads |
| `skeletonheight` | string | null | Custom height for the skeleton loader (e.g., '40px') |
| `skeletonwidth` | string | null | Custom width for the skeleton loader (e.g., '200px') |

## Responsive Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Array of device sizes where component should be visible |

## Common Use Cases

### Configure Button Group Layout

```javascript
// Set vertical orientation
Page.Widgets.myButtonGroup.vertical = true;

// Apply custom styling
Page.Widgets.myButtonGroup.styles = {
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  padding: '4px'
};

// Add custom CSS class
Page.Widgets.myButtonGroup.classname = 'custom-button-group';
```

### Control Visibility and State

```javascript
// Show only on specific devices
Page.Widgets.myButtonGroup.showindevice = ['md', 'lg', 'xl'];

// Disable entire button group
Page.Widgets.myButtonGroup.disabled = true;

// Hide button group conditionally
Page.Widgets.myButtonGroup.show = Page.Variables.showControls.dataValue;
```

### Configure Loading States

```javascript
// Enable skeleton loading
Page.Widgets.myButtonGroup.showskeleton = true;
Page.Widgets.myButtonGroup.skeletonwidth = '250px';
Page.Widgets.myButtonGroup.skeletonheight = '44px';

// Disable touch effects for readonly mode
Page.Widgets.myButtonGroup.disabletoucheffect = true;
```