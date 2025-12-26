# Styling

The Search component supports various CSS classes for customization:

## Primary Style Classes

| Class Name | Description |
|------------|-------------|
| `app-search` | Default style class applied to the search component |
| `app-autocomplete` | Style class applied when component is in autocomplete mode |
| `app-search-disabled` | Applied when search component is disabled |
| `app-search-rtl` | Applied for right-to-left language support |
| `form-autocomplete-input-horizontal` | Horizontal layout styling for autocomplete input |

## Customization Example

```css
/* Custom search styling */
.app-search {
    border-radius: 8px;
    background-color: #f5f5f5;
}

/* Search input styling */
.app-search input {
    padding: 12px;
    font-size: 16px;
    border: none;
}

/* Autocomplete dropdown styling */
.app-autocomplete .dropdown-menu {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Search result items */
.app-search .search-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
}

/* Disabled state styling */
.app-search-disabled {
    opacity: 0.6;
    pointer-events: none;
}

/* RTL support */
.app-search-rtl {
    direction: rtl;
    text-align: right;
}
```

## Icon Customization

Customize search icons through component properties:

```javascript
// Custom icon classes
Page.Widgets.mySearch.iconclass = 'custom-search-icon';
Page.Widgets.mySearch.clearsearchiconclass = 'custom-clear-icon';
```

## Responsive Design

```css
/* Mobile-first responsive styling */
.app-search {
    width: 100%;
}

@media (min-width: 768px) {
    .app-search {
        width: 300px;
    }
}
```