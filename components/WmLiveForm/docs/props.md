# Props

The Live Form component automatically generates its structure from the bound database variable, so it doesn't expose traditional props for configuration. Instead, form behavior is controlled through the associated CRUD variable and layout settings in the designer.

| Name | Type | Default | Description |
|------|------|---------|-------------|
| *Auto-generated* | *Various* | *Database Schema* | Form fields are automatically created based on the bound database CRUD variable schema |

## Configuration Through Variable Binding

The Live Form's structure and behavior are primarily configured through:

- **Database CRUD Variable binding** - Determines available fields and operations
- **Layout settings** - Column layout (1, 2, or 3 columns)
- **Field-level settings** - Individual widget types, validation rules, and display properties
- **Operation modes** - Read-only, edit, or full CRUD functionality

### Common Configuration Examples

```javascript
// Bind Live Form to a selected item for editing
Page.Variables.EmployeeCRUD.setItem(selectedEmployee);

// Set form to read-only mode
Page.Widgets.EmployeeForm.readonly = true;

// Enable/disable specific operations
Page.Variables.EmployeeCRUD.allowCreate = true;
Page.Variables.EmployeeCRUD.allowUpdate = true;
Page.Variables.EmployeeCRUD.allowDelete = false;
```