# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | null | The URL or HTML content to load in the webview |
| `incognito` | any | false | Enable incognito/private browsing mode |
| `onLoad` | Function | null | Callback function triggered when content finishes loading |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilitylabel` | string | undefined | Screen reader label for the webview component |
| `hint` | string | undefined | Accessibility hint providing usage guidance |
| `accessibilityrole` | AccessibilityRole | undefined | Defines the accessibility role for screen readers |

## Layout & Display Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | Boolean/String/Number | true | Controls visibility of the webview component |
| `disabled` | any | false | Disables interaction with the webview content |
| `showindevice` | Array | null | Device breakpoints where component should be visible |
| `showskeleton` | boolean | undefined | Display skeleton loader while content is loading |

## Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | null | Custom inline styles for the webview container |
| `classname` | string | null | CSS class names for custom styling |
| `disabletoucheffect` | boolean | false | Disable touch feedback effects |

## Common Use Cases

### Load External Website

```javascript
// Load a website in the webview
Page.Widgets.myWebview.src = "https://www.example.com";

// Enable incognito mode for privacy
Page.Widgets.myWebview.incognito = true;
```

### Load HTML Content

```javascript
// Load custom HTML content
const htmlContent = `
  <html>
    <body>
      <h1>Hello from WebView</h1>
      <p>This is custom HTML content</p>
    </body>
  </html>
`;
Page.Widgets.myWebview.src = htmlContent;
```

### Configure Accessibility

```javascript
// Set accessibility properties
Page.Widgets.myWebview.accessibilitylabel = "External website content";
Page.Widgets.myWebview.hint = "Double tap to interact with web content";
Page.Widgets.myWebview.accessibilityrole = "webArea";
```