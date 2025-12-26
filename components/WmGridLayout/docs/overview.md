# Overview

The `layoutgrid` component is a flexible container layout system that implements a 12-column grid structure for organizing content in React Native applications. It provides a responsive design foundation that adapts to different screen sizes and device orientations, making it ideal for creating structured layouts across mobile platforms.

This container component works hierarchically with `gridrow` and `gridcolumn` child components to create sophisticated grid-based layouts. The layout system automatically handles responsive behavior across different device breakpoints, ensuring optimal display on various screen sizes from mobile phones to tablets.

## Features
- **12-Column Grid System**: Implements a flexible 12-column layout structure
- **Responsive Design**: Adapts to different screen sizes with device-specific visibility controls
- **Hierarchical Structure**: Supports nested `gridrow` and `gridcolumn` components
- **Flexible Width Control**: Configurable column widths with automatic width distribution
- **Device Targeting**: Show/hide content based on specific device sizes (xs, sm, md, lg, xl, xxl)
- **Skeleton Loading**: Built-in loading state support
- **Touch Effects**: Configurable touch interaction feedback