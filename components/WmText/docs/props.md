# Props

## Basic Configuration
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | 'text' | Specifies the input type (text, email, password, number, etc.) |
| `placeholder` | string | 'Enter text' | Placeholder text shown when the input is empty |
| `datavalue` | any | - | The current value of the text input |
| `floatinglabel` | string | - | Text for floating label that animates above the input |
| `required` | boolean | false | Whether the field is required for form submission |
| `disabled` | boolean | false | Whether the input is disabled |
| `readonly` | boolean | null | Whether the input is read-only |

## Validation & Formatting
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `maxchars` | number | null | Maximum number of characters allowed |
| `regexp` | string | null | Regular expression pattern for validation |
| `displayformat` | string | null | Mask format for structured input (e.g., phone numbers) |
| `maskchar` | string | null | Character used for masking input |
| `autotrim` | boolean | true | Whether to automatically trim whitespace |

## Behavior
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autofocus` | boolean | null | Whether the input should auto-focus on load |
| `autocomplete` | string | 'username' | Browser autocomplete behavior |
| `autocapitalize` | string | 'none' | Auto-capitalization behavior (none, words, sentences, characters) |
| `returnkeytype` | 'auto' \| 'next' \| 'done' | 'auto' | Type of return key shown on mobile keyboard |
| `updateon` | string | 'blur' | When to trigger value updates ('blur' or 'change') |
| `hastwowaybinding` | boolean | false | Whether two-way data binding is enabled |

## Accessibility
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilitylabel` | string | undefined | Label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role for accessibility |
| `accessibilitylabelledby` | string | undefined | ID of element that labels this input |
| `hint` | string | undefined | Tooltip text shown on hover |

## Layout & Appearance
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean \| String \| Number | true | Whether the component is visible |
| `styles` | any | null | Custom style object |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device breakpoints where component is visible |
| `disabletoucheffect` | boolean | false | Whether to disable touch feedback effects |

## Skeleton Loading
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `showskeleton` | boolean | undefined | Whether to show skeleton loading state |
| `skeletonheight` | string | null | Height of skeleton loader |
| `skeletonwidth` | string | null | Width of skeleton loader |

## Form Integration
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `checkFormField` | any | - | Function to check form field validity |
| `onFieldChange` | any | - | Callback for field value changes |
| `triggerValidation` | any | - | Function to trigger validation |
| `skipscripteventtrigger` | boolean | false | Whether to skip script-triggered events |

### Common Use Cases

```javascript
// Configure email input with validation
Page.Widgets.emailInput.type = 'email';
Page.Widgets.emailInput.required = true;
Page.Widgets.emailInput.regexp = '^[^\s@]+@[^\s@]+\.[^\s@]+$';

// Set up phone number with display format
Page.Widgets.phoneInput.displayformat = '(999) 999-9999';
Page.Widgets.phoneInput.type = 'tel';

// Configure password input
Page.Widgets.passwordInput.type = 'password';
Page.Widgets.passwordInput.maxchars = 50;
Page.Widgets.passwordInput.required = true;

// Enable floating label
Page.Widgets.nameInput.floatinglabel = 'Full Name';
Page.Widgets.nameInput.autocapitalize = 'words';
```