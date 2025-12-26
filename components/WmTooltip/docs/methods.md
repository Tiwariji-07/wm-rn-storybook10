# Methods

Tooltip components are primarily controlled through property manipulation rather than direct method calls. Access the tooltip widget using the standard WaveMaker widget reference pattern.

## Script Access
```javascript
// Access tooltip widget
Page.Widgets.tooltipName.propertyName
```

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| No specific methods | - | - | The tooltip component is controlled through property updates |

### Common Method Use Cases

#### Programmatic Control
```javascript
// Show tooltip with custom message
function showHelpTooltip() {
  Page.Widgets.helpTooltip.text = "Click here to get started";
  Page.Widgets.helpTooltip.showTooltip = true;
}

// Hide tooltip after delay
function hideTooltipAfterDelay() {
  setTimeout(() => {
    Page.Widgets.helpTooltip.showTooltip = false;
  }, 3000);
}

// Toggle tooltip visibility
function toggleTooltip() {
  Page.Widgets.myTooltip.showTooltip = !Page.Widgets.myTooltip.showTooltip;
}
```

#### Dynamic Content Updates
```javascript
// Update tooltip content based on context
function updateTooltipContent(newText, position) {
  Page.Widgets.dynamicTooltip.text = newText;
  Page.Widgets.dynamicTooltip.direction = position || 'up';
  Page.Widgets.dynamicTooltip.showTooltip = true;
}
```