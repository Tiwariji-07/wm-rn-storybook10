# Overview

The Switch component is a binary input control that allows users to toggle between two states (on/off, enabled/disabled, true/false) in mobile applications. It provides an intuitive and touch-friendly interface for users to make quick binary choices, commonly used for settings, preferences, feature toggles, and conditional configurations within forms and settings panels.

This component extends BaseDatasetProps, enabling it to work seamlessly with data sources and collections. It supports both standalone operation and data-driven scenarios where switch states can be bound to dataset fields, making it ideal for dynamic forms, user preference management, and bulk data editing interfaces.

## Features

- **Binary state management** - Toggle between on/off or true/false states
- **Dataset integration** - Bind switch state to data sources and collections through dataset and dataItems props
- **Flexible data binding** - Support for datavalue, displayfield, and datafield properties for versatile data mapping
- **Custom display logic** - Configure presentation through displayexpression and getDisplayExpression for complex rendering scenarios
- **Event handling** - Built-in invokeEvent support for responding to state changes and user interactions
- **Data grouping** - Group related switches using groupby functionality for organized data presentation
- **Touch-optimized interface** - Designed for mobile interaction patterns with appropriate sizing and visual feedback