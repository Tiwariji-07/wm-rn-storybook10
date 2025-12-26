# Props

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any[] | null | Array of objects or comma-separated string containing caption values mapped to rating values |
| `datafield` | string | 'key' | Field name in dataset that maps to the rating value (should be integer) |
| `displayfield` | string | 'value' | Field name in dataset that represents the caption for each rating level |
| `getDisplayExpression` | Function | null | JavaScript function for custom caption formatting in readonly mode |
| `datavalue` | number | null | Current rating value (number of active stars) |
| `maxvalue` | number | 5 | Maximum number of stars/rating levels (should be ≤ 10) |

## Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconcolor` | string | null | Color of the rating icons/stars |
| `iconsize` | number | null | Size of the rating icons in pixels |
| `showcaptions` | any | true | Whether to display caption text for rating levels |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `readonly` | any | false | Prevents user interaction when true |
| `disabled` | any | false | Disables the rating component |
| `show` | any | true | Controls component visibility |
| `onFieldChange` | any | - | Callback function triggered on value change |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Label for screen readers |
| `accessibilityrole` | AccessibilityRole | 'radiogroup' | ARIA role for the component |
| `hint` | string | undefined | Additional accessibility hint text |

## Common Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom styling object |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component should be visible |
| `showskeleton` | boolean | undefined | Shows loading skeleton |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

### Configure Rating Behavior

```javascript
// Set rating value programmatically
Page.Widgets.myRating.datavalue = 4;

// Configure maximum stars
Page.Widgets.myRating.maxvalue = 10;

// Enable readonly mode
Page.Widgets.myRating.readonly = true;

// Customize icon appearance
Page.Widgets.myRating.iconcolor = '#FFD700';
Page.Widgets.myRating.iconsize = 24;
```

### Setup Dataset for Captions

```javascript
// Using static data
Page.Widgets.myRating.dataset = [
    {key: 1, value: 'Poor'},
    {key: 2, value: 'Fair'}, 
    {key: 3, value: 'Good'},
    {key: 4, value: 'Very Good'},
    {key: 5, value: 'Excellent'}
];

// Using comma-separated string
Page.Widgets.myRating.dataset = 'Poor,Fair,Good,Very Good,Excellent';
```