# Props

## Core Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | The data source for the chart. Can be bound to variables or static data |
| `xaxisdatakey` | string | `''` | Field name from dataset to use for segment labels/categories |
| `yaxisdatakey` | string | `''` | Field name from dataset to use for segment values |
| `type` | string | `''` | Chart type identifier |

## Pie-Specific Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `donutratio` | number | `0` | Ratio for donut hole size (0-1). 0 = pie chart, >0 = donut chart |
| `labelplacement` | VictorySliceLabelPlacementType | `'vertical'` | How labels are positioned relative to slices |
| `centerlabel` | any | `''` | Content to display in the center of donut charts |
| `labeltype` | 'percent' \| 'value' \| 'key-value' \| 'key' | `'percent'` | Format for slice labels |
| `showlabels` | 'inside' \| 'outside' \| 'hide' | `'outside'` | Position of slice labels |

## Visual Customization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `''` | Chart title displayed at the top |
| `subheading` | string | `''` | Subtitle text below the main title |
| `theme` | string | `''` | Visual theme for the chart |
| `customcolors` | string \| Array<string> | `''` | Custom color palette for chart segments |
| `iconclass` | any | `''` | CSS class for title icon |

## Layout and Positioning

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `offsettop` | number | `70` | Top margin in pixels |
| `offsetbottom` | number | `50` | Bottom margin in pixels |
| `offsetleft` | number | `65` | Left margin in pixels |
| `offsetright` | number | `25` | Right margin in pixels |
| `showlegend` | string | `'top'` | Legend position ('top', 'bottom', or 'hide') |
| `legendheight` | number | `0` | Height allocated for legend area |
| `labellegendheight` | number | `0` | Height allocated for label legend |

## Interaction and States

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tooltips` | boolean | `true` | Enable/disable hover tooltips |
| `loadingicon` | any | `'fa fa-circle-o-notch fa-pulse'` | Icon shown during data loading |
| `loadingdatamsg` | any | `'Loading...'` | Message shown during data loading |
| `nodatamessage` | any | `'No data found'` | Message shown when no data is available |

## Inherited Chart Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xaxislabel` | string | `''` | Label for x-axis (inherited but not typically used in pie charts) |
| `yaxislabel` | string | `''` | Label for y-axis (inherited but not typically used in pie charts) |
| `labelangle` | number | `0` | Angle for rotated labels |
| `staggerlabels` | boolean | `false` | Stagger label positioning to avoid overlap |

### Common Use Cases

```javascript
// Create a basic pie chart
Page.Widgets.myPieChart.dataset = [
  { category: 'Product A', sales: 150 },
  { category: 'Product B', sales: 200 },
  { category: 'Product C', sales: 100 }
];
Page.Widgets.myPieChart.xaxisdatakey = 'category';
Page.Widgets.myPieChart.yaxisdatakey = 'sales';

// Convert to donut chart
Page.Widgets.myPieChart.donutratio = 0.4;
Page.Widgets.myPieChart.centerlabel = 'Total Sales';

// Customize labels
Page.Widgets.myPieChart.labeltype = 'key-value';
Page.Widgets.myPieChart.showlabels = 'inside';

// Apply custom colors
Page.Widgets.myPieChart.customcolors = ['#FF6384', '#36A2EB', '#FFCE56'];
```