# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | any | 'Message' | The main message text displayed to users |
| `type` | 'success' \| 'warning' \| 'error' \| 'info' \| 'loading' | 'success' | Defines the message type which affects styling and iconography |
| `title` | string | '' | Optional title text displayed above the main caption |
| `variant` | string | 'dark' | Visual variant of the message (dark or light theme) |

## Display Control

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean \| String \| Number | true | Controls the visibility of the message component |
| `hideclose` | any | false | When true, hides the close button from the message |
| `disabled` | any | false | Disables user interaction with the message |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Specifies which device sizes should display the message |
| `showskeleton` | boolean | undefined | Shows skeleton loading state when true |

## Animation

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | 'fadeIn' | Animation type for message entrance |
| `animationdelay` | number | null | Delay in milliseconds before animation starts |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features for screen readers |
| `accessibilitylabel` | string | undefined | Custom accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | 'alert' | ARIA role for the message component |
| `hint` | string | undefined | Additional hint text for accessibility |

## Styling & Interaction

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom inline styles object |
| `classname` | string | null | Additional CSS class names |
| `closeiconclass` | string | 'wi wi-close' | CSS class for the close button icon |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

## Event Handlers

| Name | Type | Description |
|------|------|-------------|
| `onClose` | () => void | Callback function triggered when message is closed |

### Common Use Cases

```javascript
// Display success message
Page.Widgets.successMessage.type = 'success';
Page.Widgets.successMessage.caption = 'Data saved successfully!';
Page.Widgets.successMessage.showMessage();

// Configure error message with title
Page.Widgets.errorMessage.type = 'error';
Page.Widgets.errorMessage.title = 'Validation Error';
Page.Widgets.errorMessage.caption = 'Please fill in all required fields';
Page.Widgets.errorMessage.variant = 'light';

// Auto-hide message after delay
Page.Widgets.infoMessage.animation = 'slideDown';
Page.Widgets.infoMessage.animationdelay = 500;
Page.Widgets.infoMessage.hideclose = false;
```