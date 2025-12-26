# Props

## Core Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `donutratio` | number | 0.5 | Controls the thickness of the donut ring. Value between 0-1 where 0 is a full pie and 1 is a thin ring |
| `centerlabel` | any | '' | Custom content to display in the center of the donut chart |
| `dataset` | any | - | The data source for the chart |
| `xaxisdatakey` | string | '' | Field name from dataset to use for slice labels |
| `yaxisdatakey` | string | '' | Field name from dataset to use for slice values |

## Labels and Display

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `labeltype` | 'percent' \| 'value' \| 'key-value' \| 'key' | 'percent' | Format for displaying slice labels |
| `labelplacement` | VictorySliceLabelPlacementType | 'vertical' | How labels are positioned relative to slices |
| `showlabels` | 'inside' \| 'outside' \| 'hide' | 'outside' | Where to display slice labels |
| `labelangle` | number | 0 | Rotation angle for labels in degrees |

## Chart Metadata

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | '' | Chart title displayed at the top |
| `subheading` | string | '' | Subtitle displayed below the title |
| `iconclass` | any | '' | CSS class for an icon to display with the title |
| `type` | string | '' | Chart type identifier |

## Visual Customization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | string | '' | Predefined color theme for the chart |
| `customcolors` | string \| Array<string> | '' | Custom colors for chart slices (comma-separated or array) |
| `showlegend` | string | 'top' | Legend position ('top', 'bottom', or 'hide') |
| `legendheight` | number | 0 | Height allocated for the legend |
| `labellegendheight` | number | 0 | Height for label legend |

## Layout and Positioning

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `offsettop` | number | 70 | Top margin for the chart area |
| `offsetbottom` | number | 50 | Bottom margin for the chart area |
| `offsetleft` | number | 65 | Left margin for the chart area |
| `offsetright` | number | 25 | Right margin for the chart area |

## Interaction and State

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tooltips` | boolean | true | Enable/disable hover tooltips |
| `onSelect` | any | - | Callback function when a slice is selected |

## Loading and Error States

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `loadingicon` | any | 'fa fa-circle-o-notch fa-pulse' | Icon to show while loading data |
| `loadingdatamsg` | any | 'Loading...' | Message displayed while loading |
| `nodatamessage` | any | 'No data found' | Message when no data is available |

### Configure Donut Appearance

```javascript
// Create a thin donut ring
Page.Widgets.myDonutChart.donutratio = 0.8;

// Add center label
Page.Widgets.myDonutChart.centerlabel = "Total: $50,000";

// Show values instead of percentages
Page.Widgets.myDonutChart.labeltype = "value";

// Hide labels
Page.Widgets.myDonutChart.showlabels = "hide";
```

### Custom Colors and Theming

```javascript
// Set custom colors
Page.Widgets.myDonutChart.customcolors = "#FF6B6B,#4ECDC4,#45B7D1,#FFA07A";

// Position legend at bottom
Page.Widgets.myDonutChart.showlegend = "bottom";

// Apply a theme
Page.Widgets.myDonutChart.theme = "Annabelle";
```