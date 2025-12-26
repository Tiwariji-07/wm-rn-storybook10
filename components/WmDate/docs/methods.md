# Methods

The Date component can be accessed and controlled through the Page.Widgets API using the widget name.

```javascript
// Access the date picker widget
Page.Widgets.myDatePicker
```

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| No specific methods available | - | - | This component is primarily controlled through props and events |

### Common Method Use Cases

#### Programmatically Show/Hide Date Picker
```javascript
// Show the date picker
function showDatePicker() {
    Page.Widgets.myDatePicker.isVisible = true;
}

// Hide the date picker
function hideDatePicker() {
    Page.Widgets.myDatePicker.isVisible = false;
}
```

#### Reset Date Selection
```javascript
// Clear the selected date
function resetDate() {
    Page.Widgets.myDatePicker.selectedDate = null;
    Page.Widgets.myDatePicker.isVisible = false;
}
```

#### Dynamic Date Range Configuration
```javascript
// Set date range based on user role
function configureDateRange(userType) {
    const today = new Date();
    const futureLimit = new Date();
    
    if (userType === 'premium') {
        futureLimit.setFullYear(today.getFullYear() + 2);
    } else {
        futureLimit.setMonth(today.getMonth() + 3);
    }
    
    Page.Widgets.myDatePicker.minDate = today;
    Page.Widgets.myDatePicker.maxDate = futureLimit;
}
```