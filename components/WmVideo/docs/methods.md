# Methods

Access video widget methods using `Page.Widgets.[widgetName]` in your JavaScript code.

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `getSource` | path: string | void | Sets the video source path dynamically |
| `renderVideoPoster` | props: WmVideoProps | void | Renders the video poster with given properties |
| `playingStatusChange` | isPlaying: boolean | void | Updates the playing status of the video |
| `playerReadyStatusChange` | statusObj: any | void | Handles player ready status changes |
| `initializeProps` | none | void | Initializes widget properties |
| `initializePlayer` | videoService: any | void | Initializes the video player with service |
| `onPlayIconTap` | none | void | Handles play icon tap events |

### Dynamic Video Loading

```javascript
// Change video source dynamically
Page.Widgets.myVideo.getSource("assets/videos/new-video.mp4");

// Control playback status
Page.Widgets.myVideo.playingStatusChange(true); // Start playing
Page.Widgets.myVideo.playingStatusChange(false); // Pause
```

### Video Player Initialization

```javascript
// Initialize video player with custom configuration
Page.onReady = function() {
    // Initialize properties first
    Page.Widgets.myVideo.initializeProps();
    
    // Then initialize player with video service
    var videoService = {
        // Custom video service configuration
    };
    Page.Widgets.myVideo.initializePlayer(videoService);
};
```