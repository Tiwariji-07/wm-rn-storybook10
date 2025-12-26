# Props

## Core Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | 'search' \| 'autocomplete' | 'search' | Sets the component mode - search shows filtered list, autocomplete shows dropdown |
| `query` | string | '' | Current search query text |
| `placeholder` | string | 'Search' | Placeholder text displayed when input is empty |
| `autofocus` | boolean | false | Automatically focuses the search input when component loads |
| `readonly` | boolean | null | Makes the search input read-only |

## Dataset Configuration

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dataset` | any | - | Data source for search results |
| `searchkey` | any | - | Property to search within the dataset |
| `datafield` | any | - | Field to use as the data value |
| `displayfield` | any | - | Field to display in search results |
| `displayexpression` | any | - | Expression for custom display formatting |
| `groupby` | any | - | Field to group search results |
| `orderby` | any | - | Field to order search results |
| `match` | any | - | Match mode for filtering (start, end, anywhere, exact) |

## Behavior Control

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `limit` | number | null | Maximum number of results to display |
| `minchars` | number | null | Minimum characters required before search triggers |
| `debouncetime` | number | 0 | Delay in milliseconds before search executes |
| `searchon` | string | 'typing' | When to trigger search (typing, enter) |
| `showclear` | boolean | false | Shows clear button to reset search |
| `showSearchIcon` | boolean | true | Shows search icon in the input |

## Display Customization

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `imagewidth` | any | 32 | Width of images in search results |
| `imageheight` | any | 32 | Height of images in search results |
| `displayimagesrc` | any | - | Source for result item images |
| `datacompletemsg` | string | 'No more data to load' | Message when no more results available |
| `skeletonheight` | string | null | Height of loading skeleton |
| `skeletonwidth` | string | null | Width of loading skeleton |

## Icon Classes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iconclass` | string | 'wm-sl-l sl-search' | CSS class for main search icon |
| `clearsearchiconclass` | string | 'wi wi-clear' | CSS class for clear button icon |
| `searchiconclass` | string | undefined | CSS class for search button icon |

## Accessibility

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessible` | boolean | true | Enables accessibility features |
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `accessibilityrole` | AccessibilityRole | 'search' | Accessibility role definition |
| `accessibilitylabelledby` | string | undefined | ID of element that labels this component |
| `hint` | string | undefined | Hint text for accessibility |

### Configure Search Behavior

```javascript
// Set minimum characters and debounce time
Page.Widgets.mySearch.minchars = 3;
Page.Widgets.mySearch.debouncetime = 500;

// Configure autocomplete mode
Page.Widgets.mySearch.type = 'autocomplete';
Page.Widgets.mySearch.limit = 10;

// Enable clear functionality
Page.Widgets.mySearch.showclear = true;
```

### Customize Display

```javascript
// Set custom placeholder and icons
Page.Widgets.mySearch.placeholder = 'Search employees...';
Page.Widgets.mySearch.iconclass = 'fa fa-search';

// Configure image dimensions
Page.Widgets.mySearch.imagewidth = 40;
Page.Widgets.mySearch.imageheight = 40;
```