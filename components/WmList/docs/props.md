# Props

## Data Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `dataset` | any | `[]` | The data source for the list items |
| `maxnumberofitems` | any | `50` | Maximum number of items to display |
| `pagesize` | any | `20` | Number of items per page for pagination |
| `deferload` | any | `false` | Defer loading until component becomes visible |
| `loadingdata` | any | `false` | Indicates if data is currently loading |

## Display & Layout

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | string | `null` | Header title for the list |
| `subheading` | string | `null` | Subtitle text below the main title |
| `direction` | `'horizontal'` \| `'vertical'` | `'vertical'` | Layout direction of the list |
| `itemsperrow` | ResponsiveConfig<number> | `{xs: 1, sm: 1, md: 1, lg: 1}` | Number of items per row for different screen sizes |
| `responsive` | boolean | `false` | Enable responsive behavior |

## Selection & Interaction

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `multiselect` | any | `false` | Allow multiple item selection |
| `selectfirstitem` | any | `false` | Automatically select the first item |
| `selectionlimit` | any | `-1` | Maximum number of selectable items (-1 for unlimited) |
| `selecteditem` | any | `null` | Currently selected item(s) |
| `disableitemselect` | boolean | `false` | Disable item selection functionality |
| `selecteditemicon` | string | `null` | Icon to display for selected items |

## Navigation & Pagination

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `navigation` | `'Scroll'` \| `'On-Demand'` \| `'None'` | `'None'` | Pagination type |
| `ondemandmessage` | any | `'Load More'` | Text for load more button |
| `getNextPageData` | Function | `null` | Function to fetch next page data |
| `horizontalondemandenabled` | boolean | `false` | Enable horizontal on-demand loading |

## Data Processing

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `groupby` | string | `null` | Field to group items by |
| `orderby` | string | `null` | Field(s) to sort items by |
| `match` | string | `null` | Filter criteria for items |
| `dateformat` | string | `null` | Format for date fields |
| `itemkey` | Function | `null` | Function to generate unique keys for items |

## Styling & Appearance

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `iconclass` | string | `null` | CSS class for list icon |
| `itemclass` | Function | `null` | Function to return CSS class for items |
| `loadingicon` | string | `null` | Icon to display during loading |
| `hidehorizontalscrollbar` | boolean | `false` | Hide horizontal scroll bar |

## Touch & Gestures

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shouldswipe` | boolean | `false` | Enable swipe gestures |
| `horizontalscrolltoitem` | boolean | `true` | Auto-scroll to selected item in horizontal lists |
| `disabletoucheffect` | boolean | `false` | Disable touch feedback effects |

## Loading & Skeleton

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `showskeleton` | boolean | `undefined` | Show skeleton loading animation |
| `numberofskeletonitems` | number \| string | - | Number of skeleton items to display |
| `loadingdatamsg` | any | `'Loading...'` | Message shown during data loading |
| `nodatamessage` | any | `'No data found'` | Message when no data is available |

## Child Components

### list-template

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `showskeletonchildren` | any | `true` | Show skeleton for child elements |

### list-action-template

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `position` | `'left'` \| `'right'` | `null` | Position of action template |

## Common Use Cases

### Configure List Layout
```javascript
// Set horizontal layout with multiple items per row
Page.Widgets.myList.direction = 'horizontal';
Page.Widgets.myList.itemsperrow = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
};

// Enable responsive behavior
Page.Widgets.myList.responsive = true;
```

### Setup Data Loading
```javascript
// Configure pagination with on-demand loading
Page.Widgets.myList.navigation = 'On-Demand';
Page.Widgets.myList.pagesize = 10;
Page.Widgets.myList.ondemandmessage = 'Load More Items';

// Custom data fetching function
Page.Widgets.myList.getNextPageData = function($event, $list, page) {
    return MyDataService.getPage(page);
};
```

### Configure Selection Behavior
```javascript
// Enable multi-selection with limit
Page.Widgets.myList.multiselect = true;
Page.Widgets.myList.selectionlimit = 5;
Page.Widgets.myList.selectfirstitem = true;
Page.Widgets.myList.selecteditemicon = 'wi wi-check';
```