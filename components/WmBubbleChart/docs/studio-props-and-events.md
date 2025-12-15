# Props and Events

<details open><summary><strong>Props</strong></summary>

## Data & Content
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| dataset | any | | To be filled |
| xaxisdatakey | string | '' | To be filled |
| yaxisdatakey | string | '' | To be filled |
| bubblesize | string | '' | To be filled |

## Chart Configuration
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | string | '' | To be filled |
| title | string | '' | To be filled |
| subheading | string | '' | To be filled |
| theme | string | '' | To be filled |
| shape | string | '' | To be filled |
| interpolation | string | 'linear' | To be filled |

## Axes Configuration
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| xaxislabel | string | '' | To be filled |
| yaxislabel | string | '' | To be filled |
| xunits | string | '' | To be filled |
| yunits | string | '' | To be filled |
| showxaxis | boolean | true | To be filled |
| showyaxis | boolean | true | To be filled |
| showxaxislabels | boolean | true | To be filled |
| showyaxislabels | boolean | true | To be filled |
| xdomain | string | 'Min' | To be filled |
| ydomain | string | 'Min' | To be filled |
| hidegridxaxis | boolean | false | To be filled |
| hidegridyaxis | boolean | false | To be filled |

## Axes Positioning & Formatting
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| xaxislabeldistance | number | undefined | To be filled |
| yaxislabeldistance | number | undefined | To be filled |
| offsetxaxis | number | undefined | To be filled |
| offsetyaxis | number | undefined | To be filled |
| staggerlabels | boolean | false | To be filled |
| labelangle | number | 0 | To be filled |
| autoadjustlabels | boolean | false | To be filled |
| xtickexpr | (item: any, index: number, length: number) => any | | To be filled |
| ytickexpr | (item: any, index: number, length: number) => any | | To be filled |
| ynumberformat | string | '' | To be filled |

## Visual Styling
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| customcolors | string \| Array<string> | '' | To be filled |
| iconclass | any | '' | To be filled |
| highlightpoints | boolean | false | To be filled |

## Labels & Legend
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showlegend | string | 'top' | To be filled |
| showlabels | 'inside' \| 'outside' \| 'hide' | 'outside' | To be filled |
| labeltype | 'percent' \| 'value' \| 'key-value' \| 'key' | 'percent' | To be filled |
| legendheight | number | 0 | To be filled |
| labellegendheight | number | 0 | To be filled |
| showvalues | boolean | false | To be filled |

## Layout & Spacing
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| offsetbottom | number | 50 | To be filled |
| offsettop | number | 70 | To be filled |
| offsetleft | number | 65 | To be filled |
| offsetright | number | 25 | To be filled |

## Interaction
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| tooltips | boolean | true | To be filled |
| onSelect | any | | To be filled |

## Loading & Data States
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| loadingicon | any | 'fa fa-circle-o-notch fa-pulse' | To be filled |
| loadingdatamsg | any | 'Loading...' | To be filled |
| nodatamessage | any | 'No data found' | To be filled |

## Accessibility
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | To be filled |
| accessibilityrole | AccessibilityRole | | To be filled |
| hint | string | undefined | To be filled |

## Customization
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| renderitempartial | (item: any, index: number, partialName: string)=> React.ReactNode | | To be filled |

</details>

<details><summary><strong>Callback Events</strong></summary>

| Event | Description |
|-------|-------------|
| onSelect | Triggered when a bubble in the chart is selected. Parameters: (event.nativeEvent, this.proxy, selectedItem, selectedChartItem) |
| onBeforerender | Triggered before the chart is rendered. Parameters: (this.proxy, null) |
| onTransform | Triggered when the chart undergoes transformation. Parameters: (undefined, this.proxy) |

</details>

## Touch Event Callback Behavior

The bubble chart component supports standard WaveMaker callback event behaviors. These events can be configured to execute JavaScript code, navigate to other pages, call services, or trigger other actions within the WaveMaker application. Use the Events tab in the Properties panel to configure the desired behavior for each callback event.