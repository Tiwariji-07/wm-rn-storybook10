# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | string | null | Text displayed when no locale is selected |
| `displayValue` | any | null | Currently displayed value in the selector |
| `datavalue` | any | - | The selected locale's data value |
| `readonly` | boolean | null | Prevents user interaction when true |
| `disabled` | boolean | false | Disables the component when true |
| `show` | boolean/string/number | true | Controls component visibility |

## Dataset Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | Data source for available locales |
| `datafield` | any | - | Field name for the locale value |
| `displayfield` | any | - | Field name for the displayed locale name |
| `displayexpression` | any | - | JavaScript expression for custom display formatting |
| `getDisplayExpression` | any | - | Function to generate display expression |
| `groupby` | any | - | Groups locales by specified field |
| `match` | any | - | Filtering criteria for locale options |
| `orderby` | any | - | Sorting order for locale display |

## Display & Styling

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `displaylabel` | any | - | Custom label for the locale selector |
| `displayimagesrc` | any | - | Image source for locale flags or icons |
| `iconclass` | any | - | CSS class for locale icons |
| `styles` | any | null | Custom styling object |
| `classname` | string | null | Additional CSS classes |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component is visible |
| `showskeleton` | boolean | undefined | Shows loading skeleton while data loads |
| `disabletoucheffect` | boolean | false | Disables touch feedback animations |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role for the component |
| `accessibilitylabelledby` | string | undefined | References element that labels this component |
| `hint` | string | undefined | Tooltip text for additional information |

## Advanced Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dateformat` | any | - | Date formatting for locale-specific dates |
| `onFieldChange` | any | - | Callback for field value changes |
| `triggerValidation` | any | - | Triggers validation on the component |
| `skipscripteventtrigger` | boolean | false | Skips script event triggering |

### Configure Locale Selection

```javascript
// Set default locale
Page.Widgets.myLocaleSelect.datavalue = 'en-US';

// Configure custom display
Page.Widgets.myLocaleSelect.displayexpression = "name + ' (' + code + ')'";

// Enable locale filtering
Page.Widgets.myLocaleSelect.match = {
  enabled: true
};
```

### Setup Locale Dataset

```javascript
// Bind to supported locales variable
Page.Widgets.myLocaleSelect.dataset = Page.Variables.supportedLocales;
Page.Widgets.myLocaleSelect.datafield = 'code';
Page.Widgets.myLocaleSelect.displayfield = 'name';
```