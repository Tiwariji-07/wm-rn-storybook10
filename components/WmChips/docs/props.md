# Props

## Core Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autofocus` | boolean | `false` | Automatically focuses the input when component loads |
| `placeholder` | string | `'Type here...'` | Placeholder text shown in the input field |
| `readonly` | boolean | `null` | Makes the component read-only when true |
| `disabled` | boolean | `false` | Disables user interaction when true |
| `selectionmode` | `'single'` \| `'multiple'` | `'multiple'` | Determines how many chips can be selected |

## Data Binding

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | `'Option 1, Option 2, Option 3'` | Source data for chip options |
| `datavalue` | any | - | Currently selected values |
| `displayfield` | any | - | Field to display from dataset objects |
| `datafield` | any | - | Field to use as the value from dataset objects |
| `displayexpression` | any | - | Custom expression for display formatting |
| `groupby` | any | - | Field to group dataset items |
| `orderby` | any | - | Field(s) to sort dataset items |

## Search & Filtering

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `searchable` | boolean | `false` | Enables search/autocomplete functionality |
| `searchkey` | string | `null` | Field to search within dataset |
| `minchars` | number | `1` | Minimum characters before triggering search |
| `match` | any | - | Search matching criteria |

## Behavior Control

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `maxsize` | number | `null` | Maximum number of chips allowed |
| `inputposition` | string | `'last'` | Position of input field (`'first'` or `'last'`) |

## Visual Customization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `selectediconclass` | string | `'wm-sl-l sl-check'` | Icon class for selected chips |
| `lefticonclass` | string | `null` | Icon class for left side of chips |
| `righticonclass` | string | `null` | Icon class for right side of chips |
| `leftbadge` | string | `null` | Badge text for left side of chips |
| `rightbadge` | string | `null` | Badge text for right side of chips |
| `displaylabel` | any | - | Label text for the component |
| `displayimagesrc` | any | - | Image source for chip items |
| `iconclass` | any | - | General icon class for chips |

## Dynamic Functions

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `getLeftIconClassName` | Function | - | Function to determine left icon class |
| `getRightIconClassName` | Function | - | Function to determine right icon class |
| `getLeftBadge` | Function | - | Function to determine left badge text |
| `getRightBadge` | Function | - | Function to determine right badge text |
| `getDisplayExpression` | Function | - | Function for custom display formatting |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | `true` | Enables accessibility features |
| `accessibilitylabel` | string | `undefined` | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | - | ARIA role for accessibility |
| `accessibilitylabelledby` | string | `undefined` | References element that labels this component |
| `hint` | string | `undefined` | Hint text for accessibility |

## Layout & Display

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | `true` | Controls component visibility |
| `showindevice` | (`'xs'`\|`'sm'`\|`'md'`\|`'lg'`\|`'xl'`\|`'xxl'`)[] | `null` | Device sizes where component is visible |
| `showskeleton` | boolean | `undefined` | Shows skeleton loading state |
| `styles` | any | `null` | Custom styling object |
| `classname` | string | `null` | Additional CSS classes |
| `disabletoucheffect` | boolean | `false` | Disables touch feedback effects |

### Configure Basic Chips Behavior

```javascript
// Set multiple selection with max limit
Page.Widgets.myChips.selectionmode = 'multiple';
Page.Widgets.myChips.maxsize = 5;

// Configure search behavior
Page.Widgets.myChips.searchable = true;
Page.Widgets.myChips.minchars = 2;
Page.Widgets.myChips.searchkey = 'name';

// Set input position
Page.Widgets.myChips.inputposition = 'first';
```

### Configure Visual Appearance

```javascript
// Set icons for chips
Page.Widgets.myChips.lefticonclass = 'wi wi-user';
Page.Widgets.myChips.selectediconclass = 'wi wi-done';

// Add badges
Page.Widgets.myChips.leftbadge = 'VIP';
Page.Widgets.myChips.rightbadge = 'New';
```