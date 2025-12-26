# Methods

Access the FileUpload component methods through the widget reference:
`Page.Widgets.[widgetName]` or through component instance.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `onTap` | props: WmFileuploadProps | void | Programmatically triggers the file selection dialog |

## Common Method Use Cases

### Programmatically Trigger File Selection
```javascript
// Trigger file picker programmatically
Page.Widgets.myFileUpload.onTap({
    // Pass current props or modified props
    contenttype: 'image/*'
});
```

### Access Selected Files
```javascript
// Get selected files information
const selectedFiles = Page.Widgets.myFileUpload.selectedFiles;
console.log('Selected files:', selectedFiles);
```