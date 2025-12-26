# Methods

Access the Picture component methods through the widget reference: `Page.Widgets.pictureWidgetName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `loadImage` | image: string \| undefined | void | Loads a new image from the specified source |
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property changes and updates the component |
| `createShape` | shape: string \| undefined, imageWidth?: number \| string | WmPictureStyles | Creates styling for the specified shape configuration |
| `getElementToShow` | props: WmPictureProps, imgSrc: any, shapeStyles: WmPictureStyles | void | Determines which element to render based on current state |
| `calculateBasedOnaspectratio` | none | {imageWidth: number, imageHeight: number} \| null | Calculates dimensions based on the configured aspect ratio |
| `calculateBasedOnNaturalDimensions` | none | {imageWidth: number, imageHeight: number} \| null | Calculates dimensions based on the image's natural size |

### Common Method Usage

```javascript
// Load a new image dynamically
Page.Widgets.myPicture.loadImage("https://example.com/newimage.jpg");

// Apply custom shape styling
const shapeStyles = Page.Widgets.myPicture.createShape("circle", 100);

// Get calculated dimensions based on aspect ratio
const dimensions = Page.Widgets.myPicture.calculateBasedOnaspectratio();
if (dimensions) {
    console.log(`Width: ${dimensions.imageWidth}, Height: ${dimensions.imageHeight}`);
}

// Get natural image dimensions
const naturalDimensions = Page.Widgets.myPicture.calculateBasedOnNaturalDimensions();
if (naturalDimensions) {
    console.log(`Natural Width: ${naturalDimensions.imageWidth}, Natural Height: ${naturalDimensions.imageHeight}`);
}
```