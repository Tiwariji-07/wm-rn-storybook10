# Props

## Main Component Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `defaultpaneindex` | number | 0 | Sets the default active pane on load based on the provided index (0-based) |
| `enablegestures` | any | true | Enables touch gestures for tab navigation including swipe gestures |
| `enablescroll` | boolean | false | Allows horizontal scrolling when tab headers exceed container width |
| `disabled` | any | false | Disables the entire tabs component when true |
| `show` | any | true | Controls component visibility |
| `styles` | any | null | Custom styles object for the component |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | array | null | Device breakpoints where component should be visible ('xs', 'sm', 'md', 'lg', 'xl', 'xxl') |
| `showskeleton` | boolean | undefined | Shows skeleton loading state |
| `disabletoucheffect` | boolean | false | Disables touch feedback effects |

## TabPane Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `paneicon` | string | null | Icon class for the tab header |
| `title` | string | 'Tab Title' | Display title for the tab |
| `renderPartial` | Function | - | Function to render partial content |
| `isPartialLoaded` | any | false | Indicates if partial content is loaded |
| `invokeVariables` | any | true | Controls variable invocation on tab selection |
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `hint` | string | undefined | Hint text for the tab |
| `accessibilityrole` | AccessibilityRole | - | Accessibility role designation |
| `disabled` | any | false | Disables individual tab pane |
| `show` | any | true | Controls tab pane visibility |

## TabHeader Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `data` | array | [] | Array of tab data objects with icon, key, and title properties |
| `selectedTabIndex` | any | 0 | Currently selected tab index |
| `onIndexChange` | function | null | Callback function when tab index changes |
| `shouldScroll` | boolean | - | Determines if header should scroll |
| `accessibilityProps` | any | - | Accessibility properties object |

### Common Use Cases

```javascript
// Set default tab
Page.Widgets.myTabs.defaultpaneindex = 2;

// Enable scrollable tab headers
Page.Widgets.myTabs.enablescroll = true;

// Disable gesture navigation
Page.Widgets.myTabs.enablegestures = false;

// Show only on specific devices
Page.Widgets.myTabs.showindevice = ['md', 'lg', 'xl'];
```