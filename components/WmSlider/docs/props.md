# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `range` | boolean | false | Enables range selection mode allowing two values to be selected |
| `minvalue` | number | 0 | Minimum value of the slider range |
| `maxvalue` | number | 100 | Maximum value of the slider range |
| `step` | number | 1 | Increment value for slider movement |
| `datatype` | 'number' \| 'dataset' | "number" | Determines if slider works with numeric values or dataset |

## Visual Customization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showmarkers` | any | false | Controls whether scale markers are displayed on the slider |
| `showtooltip` | any | false | Enables tooltip display showing current value |
| `tooltipdirection` | TooltipDirection | "up" | Direction where tooltip appears relative to slider |
| `markerlabeltext` | Array<string \| number \| {title: string, position?: string}> \| string | [] | Custom labels for slider markers |
| `getToolTipExpression` | (item: number) => string | - | Function to customize tooltip content |

## Dataset Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | Data source when datatype is 'dataset' |
| `datavalue` | any | - | Current selected data value |
| `displayfield` | any | - | Field to display from dataset items |
| `datafield` | any | - | Field containing actual values in dataset |
| `displayexpression` | any | - | JavaScript expression for custom display formatting |
| `getDisplayExpression` | any | - | Function to generate display expression |
| `groupby` | any | - | Field to group dataset items |
| `match` | any | - | Filter criteria for dataset |
| `orderby` | any | - | Sorting criteria for dataset items |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `readonly` | boolean | null | Prevents user interaction when true |
| `disabled` | any | false | Disables the slider component |
| `show` | any | true | Controls component visibility |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | ARIA label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role attribute |
| `accessibilitylabelledby` | string | undefined | References element that labels this component |
| `hint` | string | undefined | Tooltip text shown on hover |

## Layout and Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom inline styles |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component is visible |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

### Common Use Cases

```javascript
// Configure basic numeric slider
Page.Widgets.volumeSlider.minvalue = 0;
Page.Widgets.volumeSlider.maxvalue = 100;
Page.Widgets.volumeSlider.step = 5;

// Enable range selection for price filter
Page.Widgets.priceSlider.range = true;
Page.Widgets.priceSlider.showtooltip = true;
Page.Widgets.priceSlider.showmarkers = true;

// Setup dataset-based slider
Page.Widgets.ratingSlider.datatype = 'dataset';
Page.Widgets.ratingSlider.dataset = Page.Variables.ratingsData.dataSet;
Page.Widgets.ratingSlider.datafield = 'value';
Page.Widgets.ratingSlider.displayfield = 'label';
```