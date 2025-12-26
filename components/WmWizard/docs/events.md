# Callback Events

## Wizard Container Events

| Event | Description |
|-------|-------------|
| `onChange` | Fired when the active step changes. Receives (null, wizard, nextStep + 1, lastStep + 1) |
| `onPrev` | Fired when Previous button is clicked. Receives ('prev', wizard) |
| `onNext` | Fired when Next button is clicked. Receives ('next', wizard) |
| `onSkip` | Fired when Skip button/link is clicked. Receives ('skip', wizard) |
| `onDone` | Fired when Done button is clicked. Receives ('done', wizard) |
| `onCancel` | Fired when Cancel button is clicked. Receives ('cancel', wizard) |
| `onTap` | Fired when wizard is tapped. Receives (event, wizard) |
| `onShow` | Fired when wizard becomes visible. Receives (event, wizard) |
| `onHide` | Fired when wizard becomes hidden. Receives (null, wizard) |
| `onLoad` | Fired when wizard loads. Receives (wizard) |

## Wizard Step Events

| Event | Description |
|-------|-------------|
| `onLoad` | Fired when step loads. Receives (step, stepIndex) |
| `onNext` | Fired when Next is clicked from this step. Receives (wizard, step, stepIndex) |
| `onPrev` | Fired when Previous is clicked from this step. Receives (wizard, step, stepIndex) |
| `onSkip` | Fired when Skip is clicked from this step. Receives (wizard, step, stepIndex) |

### Event Usage Examples

```javascript
// Handle wizard completion
Page.wizard1Done = function(action, widget) {
    console.log('Wizard completed');
    // Navigate to success page or show confirmation
    Page.Actions.goToPage.navigate({pageName: 'SuccessPage'});
};

// Validate before proceeding to next step
Page.wizardstep1Next = function(wizard, step, stepIndex) {
    if (!Page.Widgets.requiredForm.isValid) {
        // Prevent navigation if form is invalid
        return false;
    }
    // Save step data
    Page.Variables.saveStepData.setData(Page.Widgets.liveform1.datavalue);
};

// Handle step changes
Page.wizard1Change = function(event, wizard, nextStep, lastStep) {
    console.log('Moving from step', lastStep, 'to step', nextStep);
    // Update progress indicators or perform cleanup
};
```