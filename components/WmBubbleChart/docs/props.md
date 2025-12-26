# Props

## Data Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | The data source for the chart. Can be bound to variables, services, or static data |
| `xaxisdatakey` | string | `''` | The field name from the dataset to use for X-axis values |
| `yaxisdatakey` | string | `''` | The field name from the dataset to use for Y-axis values |
| `bubblesize` | string | `''` | The field name from the dataset that determines bubble sizes |

## Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `''` | Main title displayed at the top of the chart |
| `subheading` | string | `''` | Subtitle displayed below the main title |
| `iconclass` | any | `''` | CSS class for an icon to display with the title |
| `theme` | string | `''` | Visual theme for the chart (e.g., 'material', 'dark') |
| `customcolors` | string \| Array<string> | `''` | Custom color scheme for bubbles. Can be comma-separated values or array |
| `shape` | string | `''` | Shape of the bubbles (e.g., 'circle', 'square') |

## Axis Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xaxislabel` | string | `''` | Label for the X-axis |
| `yaxislabel` | string | `''` | Label for the Y-axis |
| `xunits` | string | `''` | Units to display with X-axis values |
| `yunits` | string | `''` | Units to display with Y-axis values |
| `xdomain` | string | `'Min'` | Domain calculation for X-axis ('Min', 'Max', 'Auto') |
| `ydomain` | string | `'Min'` | Domain calculation for Y-axis ('Min', 'Max', 'Auto') |
| `showxaxis` | boolean | `true` | Whether to display the X-axis |
| `showyaxis` | boolean | `true` | Whether to display the Y-axis |
| `staggerlabels` | boolean | `false` | Stagger axis labels to prevent overlap |
| `labelangle` | number | `0` | Rotation angle for axis labels in degrees |

## Layout and Positioning

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `offsettop` | number | `70` | Top margin of the chart in pixels |
| `offsetbottom` | number | `50` | Bottom margin of the chart in pixels |
| `offsetleft` | number | `65` | Left margin of the chart in pixels |
| `offsetright` | number | `25` | Right margin of the chart in pixels |
| `xaxislabeldistance` | number | `undefined` | Distance of X-axis label from the axis |
| `yaxislabeldistance` | number | `undefined` | Distance of Y-axis label from the axis |
| `offsetxaxis` | number | `undefined` | X-axis offset position |
| `offsetyaxis` | number | `undefined` | Y-axis offset position |

## Legend and Labels

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showlegend` | string | `'top'` | Legend position ('top', 'bottom', 'none') |
| `legendheight` | number | `0` | Height allocated for the legend |
| `showlabels` | 'inside' \| 'outside' \| 'hide' | `'outside'` | Position of data labels on bubbles |
| `labeltype` | 'percent' \| 'value' \| 'key-value' \| 'key' | `'percent'` | Type of label to display |
| `labellegendheight` | number | `0` | Height for label legend |

## Interaction and Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tooltips` | boolean | `true` | Enable hover tooltips |
| `highlightpoints` | boolean | `false` | Highlight data points on hover |
| `showvalues` | boolean | `false` | Display values on bubbles |
| `autoadjustlabels` | boolean | `false` | Automatically adjust label positioning |

## Grid and Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `hidegridxaxis` | boolean | `false` | Hide X-axis grid lines |
| `hidegridyaxis` | boolean | `false` | Hide Y-axis grid lines |
| `interpolation` | string | `'linear'` | Line interpolation method |

## Advanced Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xtickexpr` | function | - | Custom function for X-axis tick formatting |
| `ytickexpr` | function | - | Custom function for Y-axis tick formatting |
| `type` | string | `''` | Chart type specification |

## Loading and Error States

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
| `hint` | string | `undefined` | Hint text for accessibility |

### Common Use Cases

```javascript
// Configure bubble chart with sales data
Page.Widgets.salesBubbleChart.dataset = Page.Variables.salesData.dataSet;
Page.Widgets.salesBubbleChart.xaxisdatakey = 'revenue';
Page.Widgets.salesBubbleChart.yaxisdatakey = 'profit';
Page.Widgets.salesBubbleChart.bubblesize = 'marketShare';

// Customize appearance
Page.Widgets.salesBubbleChart.title = 'Sales Performance Analysis';
Page.Widgets.salesBubbleChart.xaxislabel = 'Revenue (USD)';
Page.Widgets.salesBubbleChart.yaxislabel = 'Profit Margin (%)';
Page.Widgets.salesBubbleChart.customcolors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

// Configure layout
Page.Widgets.salesBubbleChart.showlegend = 'top';
Page.Widgets.salesBubbleChart.tooltips = true;
Page.Widgets.salesBubbleChart.showlabels = 'outside';
```