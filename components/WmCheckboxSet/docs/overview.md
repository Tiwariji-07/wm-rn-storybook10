# Overview

The CheckboxSet component is a versatile input control that allows users to select multiple options from a predefined dataset. Built on the BaseDatasetProps foundation, this component renders a collection of checkboxes in a customizable grid layout, making it ideal for forms, surveys, settings pages, and any scenario where users need to make multiple selections from a list of options.

This component provides a clean, organized way to present selectable items with flexible display options and responsive design capabilities. It supports data binding, custom rendering, and skeleton loading states to ensure optimal user experience across different mobile device sizes and loading conditions.

## Features

- **Multi-selection capability** - Users can select multiple options simultaneously from the available dataset
- **Flexible grid layout** - Configure the number of items displayed per row using `itemsperrow` for optimal screen utilization
- **Data binding support** - Seamlessly connect to data sources through `dataset`, `datafield`, and `displayfield` properties
- **Custom display values** - Override default text display using `displayValue` for localization or formatting
- **Custom rendering** - Implement custom item appearance and behavior with `renderitempartial`
- **Required field validation** - Mark the component as mandatory using the `required` property
- **Loading state management** - Display skeleton placeholders during data loading with `numberofskeletonitems`
- **Value management** - Track and manage selected values through the `datavalue` property
- **Responsive design** - Automatically adapts to different screen sizes and orientations