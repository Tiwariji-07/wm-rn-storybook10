# Overview

The ButtonGroup component is a foundational UI element that organizes multiple related buttons into a cohesive, visually grouped container. This component is essential for mobile applications where users need to select from multiple options or perform related actions, such as filter controls, navigation tabs, or action toolbars. By grouping buttons together, it provides clear visual hierarchy and improves the overall user experience through consistent spacing and alignment.

ButtonGroup extends the BaseProps class and offers flexible layout options to accommodate various design requirements across different mobile interfaces. It provides a clean, accessible way to present multiple interactive elements while maintaining proper touch targets and visual consistency throughout your application.

## Features

- **Flexible Layout Options** - Supports both horizontal (default) and vertical button arrangements through the `vertical` prop
- **Child Component Integration** - Accepts multiple button children through the `children` prop for versatile content composition
- **Loading State Support** - Built-in skeleton loading functionality with customizable dimensions via `skeletonheight` and `skeletonwidth`
- **Accessibility Ready** - Includes proper identification and naming through `id` and `name` props for screen readers
- **State Management** - Provides `disabled` and `show` props for controlling component interactivity and visibility
- **Custom Styling** - Extensive theming support through `styles` and `classname` props for brand consistency
- **Mobile Optimized** - Designed with touch-friendly interactions and responsive behavior for mobile devices