# Props

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | 'Option 1, Option 2, Option 3' | The data source for radio button options. Can be an array, object, or bound variable |
| `datavalue` | any | - | The currently selected value |
| `datafield` | any | - | Property name to use as the value when dataset contains objects |
| `displayfield` | any | - | Property name to use as the display text when dataset contains objects |
| `displayexpression` | any | - | JavaScript expression for custom display formatting |
| `getDisplayExpression` | any | - | Function to generate display expressions dynamically |
| `groupby` | any | - | Field to group radio options by |
| `orderby` | any | - | Field(s) to sort the options by |
| `match` | any | - | Filter criteria for dataset items |

## Layout & Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemsperrow` | any | {xs: 1, sm: 1, md: 1, lg: 1} | Number of radio buttons per row for different screen sizes |
| `radiosetscroll` | boolean | true | Whether the radioset should be scrollable when content overflows |
| `displaylabel` | any | - | Label text to display above the radioset |
| `displayValue` | any | - | Override display value for selected item |
| `displayimagesrc` | any | - | Image source for custom radio button styling |
| `iconclass` | any | - | CSS class for custom icons |

## Rendering & Templates

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `renderitempartial` | (item: any, index: number, partialName: string) => React.ReactNode | - | Custom render function for individual radio items |
| `numberofskeletonitems` | number \| string | - | Number of skeleton items to show during loading |
| `showskeleton` | boolean | undefined | Whether to show skeleton loading state |

## Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `readonly` | boolean | null | When true, prevents user interaction |
| `disabled` | boolean | false | When true, disables the entire radioset |
| `show` | any | true | Controls visibility of the component |
| `skipscripteventtrigger` | boolean | false | When true, script-triggered changes won't fire events |
| `disabletoucheffect` | boolean | false | Disables touch feedback animations |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | Accessibility role for the component |
| `accessibilitylabelledby` | string | undefined | References another element that labels this component |
| `hint` | string | undefined | Hint text for accessibility |

## Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom style object |
| `classname` | string | null | CSS class name for styling |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component should be visible |

## Form Integration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onFieldChange` | any | - | Callback function for field value changes |
| `triggerValidation` | any | - | Triggers form validation |
| `dateformat` | any | - | Date format for date-type values |

### Configure Layout Behavior

```javascript
// Set different items per row for different screen sizes
Page.Widgets.myRadioset.itemsperrow = {
    xs: 1,  // 1 item per row on extra small screens
    sm: 2,  // 2 items per row on small screens
    md: 3,  // 3 items per row on medium screens
    lg: 4   // 4 items per row on large screens
};

// Enable/disable scrolling
Page.Widgets.myRadioset.radiosetscroll = true;
```

### Configure Data Binding

```javascript
// Bind to simple array
Page.Widgets.myRadioset.dataset = ['Option A', 'Option B', 'Option C'];

// Bind to object array with specific fields
Page.Widgets.myRadioset.dataset = [
    {id: 1, name: 'First Option', value: 'opt1'},
    {id: 2, name: 'Second Option', value: 'opt2'}
];
Page.Widgets.myRadioset.datafield = 'value';
Page.Widgets.myRadioset.displayfield = 'name';

// Set default selection
Page.Widgets.myRadioset.datavalue = 'opt1';
```