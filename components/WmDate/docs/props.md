# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `isVisible` | boolean | `false` | Controls the visibility of the date picker modal |
| `selectedDate` | any | - | The currently selected date value |
| `minDate` | Date \| string | - | Minimum selectable date to restrict user selection |
| `maxDate` | Date \| string | - | Maximum selectable date to restrict user selection |

## Event Handlers

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onClose` | () => void | - | Callback function triggered when the modal is closed |
| `onSelect` | (date: Date) => void | - | Callback function triggered when a date is selected |
| `onCancel` | () => void | - | Callback function triggered when cancel button is pressed |

## UI Customization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dateheadertitle` | string | `"Select Date"` | Title text displayed in the date picker header |
| `dateconfirmationtitle` | string | `"Select"` | Text for the confirmation/select button |
| `datecanceltitle` | string | `"Cancel"` | Text for the cancel button |

## Behavior Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | any | `false` | Disables the date picker interaction |
| `show` | any | `true` | Controls component visibility with Boolean/String/Number values |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects on interaction |

## Layout & Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | `null` | Custom styling object for component appearance |
| `classname` | string | `null` | CSS class name for additional styling |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | `null` | Device breakpoints where component should be visible |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state while component loads |

### Common Use Cases

#### Configure Date Picker with Validation
```javascript
// Set date range restrictions
Page.Widgets.myDatePicker.minDate = new Date('2023-01-01');
Page.Widgets.myDatePicker.maxDate = new Date('2023-12-31');

// Show the date picker
Page.Widgets.myDatePicker.isVisible = true;
```

#### Customize Labels
```javascript
// Customize the date picker interface text
Page.Widgets.myDatePicker.dateheadertitle = 'Choose Appointment Date';
Page.Widgets.myDatePicker.dateconfirmationtitle = 'Confirm';
Page.Widgets.myDatePicker.datecanceltitle = 'Back';
```

#### Handle Date Selection
```javascript
// Set up date selection handling
Page.myDatePickeronSelect = function(date) {
    console.log('Selected date:', date);
    // Process the selected date
    Page.Widgets.selectedDateLabel.caption = date.toLocaleDateString();
};
```