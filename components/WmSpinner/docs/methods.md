# Methods

The Spinner component can be accessed and controlled programmatically using `Page.Widgets.spinnerName`.

The Spinner component does not expose specific methods beyond the standard widget properties. Control is achieved through property manipulation.

### Common Usage Patterns

```javascript
// Show spinner before async operation
Page.Widgets.loadingSpinner.show = true;

// Perform async operation
Page.Variables.myServiceVariable.invoke();

// Hide spinner in variable success callback
Page.Variables.myServiceVariable.onSuccess = function(variable, data) {
    Page.Widgets.loadingSpinner.show = false;
};

// Hide spinner in error callback too
Page.Variables.myServiceVariable.onError = function(variable, error) {
    Page.Widgets.loadingSpinner.show = false;
};
```