# Methods

WebView widget methods can be accessed using `Page.Widgets.widgetName.methodName()`.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `executeScript` | fn: string | void | Execute JavaScript code within the loaded web content |
| `insertCSS` | style: any | void | Inject custom CSS styles into the loaded web content |
| `parseResult` | result: string | void | Parse and process results from executed scripts |
| `getTitle` | iframe: any | void | Retrieve the title of the loaded web content |
| `onLoad` | e: any, title: string, src: string | void | Manually trigger the load event handler |

## Method Usage Examples

### Execute JavaScript in WebView

```javascript
// Execute custom JavaScript in the loaded web content
const script = `
  document.body.style.backgroundColor = '#f0f0f0';
  document.querySelectorAll('a').forEach(link => {
    link.style.color = '#007bff';
  });
  return document.title;
`;

Page.Widgets.myWebview.executeScript(script);
```

### Inject Custom Styles

```javascript
// Insert custom CSS to modify web content appearance
const customStyles = `
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 20px;
  }
  .header {
    background-color: #333;
    color: white;
    padding: 10px;
  }
`;

Page.Widgets.myWebview.insertCSS(customStyles);
```

### Get Web Content Title

```javascript
// Retrieve the title of the loaded web page
Page.Widgets.myWebview.getTitle(Page.Widgets.myWebview);

// The title can be used in the onLoad event
Page.myWebviewLoad = function(e, widget) {
    const title = widget.getTitle(widget);
    Page.Widgets.titleLabel.caption = title;
};
```

### Parse Script Results

```javascript
// Execute script and parse the result
const dataScript = `
  JSON.stringify({
    url: window.location.href,
    title: document.title,
    links: document.querySelectorAll('a').length
  });
`;

Page.Widgets.myWebview.executeScript(dataScript);

// Parse the result in a callback
Page.parseWebData = function(result) {
    Page.Widgets.myWebview.parseResult(result);
    const data = JSON.parse(result);
    console.log("Web page data:", data);
};
```