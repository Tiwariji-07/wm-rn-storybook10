# Methods

Access calendar methods using `Page.Widgets.{widgetName}.methodName()`. For example, if your calendar widget is named `myCalendar`, use `Page.Widgets.myCalendar.methodName()`.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `prepareDataset` | `dataset: any[]` | `void` | Prepares and processes the dataset for calendar display |
| `onPropertyChange` | `name: string, $new: any, $old: any` | `void` | Handles property change events internally |

### Common Method Usage

```javascript
// Update calendar dataset
const newEvents = [
  {
    title: "New Event",
    start: "2024-02-01T14:00:00",
    end: "2024-02-01T15:00:00"
  }
];

Page.Widgets.myCalendar.prepareDataset(newEvents);
```

### Accessing Calendar Properties

```javascript
// Get current view
const currentView = Page.Widgets.myCalendar.view;

// Check if disabled
const isDisabled = Page.Widgets.myCalendar.disabled;

// Get dataset
const events = Page.Widgets.myCalendar.dataset;

// Change view programmatically
Page.Widgets.myCalendar.view = "month";

// Update dataset
Page.Widgets.myCalendar.dataset = newEventData;
Page.Widgets.myCalendar.prepareDataset(newEventData);
```