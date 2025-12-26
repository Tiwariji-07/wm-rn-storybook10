# Styling

The Wizard component provides several CSS classes for customizing the appearance of the wizard and its steps.

## Wizard Container Classes

| Class Name | Description |
|------------|-------------|
| `app-wizard` | Default style class for the wizard container |
| `app-wizard-rtl` | RTL (Right-to-Left) layout support |
| `stepper-basic` | Basic stepper style |
| `segment-steppe` | Segmented stepper style |
| `progress-circle-header` | Circular progress header style |
| `dottedstepper` | Dotted stepper indicator style |
| `vertical` | Vertical wizard layout |
| `number-text-inline` | Inline number and text display |

## Wizard Step Classes

| Class Name | Description |
|------------|-------------|
| `app-wizardstep` | Default style class for individual wizard steps |

### Custom Styling Examples

```css
/* Customize wizard container */
.app-wizard {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    background-color: #ffffff;
}

/* Style active step */
.app-wizard .step-active {
    background-color: #007bff;
    color: white;
}

/* Customize step indicators */
.progress-circle-header .step-indicator {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f8f9fa;
    border: 2px solid #dee2e6;
}

/* Style completed steps */
.stepper-basic .step-completed {
    background-color: #28a745;
    color: white;
}

/* Vertical wizard styling */
.app-wizard.vertical {
    flex-direction: column;
    align-items: stretch;
}

/* Dotted stepper customization */
.dottedstepper .step-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #6c757d;
}

/* RTL support */
.app-wizard-rtl {
    direction: rtl;
    text-align: right;
}
```

### Step Content Styling

```css
/* Style wizard step content */
.app-wizardstep {
    padding: 20px;
    min-height: 300px;
}

/* Step title styling */
.app-wizardstep .step-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

/* Step subtitle styling */
.app-wizardstep .step-subtitle {
    font-size: 0.875rem;
    color: #6c757d;
    margin-bottom: 1rem;
}
```

The component automatically applies appropriate classes based on the current state, step position, and progress type. You can override these styles or add custom classes using the `classname` prop to achieve your desired appearance.