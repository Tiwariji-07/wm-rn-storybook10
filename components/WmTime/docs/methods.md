# Methods

The Time component can be controlled programmatically through the Page.Widgets API. Access the component using `Page.Widgets.{widgetName}` where `{widgetName}` is the name assigned to your Time component.

## Available Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| No specific methods | - | - | This component relies on property manipulation for control |

## Common Method Use Cases

### Programmatic Control
```javascript
// Show the time picker
function showTimePicker() {
    Page.Widgets.myTimePicker.isVisible = true;
}

// Hide the time picker
function hideTimePicker() {
    Page.Widgets.myTimePicker.isVisible = false;
}

// Set specific time
function setTime(hours, minutes) {
    var timeDate = new Date();
    timeDate.setHours(hours);
    timeDate.setMinutes(minutes);
    Page.Widgets.myTimePicker.selectedDateTime = timeDate;
}
```

### Time Validation
```javascript
// Validate selected time
function validateTime() {
    var selectedTime = Page.Widgets.myTimePicker.selectedDateTime;
    if (selectedTime) {
        var hours = selectedTime.getHours();
        var minutes = selectedTime.getMinutes();
        
        // Business hours validation (9 AM to 5 PM)
        if (hours >= 9 && hours < 17) {
            return true;
        } else {
            Page.Actions.showNotification.invoke({
                message: "Please select a time during business hours (9 AM - 5 PM)",
                type: "error"
            });
            return false;
        }
    }
    return false;
}
```

### Dynamic Configuration
```javascript
// Toggle between 12-hour and 24-hour format
function toggleTimeFormat() {
    Page.Widgets.myTimePicker.is24Hour = !Page.Widgets.myTimePicker.is24Hour;
}

// Set time picker text based on user language
function localizeTimePicker(language) {
    switch(language) {
        case 'es':
            Page.Widgets.myTimePicker.timeheadertitle = "Seleccionar Hora";
            Page.Widgets.myTimePicker.timeconfirmationtitle = "Seleccionar";
            Page.Widgets.myTimePicker.timecanceltitle = "Cancelar";
            break;
        case 'fr':
            Page.Widgets.myTimePicker.timeheadertitle = "Sélectionner l'heure";
            Page.Widgets.myTimePicker.timeconfirmationtitle = "Sélectionner";
            Page.Widgets.myTimePicker.timecanceltitle = "Annuler";
            break;
        default:
            Page.Widgets.myTimePicker.timeheadertitle = "Select Time";
            Page.Widgets.myTimePicker.timeconfirmationtitle = "Select";
            Page.Widgets.myTimePicker.timecanceltitle = "Cancel";
    }
}
```