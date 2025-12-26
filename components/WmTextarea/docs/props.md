# Props

## Text Input
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | string | 'Place your text' | Text displayed when the textarea is empty |
| `floatinglabel` | string | - | Floating label text that appears above the input |
| `datavalue` | any | - | The current value of the textarea |
| `type` | string | 'text' | Input type for the textarea |
| `maxchars` | number | null | Maximum number of characters allowed |
| `limitdisplaytext` | string | null | Custom text to display for character limit |

## Validation
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `required` | boolean | false | Whether the field is required |
| `regexp` | string | null | Regular expression pattern for validation |
| `readonly` | boolean | null | Whether the textarea is read-only |

## Behavior
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autofocus` | boolean | null | Whether to auto-focus the textarea on load |
| `autocomplete` | string | "username" | Autocomplete behavior hint |
| `autotrim` | boolean | true | Whether to automatically trim whitespace |
| `updateon` | string | 'blur' | When to update the value ('blur' or 'change') |
| `hastwowaybinding` | any | false | Enable two-way data binding |

## Accessibility
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role for the component |
| `accessibilitylabelledby` | string | undefined | ID of element that labels this textarea |
| `hint` | string | undefined | Tooltip text shown on hover |

## Display & Styling
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | true | Controls component visibility |
| `disabled` | any | false | Whether the textarea is disabled |
| `classname` | string | null | Custom CSS class name |
| `styles` | any | null | Inline styles object |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where component is visible |

## Skeleton Loading
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showskeleton` | boolean | undefined | Whether to show skeleton loading state |
| `skeletonheight` | string | null | Height of skeleton placeholder |
| `skeletonwidth` | string | null | Width of skeleton placeholder |

## Advanced
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `maskchar` | string | null | Character used for input masking |
| `displayformat` | string | null | Format for displaying the value |
| `skipscripteventtrigger` | boolean | false | Skip script-triggered events |
| `disabletoucheffect` | boolean | false | Disable touch feedback effects |
| `checkFormField` | any | - | Form field validation function |
| `onFieldChange` | any | - | Field change handler |
| `triggerValidation` | any | - | Validation trigger function |

### Common Use Cases

```javascript
// Basic textarea with character limit
Page.Widgets.commentTextarea.maxchars = 500;
Page.Widgets.commentTextarea.placeholder = "Enter your comment here...";

// Enable auto-focus for immediate input
Page.Widgets.feedbackTextarea.autofocus = true;

// Set up validation with regex
Page.Widgets.emailTextarea.regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
Page.Widgets.emailTextarea.required = true;

// Configure read-only display
Page.Widgets.displayTextarea.readonly = true;
Page.Widgets.displayTextarea.datavalue = "This is read-only content";
```