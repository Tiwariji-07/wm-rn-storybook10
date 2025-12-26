# Styling

## CSS Classes

| Class Name | Description |
|------------|-------------|
| `app-fileupload` | Default style class applied to the FileUpload component container |

## Customization

The FileUpload component can be styled using:

- **Custom CSS Classes**: Use the `classname` prop to add additional CSS classes
- **Inline Styles**: Use the `styles` prop for component-specific styling
- **Icon Customization**: Use `iconclass` prop to change the upload icon
- **Size Control**: Use `iconsize` prop to adjust icon dimensions

```css
/* Custom styling example */
.app-fileupload {
    /* Default component styles */
}

.custom-upload-button {
    background-color: #007bff;
    border-radius: 8px;
    padding: 12px 16px;
}

.custom-upload-button .upload-icon {
    color: white;
}
```