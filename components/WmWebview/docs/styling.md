# Styling

The WebView widget can be customized using CSS classes and inline styles.

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-webview` | Default style class applied to the webview container component |

## Custom Styling

### Basic WebView Styling

```css
.app-webview {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Custom webview with rounded corners */
.custom-webview {
    border-radius: 12px;
    margin: 10px;
    background-color: #f9f9f9;
}

/* Fullscreen webview */
.fullscreen-webview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
}
```

### Loading State Styling

```css
/* Style for webview with loading skeleton */
.app-webview.loading {
    background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
```

### Responsive WebView Styling

```css
/* Responsive webview container */
.responsive-webview {
    width: 100%;
    height: 70vh;
    min-height: 400px;
    max-height: 800px;
}

/* Mobile-specific styling */
@media (max-width: 768px) {
    .responsive-webview {
        height: 60vh;
        min-height: 300px;
    }
}
```

## Inline Styling

```javascript
// Apply custom styles programmatically
Page.Widgets.myWebview.styles = {
    border: '2px solid #007bff',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
};

// Conditional styling based on content
Page.myWebviewLoad = function(e, widget) {
    if (widget.src.includes('secure')) {
        widget.styles = {
            border: '2px solid #28a745',
            backgroundColor: '#f8fff9'
        };
    }
};
```