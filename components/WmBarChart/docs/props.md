# Props

## Layout & Orientation

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `horizontal` | boolean | true | Determines if bars are displayed horizontally or vertically |
| `viewtype` | string | 'Grouped' | Chart arrangement type: 'Grouped', 'Stacked', 'Stream', or 'Expanded' |
| `barwidth` | number | undefined | Width of individual bars in pixels |

## Data Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | undefined | The data source for the chart |
| `xaxisdatakey` | string | '' | Field name for X-axis data |
| `yaxisdatakey` | string | '' | Field name for Y-axis data |
| `type` | string | '' | Chart type specification |

## Visual Customization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | '' | Chart title displayed at the top |
| `subheading` | string | '' | Subtitle displayed below the title |
| `iconclass` | any | '' | CSS class for the chart icon |
| `theme` | string | '' | Visual theme for the chart |
| `customcolors` | string \| Array<string> | '' | Custom color palette for bars |

## Axis Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xaxislabel` | string | '' | Label for the X-axis |
| `yaxislabel` | string | '' | Label for the Y-axis |
| `xunits` | string | '' | Unit suffix for X-axis values |
| `yunits` | string | '' | Unit suffix for Y-axis values |
| `xaxislabeldistance` | number | undefined | Distance of X-axis label from axis |
| `yaxislabeldistance` | number | undefined | Distance of Y-axis label from axis |
| `offsetxaxis` | number | undefined | X-axis position offset |
| `offsetyaxis` | number | undefined | Y-axis position offset |
| `staggerlabels` | boolean | false | Staggers X-axis labels to prevent overlap |
| `labelangle` | number | 0 | Rotation angle for axis labels |
| `showyaxis` | boolean | true | Controls Y-axis visibility |
| `showxaxis` | boolean | true | Controls X-axis visibility |
| `ydomain` | string | 'Min' | Y-axis domain calculation method |
| `xdomain` | string | 'Min' | X-axis domain calculation method |
| `xtickexpr` | function | undefined | Custom function for X-axis tick formatting |
| `ytickexpr` | function | undefined | Custom function for Y-axis tick formatting |
| `hidegridxaxis` | boolean | false | Hides X-axis grid lines |
| `hidegridyaxis` | boolean | false | Hides Y-axis grid lines |
| `autoadjustlabels` | boolean | false | Automatically adjusts label positioning |

## Legend & Labels

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showlegend` | string | 'top' | Legend position: 'top', 'bottom', or 'hide' |
| `legendheight` | number | 0 | Height allocated for legend area |
| `showlabels` | 'inside' \| 'outside' \| 'hide' | 'outside' | Data label display mode |
| `labellegendheight` | number | 0 | Height for label legend area |
| `labeltype` | 'percent' \| 'value' \| 'key-value' \| 'key' | 'percent' | Format for data labels |
| `showvalues` | boolean | false | Shows values on bars |

## Chart Spacing

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `offsetbottom` | number | 50 | Bottom margin in pixels |
| `offsettop` | number | 70 | Top margin in pixels |
| `offsetleft` | number | 65 | Left margin in pixels |
| `offsetright` | number | 25 | Right margin in pixels |

## Interaction & States

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tooltips` | boolean | true | Enables hover tooltips |
| `loadingicon` | any | 'fa fa-circle-o-notch fa-pulse' | Loading state icon |
| `loadingdatamsg` | any | 'Loading...' | Loading state message |
| `nodatamessage` | any | 'No data found' | No data state message |

## Specialized Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `interpolation` | string | 'linear' | Line interpolation method (for mixed charts) |
| `highlightpoints` | boolean | false | Highlights data points |
| `bubblesize` | string | '' | Bubble size field (for bubble charts) |
| `shape` | string | '' | Data point shape |

### Common Use Cases

```javascript
// Configure horizontal grouped bar chart
Page.Widgets.myBarChart.horizontal = true;
Page.Widgets.myBarChart.viewtype = 'Grouped';
Page.Widgets.myBarChart.showlegend = 'top';

// Customize colors and theme
Page.Widgets.myBarChart.theme = 'material';
Page.Widgets.myBarChart.customcolors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

// Configure axis labels and units
Page.Widgets.myBarChart.xaxislabel = 'Categories';
Page.Widgets.myBarChart.yaxislabel = 'Revenue';
Page.Widgets.myBarChart.yunits = '$';

// Set up stacked view with inside labels
Page.Widgets.myBarChart.viewtype = 'Stacked';
Page.Widgets.myBarChart.showlabels = 'inside';
Page.Widgets.myBarChart.labeltype = 'value';
```