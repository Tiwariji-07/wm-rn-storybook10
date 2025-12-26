# Callback Events

| Event | Description |
|-------|-------------|
| `onSelect` | Triggered when user selects a date or event. Parameters: `(selectedData, dateInfo, calendarInstance, events)` |
| `onViewrender` | Triggered when the calendar view is rendered or changed. Parameters: `(calendarInstance, null)` |
| `onBeforerender` | Triggered before the calendar renders. Parameters: `(null, calendarInstance)` |

### Event Handling Examples

```javascript
// Handle date selection
Page.myCalendarSelect = function(selectedData, dateInfo, calendarInstance, events) {
    console.log("Selected date:", selectedData);
    console.log("Date info:", dateInfo);
    
    // Process selected event data
    if (selectedData) {
        Page.Variables.selectedEvent.setData(selectedData);
    }
};

// Handle view changes
Page.myCalendarViewrender = function(calendarInstance) {
    console.log("Calendar view rendered");
    // Perform actions after view change
};

// Handle before render
Page.myCalendarBeforerender = function(calendarInstance) {
    console.log("Calendar about to render");
    // Prepare data or modify calendar before rendering
};
```