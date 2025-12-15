# Props and Events

<details open>
<summary><strong>Props</strong></summary>

## Content & Display
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| caption | string | null | To be filled |
| badgevalue | string | null | To be filled |
| name | string | null | To be filled |
| id | string | null | To be filled |

## Icon Configuration
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| iconclass | string | null | To be filled |
| iconposition | any | 'left' | To be filled |
| iconurl | string | null | To be filled |
| iconsize | number | 0 | To be filled |
| iconheight | number | null | To be filled |
| iconwidth | number | null | To be filled |
| iconmargin | number | null | To be filled |

## Behavior
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | any | false | To be filled |
| show | any | true as Boolean \| String \| Number | To be filled |
| disabletoucheffect | boolean | false | To be filled |
| onTap | Function | null | To be filled |

## Styling & Layout
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| styles | any | null | To be filled |
| classname | string | null | To be filled |
| showindevice | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | To be filled |

## Animation
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | null | To be filled |
| animationdelay | number | null | To be filled |

## Skeleton Loading
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showskeleton | boolean | undefined | To be filled |
| skeletonheight | string | null | To be filled |
| skeletonwidth | string | null | To be filled |

## Accessibility
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accessibilitylabel | string | undefined | To be filled |
| accessibilityrole | AccessibilityRole | "button" | To be filled |
| hint | string | undefined | To be filled |

</details>

<details>
<summary><strong>Callback Events</strong></summary>

| Event | Description |
|-------|-------------|
| onTap | Triggered when the button is tapped/clicked |
| onTouchstart | Triggered when touch/press begins on the button |
| onDoubletap | Triggered when the button is double-tapped |
| onLongtap | Triggered when the button is pressed and held |
| onTouchend | Triggered when touch/press ends on the button |

</details>

## Touch Event Callback Behavior

The callback events support multiple action types within WaveMaker Studio:

- **JavaScript Actions**: Execute custom JavaScript functions with access to the event parameter
- **Navigation Actions**: Navigate to different pages or trigger routing
- **Service Calls**: Invoke backend services or APIs
- **Variable Operations**: Manipulate application variables and data
- **Widget Operations**: Interact with other components on the page

Each event callback receives an event parameter `(e)` containing details about the user interaction, which can be used within your callback implementation for custom logic and behavior.