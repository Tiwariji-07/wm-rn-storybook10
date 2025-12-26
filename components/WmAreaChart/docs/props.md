# Props

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | The data source for the chart. Can be bound to variables, services, or static data |
| `xaxisdatakey` | string | `''` | The field name from the dataset to use for X-axis values |
| `yaxisdatakey` | string | `''` | The field name from the dataset to use for Y-axis values |

## Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `''` | Chart title displayed at the top |
| `subheading` | string | `''` | Subtitle text displayed below the title |
| `iconclass` | any | `''` | CSS class for an icon to display with the title |
| `theme` | string | `''` | Visual theme for the chart styling |
| `customcolors` | string \| Array<string> | `''` | Custom color palette for data series. Can be comma-separated string or array |

## Line and Area Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `linethickness` | number | `2` | Thickness of the line border on the area |
| `interpolation` | string | `'linear'` | How data points are connected. Options: 'linear', 'cardinal', 'step' |
| `highlightpoints` | boolean | `false` | Whether to show dots at data points |

## Axes Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xaxislabel` | string | `''` | Label for the X-axis |
| `yaxislabel` | string | `''` | Label for the Y-axis |
| `xunits` | string | `''` | Unit suffix for X-axis values |
| `yunits` | string | `''` | Unit suffix for Y-axis values |
| `showxaxis` | boolean | `true` | Whether to display the X-axis |
| `showyaxis` | boolean | `true` | Whether to display the Y-axis |
| `xdomain` | string | `'Min'` | X-axis domain calculation method |
| `ydomain` | string | `'Min'` | Y-axis domain calculation method |
| `hidegridxaxis` | boolean | `false` | Hide X-axis grid lines |
| `hidegridyaxis` | boolean | `false` | Hide Y-axis grid lines |

## Layout and Positioning

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `offsettop` | number | `70` | Top margin in pixels |
| `offsetbottom` | number | `50` | Bottom margin in pixels |
| `offsetleft` | number | `65` | Left margin in pixels |
| `offsetright` | number | `25` | Right margin in pixels |
| `offsetxaxis` | number | `undefined` | Additional X-axis offset |
| `offsetyaxis` | number | `undefined` | Additional Y-axis offset |

## Legend and Labels

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showlegend` | string | `'top'` | Legend position: 'top', 'bottom', or 'hide' |
| `legendheight` | number | `0` | Height allocated for legend area |
| `showlabels` | 'inside' \| 'outside' \| 'hide' | `'outside'` | Position of data labels |
| `labeltype` | 'percent' \| 'value' \| 'key-value' \| 'key' | `'percent'` | Format for data labels |
| `showvalues` | boolean | `false` | Whether to display values on data points |
| `labelangle` | number | `0` | Rotation angle for axis labels |
| `staggerlabels` | boolean | `false` | Stagger X-axis labels to prevent overlap |

## Interaction

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tooltips` | boolean | `true` | Enable hover tooltips |
| `onSelect` | any | - | Callback function when data point is selected |

## Loading States

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `loadingicon` | any | `'fa fa-circle-o-notch fa-pulse'` | Icon shown during data loading |
| `loadingdatamsg` | any | `'Loading...'` | Message displayed while loading data |
| `nodatamessage` | any | `'No data found'` | Message shown when no data is available |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | `true` | Enable accessibility features |
| `accessibilitylabel` | string | `undefined` | ARIA label for screen readers |

### Common Use Cases

```javascript
// Basic area chart setup
Page.Widgets.myAreaChart.dataset = Page.Variables.salesData.dataSet;
Page.Widgets.myAreaChart.xaxisdatakey = 'month';
Page.Widgets.myAreaChart.yaxisdatakey = 'revenue';

// Customize appearance
Page.Widgets.myAreaChart.title = 'Monthly Revenue';
Page.Widgets.myAreaChart.customcolors = ['#3498db', '#e74c3c', '#2ecc71'];
Page.Widgets.myAreaChart.interpolation = 'cardinal'; // Smooth curves

// Configure axes
Page.Widgets.myAreaChart.xaxislabel = 'Time Period';
Page.Widgets.myAreaChart.yaxislabel = 'Revenue ($)';
Page.Widgets.myAreaChart.yunits = 'K';
```