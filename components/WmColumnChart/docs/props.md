# Props

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | The data source for the chart. Can be bound to variables, services, or static data |
| `xaxisdatakey` | string | '' | The field name from dataset to use for X-axis values |
| `yaxisdatakey` | string | '' | The field name from dataset to use for Y-axis values |

## Display & Appearance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `horizontal` | boolean | true | Whether to display the chart horizontally (false for column, true for bar) |
| `viewtype` | string | 'Grouped' | Data arrangement type: 'Grouped', 'Stacked', 'Stream', or 'Expand' |
| `title` | string | '' | Main title displayed at the top of the chart |
| `subheading` | string | '' | Subtitle displayed below the main title |
| `theme` | string | '' | Chart theme for consistent styling |
| `customcolors` | string \| Array<string> | '' | Custom color palette for chart elements |
| `iconclass` | any | '' | CSS class for icon displayed with title |

## Axis Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xaxislabel` | string | '' | Label for the X-axis |
| `yaxislabel` | string | '' | Label for the Y-axis |
| `xunits` | string | '' | Unit label for X-axis values |
| `yunits` | string | '' | Unit label for Y-axis values |
| `showxaxis` | boolean | true | Whether to display the X-axis |
| `showyaxis` | boolean | true | Whether to display the Y-axis |
| `staggerlabels` | boolean | false | Whether to stagger axis labels to prevent overlap |
| `labelangle` | number | 0 | Rotation angle for axis labels |

## Layout & Positioning

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `offsetbottom` | number | 50 | Bottom margin/padding for the chart |
| `offsettop` | number | 70 | Top margin/padding for the chart |
| `offsetleft` | number | 65 | Left margin/padding for the chart |
| `offsetright` | number | 25 | Right margin/padding for the chart |
| `offsetxaxis` | number | undefined | Additional offset for X-axis positioning |
| `offsetyaxis` | number | undefined | Additional offset for Y-axis positioning |
| `xaxislabeldistance` | number | undefined | Distance of X-axis label from axis |
| `yaxislabeldistance` | number | undefined | Distance of Y-axis label from axis |

## Visual Elements

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `barwidth` | number | - | Width of individual bars/columns |
| `showlegend` | string | 'top' | Legend position: 'top', 'bottom', or 'hide' |
| `legendheight` | number | 0 | Height allocated for legend area |
| `showlabels` | 'inside' \| 'outside' \| 'hide' | 'outside' | Position of data labels on chart elements |
| `labeltype` | 'percent' \| 'value' \| 'key-value' \| 'key' | 'percent' | Format of data labels |
| `labellegendheight` | number | 0 | Height for label legend area |
| `tooltips` | boolean | true | Whether to show hover tooltips |
| `showvalues` | boolean | false | Whether to display values on chart elements |

## Grid & Axes Customization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `hidegridxaxis` | boolean | false | Whether to hide X-axis grid lines |
| `hidegridyaxis` | boolean | false | Whether to hide Y-axis grid lines |
| `ydomain` | string | 'Min' | Y-axis domain calculation method |
| `xdomain` | string | 'Min' | X-axis domain calculation method |
| `xtickexpr` | function | - | Custom function for X-axis tick formatting |
| `ytickexpr` | function | - | Custom function for Y-axis tick formatting |
| `autoadjustlabels` | boolean | false | Automatically adjust label positioning |

## Loading & Error States

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `loadingicon` | any | 'fa fa-circle-o-notch fa-pulse' | Icon displayed while loading data |
| `loadingdatamsg` | any | 'Loading...' | Message shown during data loading |
| `nodatamessage` | any | 'No data found' | Message displayed when no data is available |

## Legacy Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | '' | Legacy property for chart type specification |
| `bubblesize` | string | '' | Not applicable to column charts (bubble chart property) |
| `shape` | string | '' | Not applicable to column charts |
| `interpolation` | string | 'linear' | Not applicable to column charts (line chart property) |
| `highlightpoints` | boolean | false | Not applicable to column charts |

### Common Use Cases

```javascript
// Configure grouped column chart with custom colors
Page.Widgets.salesChart.viewtype = 'Grouped';
Page.Widgets.salesChart.customcolors = ['#FF6384', '#36A2EB', '#FFCE56'];
Page.Widgets.salesChart.barwidth = 40;

// Set up stacked column chart for cumulative data
Page.Widgets.stackedChart.viewtype = 'Stacked';
Page.Widgets.stackedChart.showvalues = true;
Page.Widgets.stackedChart.labeltype = 'value';

// Customize axis labels and formatting
Page.Widgets.revenueChart.xaxislabel = 'Quarters';
Page.Widgets.revenueChart.yaxislabel = 'Revenue';
Page.Widgets.revenueChart.yunits = '$';
Page.Widgets.revenueChart.labelangle = 45;
```