# Overview

The Toggle component is a binary input control that allows users to switch between two states, typically representing on/off, enabled/disabled, or true/false values. This component is essential for mobile applications where users need to quickly toggle settings, preferences, or feature states with a simple tap gesture. It provides a clear visual indication of the current state and offers smooth transitions between states for an intuitive user experience.

Built on the BaseProps foundation, the Toggle component is designed to handle various data types and integration scenarios while maintaining accessibility standards. It supports both interactive and read-only modes, making it suitable for configuration screens, settings panels, form inputs, and display-only contexts where the toggle state needs to be shown but not modified.

## Features

- **Dual State Management** - Supports distinct values for checked and unchecked states through `checkedvalue` and `uncheckedvalue` properties
- **Data Binding** - Integrates with data sources via `datavalue` for dynamic state management
- **Read-Only Mode** - Can be set to `readonly` for display purposes without user interaction
- **Change Detection** - Triggers `onFieldChange` events when state transitions occur
- **Event Handling** - Supports custom event invocation through `invokeEvent` for complex interactions
- **Accessibility Support** - Comprehensive accessibility features including `accessibilitylabel`, `accessibilityrole`, and `accessibilitylabelledby`
- **User Guidance** - Built-in `hint` support to provide contextual information to users
- **Mobile Optimized** - Designed specifically for touch interactions and mobile interface patterns