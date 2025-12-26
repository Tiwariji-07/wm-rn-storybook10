# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataoutput` | any | - | Stores the form's output data after processing |
| `formdata` | any | - | Initial data to populate the form fields |
| `metadata` | any | - | Schema definition for automatic field generation |
| `parentForm` | string | `''` | Reference to parent form for nested form scenarios |
| `title` | any | - | Form title displayed in header |
| `subheading` | any | - | Subtitle or description text |
| `iconclass` | any | - | Icon class for form header |

## Form Behavior

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `layoutposition` | `'vertical'` \| `'horizontal'` | `'vertical'` | Controls form field layout orientation |
| `showinfoskeleton` | boolean | `false` | Shows skeleton loading state |
| `disabled` | any | `false` | Disables the entire form |
| `show` | any | `true` | Controls form visibility |

## Message Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `postmessage` | string | `'Data posted successfully'` | Success message after form submission |
| `errormessage` | string | `'An error occured. Please try again!'` | Error message on submission failure |
| `messagelayout` | string | `'Inline'` | Message display layout style |

## Event Handlers

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onBeforeservicecall` | any | - | Callback before service API call |
| `onBeforesubmit` | any | - | Callback before form submission |
| `formSubmit` | Function | `() => {}` | Custom submit handler |
| `formSuccess` | Function | `() => {}` | Success callback function |
| `onSuccess` | Function | `() => {}` | Success event handler |
| `onError` | Function | `() => {}` | Error event handler |
| `onBeforerender` | Function | `() => {}` | Pre-render callback |
| `relatedData` | Function | `() => {}` | Related data handler |
| `generateComponent` | Function | `(metadata:any) => {}` | Custom component generator |

## Common Styling Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `styles` | any | `null` | Custom inline styles |
| `classname` | string | `null` | Additional CSS classes |
| `showindevice` | `('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[]` | `null` | Responsive visibility controls |
| `showskeleton` | boolean | `undefined` | Loading skeleton display |
| `disabletoucheffect` | boolean | `false` | Disable touch feedback effects |

### Configure Form Layout

```javascript
// Set horizontal layout
Page.Widgets.myForm.layoutposition = 'horizontal';

// Configure form data
Page.Widgets.myForm.formdata = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
};

// Set custom success message
Page.Widgets.myForm.postmessage = 'User registered successfully!';
```

### Handle Form State

```javascript
// Enable/disable form
Page.Widgets.myForm.disabled = true;

// Show/hide form
Page.Widgets.myForm.show = false;

// Configure skeleton loading
Page.Widgets.myForm.showinfoskeleton = true;
```