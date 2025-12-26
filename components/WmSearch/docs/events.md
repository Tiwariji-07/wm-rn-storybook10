# Callback Events

| Event | Description |
|-------|-------------|
| `onChange` | Triggered when search query changes. Parameters: (undefined, this.proxy, value, prevQuery) |
| `onClear` | Triggered when clear button is pressed. Parameters: (null, this) |
| `onFocus` | Triggered when search input gains focus. Parameters: (null, this) |
| `onBlur` | Triggered when search input loses focus. Parameters: (null, this) |
| `onSubmit` | Triggered when search is submitted. Parameters: (null, this) |
| `onSelect` | Triggered when user selects an item from results. Parameters: (null, this, item.datafield) |
| `isUpdateRequired` | Triggered to check if component update is needed. Parameters: () |
| `onTap` | Triggered on tap gesture. Parameters: (e, this.proxy) |
| `onTouchstart` | Triggered when touch starts. Parameters: (e) |
| `onDoubletap` | Triggered on double tap gesture. Parameters: (e) |
| `onLongtap` | Triggered on long tap gesture. Parameters: (e) |
| `onTouchend` | Triggered when touch ends. Parameters: (e) |