# Methods

Access the Wizard component methods using `Page.Widgets.{wizardName}` in your JavaScript code.

## Navigation Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `prev` | - | void | Navigate to the previous step |
| `next` | eventName?: string | void | Navigate to the next step |
| `done` | $event: any | void | Complete the wizard process |
| `cancel` | - | void | Cancel the wizard process |
| `skip` | - | void | Skip the current step |

## Step Management Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `updateCurrentStep` | index: number, isDone: any | void | Update the current active step |
| `addWizardStep` | step: WmWizardstep | void | Add a new step to the wizard |
| `showActiveStep` | - | void | Display the currently active step |
| `updateDefaultStep` | - | void | Update the default starting step |

## Utility Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getTotalVisibleSteps` | - | number | Get count of visible steps |
| `firstStepIndex` | - | number | Get index of first step |
| `lastStepIndex` | - | number | Get index of last step |
| `getStepStyle` | index: number | void | Get styling for specific step |
| `getDotStyle` | index: number | void | Get dot indicator styling |

## Rendering Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `renderWizardHeader` | item: any, index: number | void | Render the wizard header |
| `renderProgressCircleHeader` | item: any, index: number | void | Render circular progress header |
| `renderMenuPopover` | - | void | Render menu popover |
| `renderDot` | index: number | void | Render step dot indicator |
| `getBackground` | - | React.JSX.Element \| null | Get background component |

### Common Method Usage

```javascript
// Programmatically navigate wizard
Page.navigateToNextStep = function() {
    Page.Widgets.myWizard.next();
};

// Go to previous step
Page.goToPreviousStep = function() {
    Page.Widgets.myWizard.prev();
};

// Complete wizard programmatically
Page.finishWizard = function() {
    Page.Widgets.myWizard.done(null);
};

// Check wizard state
Page.checkWizardProgress = function() {
    var totalSteps = Page.Widgets.myWizard.getTotalVisibleSteps();
    var currentStep = Page.Widgets.myWizard.currentStep;
    console.log('Step', currentStep + 1, 'of', totalSteps);
};

// Add dynamic step
Page.addNewStep = function() {
    var newStep = /* create new wizard step */;
    Page.Widgets.myWizard.addWizardStep(newStep);
};
```