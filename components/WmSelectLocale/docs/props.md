# Props

## Basic Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | null | Text displayed when no locale is selected |
| displayValue | any | null | Currently displayed value in the component |
| readonly | boolean | null | Prevents user interaction when true |
| disabled | any | false | Disables the component when true |

## Dataset Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataset | any | - | Data source containing available locales (typically supportedLocale variable) |
| datavalue | any | - | Current selected locale value |
| displayfield | any | - | Field name to display in the dropdown |
| datafield | any | - | Field name for the locale value |
| displayexpression | any | - | JavaScript expression for custom display formatting |
| getDisplayExpression | any | - | Function to generate display expression |
| groupby | any | - | Field to group locales by |
| match | any | - | Filter criteria for locale selection |
| orderby | any | - | Sorting configuration for locale list |

## Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displaylabel | any | - | Label text for the component |
| displayimagesrc | any | - | Image source for locale flags/icons |
| iconclass | any | - | CSS class for locale icons |
| dateformat | any | - | Date format for locale-specific formatting |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accessible | boolean | true | Enables accessibility features |
| accessibilitylabel | string | undefined | Screen reader label |
| accessibilityrole | AccessibilityRole | - | ARIA role for the component |
| accessibilitylabelledby | string | undefined | ID of element that labels this component |
| hint | string | undefined | Tooltip text displayed on hover |

## Layout & Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| show | any | true | Controls component visibility |
| styles | any | null | Custom styling object |
| classname | string | null | Additional CSS classes |
| showindevice | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component is visible |
| showskeleton | boolean | undefined | Shows loading skeleton |
| disabletoucheffect | boolean | false | Disables touch feedback effects |

## Technical Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| onFieldChange | any | - | Callback for field value changes |
| triggerValidation | any | - | Triggers form validation |
| skipscripteventtrigger | boolean | false | Skips script event triggering |

### Configure Locale Selection

```javascript
// Set up basic locale selection
Page.Widgets.selectLocale.dataset = Variables.supportedLocale;
Page.Widgets.selectLocale.datafield = 'value';
Page.Widgets.selectLocale.displayfield = 'name';

// Custom display with country flags
Page.Widgets.selectLocale.displayexpression = 'flag + " " + name';

// Set default locale
Page.Widgets.selectLocale.datavalue = 'en';
```

### Programmatic Locale Change

```javascript
// Change locale programmatically
App.changeLocale({'datavalue': 'es'});

// Listen for locale changes
Page.selectLocaleChange = function($event, widget, newVal, oldVal) {
    console.log('Locale changed from', oldVal, 'to', newVal);
    // Custom logic after locale change
};
```