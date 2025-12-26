# Styling

The Carousel component supports customization through CSS classes for different visual states and orientations.

## Default Classes

| Class Name | Description |
|------------|-------------|
| `app-carousel` | Base styling for the carousel component |
| `app-carousel-rtl` | Right-to-left layout styling |
| `app-carousel-1` | Alternative carousel style variant 1 |
| `app-carousel-2` | Alternative carousel style variant 2 |

## Child Component Classes

| Class Name | Component | Description |
|------------|-----------|-------------|
| `app-carousel-content` | carousel-content | Default styling for static carousel content areas |
| `app-carousel-template` | carousel-template | Default styling for dynamic carousel template areas |

## Usage Example

```css
/* Custom carousel styling */
.app-carousel {
    border-radius: 8px;
    overflow: hidden;
}

/* RTL support */
.app-carousel-rtl {
    direction: rtl;
}

/* Content area customization */
.app-carousel-content {
    padding: 16px;
    background-color: #f5f5f5;
}
```

You can apply additional styling by using the `classname` property to add custom CSS classes to the carousel and its child components.