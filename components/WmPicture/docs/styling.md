# Styling

The Picture component provides several CSS classes for customization:

| Class Name | Description |
|------------|-------------|
| `app-picture` | Default style class applied to the picture component |
| `rounded-image` | Applied when shape is set to "rounded" for rounded corner styling |
| `thumbnail-image` | Applied when shape is set to "thumbnail" for thumbnail-specific styling |

### Custom Styling Examples

```css
/* Customize default picture appearance */
.app-picture {
    border: 2px solid #e0e0e0;
    transition: all 0.3s ease;
}

/* Style rounded images */
.rounded-image {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Style thumbnail images */
.thumbnail-image {
    border: 1px solid #ddd;
    padding: 4px;
    background-color: #fff;
}

/* Custom hover effects */
.app-picture:active {
    opacity: 0.8;
    transform: scale(0.98);
}
```

### Shape-Specific Styling

The Picture component automatically applies shape-specific classes based on the `shape` prop:

- **Circle**: Creates a circular image container with equal width and height
- **Rounded**: Applies rounded corners to the image container
- **Thumbnail**: Adds a border and padding for a thumbnail appearance

### Skeleton Loading Styling

When skeleton loading is enabled, you can customize the placeholder appearance:

```css
.app-picture .skeleton-placeholder {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
```