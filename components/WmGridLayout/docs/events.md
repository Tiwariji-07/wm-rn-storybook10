# Callback Events

The `layoutgrid` component does not expose any custom callback events. User interactions are handled through standard React Native touch events on child components and widgets placed within the grid structure.

## Child Component Events

Both `gridrow` and `gridcolumn` components also do not expose custom events, maintaining a simple container-focused architecture. Event handling should be implemented on the content widgets placed within the grid columns.