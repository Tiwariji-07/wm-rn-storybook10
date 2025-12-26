# Styling

The Label component supports extensive styling through CSS classes. Apply styles using the `classname` property.

## Default Classes

- `app-label`: Base styling for all label components
- `app-label-rtl`: Right-to-left text direction support
- `form-label-horizontal`: Horizontal form label layout

## Contextual Label Styles

- `label-primary`: Primary theme colored label
- `label-success`: Success/positive state styling
- `label-info`: Informational state styling
- `label-warning`: Warning state styling
- `label-danger`: Error/danger state styling
- `label-default`: Default neutral styling

## Text Color Classes

- `text-primary`: Primary theme text color
- `text-success`: Success text color
- `text-info`: Info text color
- `text-warning`: Warning text color
- `text-danger`: Danger text color
- `text-muted`: Muted/subdued text color

## Text Alignment

- `text-left`: Left-aligned text
- `text-center`: Center-aligned text
- `text-right`: Right-aligned text

## Typography Classes

- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`: Heading styles
- `media-heading`: Media component heading style
- `p`: Paragraph styling

### Styling Examples

```javascript
// Apply contextual styling
Page.Widgets.errorLabel.classname = "label-danger";
Page.Widgets.successLabel.classname = "label-success";

// Combine multiple classes
Page.Widgets.titleLabel.classname = "h2 text-center text-primary";

// Custom styling with inline styles
Page.Widgets.customLabel.styles = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333'
};
```