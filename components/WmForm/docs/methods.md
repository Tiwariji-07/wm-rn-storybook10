# Methods

Form methods can be accessed through the widget instance using `Page.Widgets.formName.methodName()` syntax.

## Form Management Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `edit()` | - | void | Switches form to edit mode |
| `new()` | - | void | Switches form to new record mode |
| `cancel()` | - | void | Cancels current form operation |
| `delete()` | - | void | Deletes current record |
| `submit()` | - | void | Submits the form programmatically |
| `formreset()` | - | void | Resets form to initial state |

## Field and Data Management

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `applyFormData()` | - | void | Applies current form data to fields |
| `applyDefaultValue(formField?)` | `formField: WmFormField` | void | Sets default values for specified field |
| `updateFormFieldDefaultValue(formField)` | `formField: WmFormField` | void | Updates field's default value |
| `updateDataOutput(key, val)` | `key: string, val: any` | void | Updates form's data output |
| `validateFieldsOnSubmit()` | - | void | Validates all fields before submission |

## Registration and Configuration

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `registerFormFields(formFields, formWidgets)` | `formFields: Array<WmFormField>, formWidgets: { [key: string]: BaseComponent }` | void | Registers form fields and widgets |
| `registerFormActions(formActions)` | `formActions: Array<WmFormAction>` | void | Registers form action buttons |
| `generateFormFields()` | - | void | Generates form fields from metadata |
| `setPrimaryKey(fieldName)` | `fieldName: string` | void | Sets primary key field |

## State Management

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `setReadonlyFields()` | - | void | Sets all fields to readonly |
| `setReadonlyState(updateMode)` | `updateMode: any` | void | Sets readonly state based on update mode |
| `showActions()` | - | void | Shows form action buttons |
| `getParentFormRef(pformName)` | `pformName: string` | void | Gets reference to parent form |

## UI and Message Control

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `toggleMessage(type, message)` | `type: 'success' \| 'warning' \| 'error' \| 'info' \| 'loading', message: string` | void | Shows/hides form messages |
| `onMsgClose()` | - | void | Handles message close event |

## Event Handling

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `handleSubmit(event?)` | `event: any` | void | Handles form submission event |
| `onResultCb(response, status, event?)` | `response: any, status: string, event: any` | void | Handles form submission result |
| `onPropertyChange(name, $new, $old)` | `name: string, $new: any, $old: any` | void | Handles property change events |

### Common Method Usage

```javascript
// Programmatically submit form
Page.Widgets.myForm.submit();

// Reset form to initial state
Page.Widgets.myForm.formreset();

// Switch to edit mode
Page.Widgets.myForm.edit();

// Show success message
Page.Widgets.myForm.toggleMessage('success', 'Data saved successfully!');

// Update form data
Page.Widgets.myForm.updateDataOutput('userId', 12345);

// Set form to readonly
Page.Widgets.myForm.setReadonlyFields();
```

### Form State Management

```javascript
// Create new record
Page.Widgets.myForm.new();

// Cancel current operation
Page.Widgets.myForm.cancel();

// Validate fields before custom processing
Page.Widgets.myForm.validateFieldsOnSubmit();
```