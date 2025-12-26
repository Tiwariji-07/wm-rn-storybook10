# Props

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | The data source for the chart. Can be bound to variables, services, or static data |
| `xaxisdatakey` | string | '' | The field name from dataset to use for X-axis values |
| `yaxisdatakey` | string | '' | The field name from dataset to use for Y-axis values |

## Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `linethickness` | number | 2 | Thickness of the line in pixels |
| `theme` | string | '' | Visual theme for the chart (e.g., 'material', 'bootstrap') |
| `customcolors` | string \| Array<string> | '' | Custom color scheme. Can be comma-separated string or array of colors |
| `interpolation` | string | 'linear' | Line interpolation method: 'linear', 'cardinal', 'step' |
| `highlightpoints` | boolean | false | Whether to show point markers on the line |
| `showvalues` | boolean | false | Whether to display values at data points |

## Layout & Positioning

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | '' | Chart title displayed at the top |
| `subheading` | string | '' | Subtitle displayed below the title |
| `iconclass` | any | '' | CSS class for icon displayed next to title |
| `offsettop` | number | 70 | Top margin in pixels |
| `offsetbottom` | number | 50 | Bottom margin in pixels |
| `offsetleft` | number | 65 | Left margin in pixels |
| `offsetright` | number | 25 | Right margin in pixels |

## Axis Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xaxislabel` | string | '' | Label for X-axis |
| `yaxislabel` | string | '' | Label for Y-axis |
| `xunits` | string | '' | Units displayed with X-axis values |
| `yunits` | string | '' | Units displayed with Y-axis values |
| `showxaxis` | boolean | true | Whether to show X-axis |
| `showyaxis` | boolean | true | Whether to show Y-axis |
| `staggerlabels` | boolean | false | Whether to stagger X-axis labels to prevent overlap |
| `labelangle` | number | 0 | Rotation angle for axis labels in degrees |
| `xaxislabeldistance` | number | undefined | Distance of X-axis label from axis |
| `yaxislabeldistance` | number | undefined | Distance of Y-axis label from axis |
| `offsetxaxis` | number | undefined | Offset for X-axis positioning |
| `offsetyaxis` | number | undefined | Offset for Y-axis positioning |
| `xdomain` | string | 'Min' | X-axis domain calculation method |
| `ydomain` | string | 'Min' | Y-axis domain calculation method |
| `hidegridxaxis` | boolean | false | Whether to hide X-axis grid lines |
| `hidegridyaxis` | boolean | false | Whether to hide Y-axis grid lines |
| `autoadjustlabels` | boolean | false | Whether to automatically adjust label positioning |

## Legend & Labels

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showlegend` | string | 'top' | Legend position: 'top', 'bottom', 'none' |
| `showlabels` | 'inside' \| 'outside' \| 'hide' | 'outside' | Label display mode |
| `legendheight` | number | 0 | Height allocated for legend in pixels |
| `labellegendheight` | number | 0 | Height for label legend area |
| `labeltype` | 'percent' \| 'value' \| 'key-value' \| 'key' | 'percent' | Format for data labels |

## Interaction

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tooltips` | boolean | true | Whether to show tooltips on hover |
| `onSelect` | any | - | Callback function when chart element is selected |

## Loading States

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `skeletonheight` | string | null | Height for skeleton loader |
| `skeletonwidth` | string | null | Width for skeleton loader |
| `loadingicon` | any | 'fa fa-circle-o-notch fa-pulse' | CSS class for loading icon |
| `loadingdatamsg` | any | 'Loading...' | Message shown while loading data |
| `nodatamessage` | any | 'No data found' | Message shown when no data is available |

## Advanced Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | '' | Chart type identifier |
| `shape` | string | '' | Shape configuration for data points |
| `bubblesize` | string | '' | Size configuration for bubble elements |
| `xtickexpr` | (item: any, index: number, length: number) => any | - | Custom function for X-axis tick formatting |
| `ytickexpr` | (item: any, index: number, length: number) => any | - | Custom function for Y-axis tick formatting |

### Configure Line Chart Appearance

```javascript
// Set custom line thickness and colors
Page.Widgets.myLineChart.linethickness = 3;
Page.Widgets.myLineChart.customcolors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

// Configure interpolation for smooth curves
Page.Widgets.myLineChart.interpolation = 'cardinal';

// Highlight data points
Page.Widgets.myLineChart.highlightpoints = true;
Page.Widgets.myLineChart.showvalues = true;
```

### Configure Axes and Labels

```javascript
// Set axis labels and units
Page.Widgets.myLineChart.xaxislabel = 'Time Period';
Page.Widgets.myLineChart.yaxislabel = 'Sales Revenue';
Page.Widgets.myLineChart.yunits = '$';

// Rotate labels to prevent overlap
Page.Widgets.myLineChart.labelangle = 45;
Page.Widgets.myLineChart.staggerlabels = true;

// Hide grid lines
Page.Widgets.myLineChart.hidegridxaxis = true;
```