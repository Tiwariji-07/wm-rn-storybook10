# Methods

Access the Rating component methods using: `Page.Widgets.[widgetName]`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `prepareItems` | props: WmRatingProps | void | Initializes rating items based on component properties |
| `onPropertyChange` | name: string, $new: any, $old: any | void | Handles property value changes internally |
| `changeValue` | i: number | void | Programmatically changes the rating to specified value |

### Method Usage Examples

```javascript
// Programmatically set rating value
Page.Widgets.myRating.changeValue(4);

// Access current rating value
const currentRating = Page.Widgets.myRating.datavalue;

// Reset rating
Page.Widgets.myRating.changeValue(0);

// Update rating based on external data
Page.loadUserRating = function(userId) {
    // Fetch rating from service
    Page.Variables.getUserRating.setInput({userId: userId});
    Page.Variables.getUserRating.invoke();
};

Page.Variables.getUserRating.onSuccess = function(variable, data) {
    Page.Widgets.userRating.changeValue(data.rating);
};
```