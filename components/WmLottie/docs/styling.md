# Styling

The Lottie component provides CSS classes for customization:

| CSS Class | Description |
|-----------|-------------|
| `.app-lottie` | Default style class applied to the Lottie component container |

### Custom Styling Examples

```css
/* Customize the Lottie container */
.app-lottie {
    border-radius: 8px;
    background-color: transparent;
    overflow: hidden;
}

/* Add custom class styling */
.my-custom-lottie {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
}

/* Loading animation specific styling */
.loading-animation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
```

### Responsive Styling

```css
/* Responsive sizing */
@media (max-width: 768px) {
    .app-lottie {
        max-width: 200px;
        max-height: 200px;
    }
}

@media (min-width: 769px) {
    .app-lottie {
        max-width: 400px;
        max-height: 400px;
    }
}
```