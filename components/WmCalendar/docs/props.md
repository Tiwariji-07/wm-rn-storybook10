# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | `any[]` | `null` | Array of event data to display in the calendar |
| `datavalue` | `string \| number` | `null` | Selected date or date range value |
| `eventstart` | `string` | `null` | Field name in dataset that contains event start date |
| `view` | `'day' \| 'month' \| 'year'` | `'day'` | Default view mode for the calendar |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `any` | `false` | Disables user interaction with the calendar |
| `show` | `Boolean \| String \| Number` | `true` | Controls visibility of the calendar widget |
| `disabletoucheffect` | `boolean` | `false` | Disables touch feedback effects on mobile |
| `showskeleton` | `boolean` | `undefined` | Shows skeleton loading animation |

## Styling & Layout Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | `any` | `null` | Custom inline styles for the calendar |
| `classname` | `string` | `null` | Additional CSS class names |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Device sizes where calendar should be visible |

### Configure Calendar Data

```javascript
// Set event dataset
Page.Widgets.myCalendar.dataset = [
  {
    title: "Meeting",
    start: "2024-01-15T10:00:00",
    end: "2024-01-15T11:00:00"
  },
  {
    title: "Conference", 
    start: "2024-01-20T09:00:00",
    end: "2024-01-20T17:00:00"
  }
];

// Set start date field
Page.Widgets.myCalendar.eventstart = "start";
```

### Change Calendar View

```javascript
// Switch to month view
Page.Widgets.myCalendar.view = "month";

// Switch to day view
Page.Widgets.myCalendar.view = "day";

// Switch to year view
Page.Widgets.myCalendar.view = "year";
```