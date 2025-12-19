# Styling

## CSS Classes

The anchor component provides the following CSS classes for styling customization:

### Base Classes

- **`app-anchor`** - Default style class that applies the standard anchor styling
- **`app-anchor-rtl`** - Applies right-to-left text direction styling for RTL language support

### Color Variants

- **`link-primary`** - Applies primary brand color styling to the link
- **`link-secondary`** - Applies secondary color styling to the link
- **`link-success`** - Applies success state color (typically green) to the link
- **`link-danger`** - Applies danger/error state color (typically red) to the link
- **`link-warning`** - Applies warning state color (typically yellow/orange) to the link
- **`link-info`** - Applies informational state color (typically blue) to the link
- **`link-light`** - Applies light color variant to the link
- **`link-dark`** - Applies dark color variant to the link

## Usage

You can combine the base classes with color variants to achieve the desired visual appearance:

```html
<a class="app-anchor link-primary">Primary Link</a>
<a class="app-anchor link-danger">Danger Link</a>
<a class="app-anchor-rtl link-success">RTL Success Link</a>
```

Standard application CSS classes can also be used in conjunction with these component-specific classes for additional styling customization.