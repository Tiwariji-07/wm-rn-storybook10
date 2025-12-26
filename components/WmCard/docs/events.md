# Callback Events

| Event | Description | Parameters |
|-------|-------------|------------|
| `onTap` | Triggered when the card is tapped | `(null, this.proxy)` |
| `onSelect` | Fired when the card is selected | `(null, this, item)` |
| `onTouchstart` | Called when touch interaction begins | `(e)` |
| `onDoubletap` | Triggered on double-tap gesture | `(e)` |
| `onLongtap` | Fired when long-press gesture is detected | `(e)` |
| `onTouchend` | Called when touch interaction ends | `(e)` |

## Child Component Events

### Card Content Events
| Event | Description | Parameters |
|-------|-------------|------------|
| `onLoad` | Triggered when card content is loaded | `(null, this)` |

### Event Usage Examples

```javascript
// Handle card tap event
Page.myCardTap = function($event, widget) {
    console.log("Card tapped:", widget.title);
    // Navigate to detail page or perform action
};

// Handle card selection
Page.myCardSelect = function($event, widget, item) {
    console.log("Card selected:", item);
    // Update selection state or trigger workflow
};

// Handle long tap for context menu
Page.myCardLongtap = function($event) {
    // Show context menu or additional options
    Page.Widgets.contextMenu.show = true;
};

// Handle double tap for quick action
Page.myCardDoubletap = function($event) {
    // Perform quick action like add to favorites
    console.log("Double tap detected - quick action triggered");
};
```