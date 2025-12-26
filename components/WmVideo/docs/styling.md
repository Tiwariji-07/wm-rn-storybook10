# Styling

The Video widget provides CSS classes for customization.

## Default Classes

| Class Name | Description |
|------------|-------------|
| `.app-video` | Default style class applied to the video widget container |

## Custom Styling

```css
/* Customize video container */
.app-video {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Style video poster */
.app-video .video-poster {
    object-fit: cover;
    background-color: #f0f0f0;
}

/* Customize video controls */
.app-video .video-controls {
    background: linear-gradient(transparent, rgba(0,0,0,0.5));
}
```

## Responsive Video Styling

```css
/* Mobile-first responsive video */
.app-video {
    width: 100%;
    height: auto;
    max-width: 100vw;
}

/* Tablet and larger screens */
@media (min-width: 768px) {
    .app-video {
        max-width: 800px;
        margin: 0 auto;
    }
}
```