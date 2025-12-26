# Methods

Card component methods can be accessed via the widget reference: `Page.Widgets.cardName`

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `renderHeader` | `props: WmCardProps` | void | Renders the card header with specified properties |

### Method Usage Examples

```javascript
// Render card header programmatically
Page.Widgets.myCard.renderHeader({
    title: "Dynamic Title",
    subheading: "Dynamic Subheading",
    iconclass: "fa fa-user"
});

// Update card visibility
Page.Widgets.myCard.show = false; // Hide card
Page.Widgets.myCard.show = true;  // Show card

// Toggle card state
Page.Widgets.myCard.disabled = !Page.Widgets.myCard.disabled;

// Programmatically trigger card selection
Page.Widgets.myCard.isactive = "true";

// Update card content dynamically
Page.updateCardContent = function(cardData) {
    const card = Page.Widgets.myCard;
    card.title = cardData.title;
    card.subheading = cardData.subtitle;
    card.picturesource = cardData.imageUrl;
    card.itembadge = cardData.status;
};

// Show skeleton loading state
Page.showCardLoading = function() {
    Page.Widgets.myCard.showskeleton = true;
};

// Hide skeleton and show content
Page.hideCardLoading = function() {
    Page.Widgets.myCard.showskeleton = false;
};
```