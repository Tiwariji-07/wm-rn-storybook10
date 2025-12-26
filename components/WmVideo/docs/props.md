# Props

## Video Source Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mp4format` | string | null | URL path to the MP4 format video source |
| `oggformat` | string | null | URL path to the Ogg format video source |
| `webmformat` | string | null | URL path to the WebM format video source |
| `videoposter` | any | 'resources/images/imagelists/default-image.png' | Image to display as video poster before playback |
| `showdefaultvideoposter` | any | true | Whether to show the default poster image |

## Playback Control Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autoplay` | any | false | Whether the video should start playing automatically |
| `controls` | any | false | Whether to display video playback controls |
| `loop` | any | false | Whether the video should loop continuously |
| `muted` | any | false | Whether the video audio should be muted by default |
| `playing` | boolean | false | Current playing state of the video |
| `videopreload` | any | 'none' | Preload strategy: 'none', 'metadata', or 'auto' |
| `requiresLinearPlayback` | boolean | true | Whether the video requires linear playback |

## Subtitle Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `subtitlesource` | string | null | URL path to the subtitle file (.vtt format) |
| `subtitlelang` | any | 'en' | Language code for subtitles |

## Advanced Features

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `isLive` | boolean | false | Whether this is a live video stream |
| `allowsPictureInPicture` | boolean | false | Whether picture-in-picture mode is allowed |
| `showNowPlayingNotification` | boolean | false | Whether to show now playing notifications |
| `videosupportmessage` | any | 'Your browser does not support the video tag.' | Message shown when video is not supported |

## Common Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `show` | any | true | Controls widget visibility |
| `disabled` | any | false | Whether the video widget is disabled |
| `styles` | any | null | Custom styling object |
| `classname` | string | null | Additional CSS class names |
| `showindevice` | ('xs'\|'sm'\|'md'\|'lg'\|'xl'\|'xxl')[] | null | Device sizes where widget should be shown |
| `showskeleton` | boolean | undefined | Whether to show loading skeleton |
| `disabletoucheffect` | boolean | false | Whether to disable touch effects |

## Accessibility Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accessibilitylabel` | string | undefined | Accessibility label for screen readers |
| `hint` | string | undefined | Tooltip text shown on hover |
| `accessibilityrole` | AccessibilityRole | undefined | ARIA role for accessibility |

## Event Callback Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onFullscreenEnter` | (() => void) \| null | null | Callback fired when entering fullscreen |
| `onFullscreenExit` | (() => void) \| null | null | Callback fired when exiting fullscreen |

### Configure Video Sources

```javascript
// Set multiple video format sources for compatibility
Page.Widgets.myVideo.mp4format = "assets/videos/sample.mp4";
Page.Widgets.myVideo.webmformat = "assets/videos/sample.webm";
Page.Widgets.myVideo.oggformat = "assets/videos/sample.ogg";

// Configure poster image
Page.Widgets.myVideo.videoposter = "assets/images/video-poster.jpg";
```

### Configure Playback Behavior

```javascript
// Enable autoplay with muted audio (mobile best practice)
Page.Widgets.myVideo.autoplay = true;
Page.Widgets.myVideo.muted = true;
Page.Widgets.myVideo.controls = true;

// Set up looping video
Page.Widgets.myVideo.loop = true;
Page.Widgets.myVideo.videopreload = "metadata";
```

### Configure Subtitles

```javascript
// Add subtitle support
Page.Widgets.myVideo.subtitlesource = "assets/subtitles/video-en.vtt";
Page.Widgets.myVideo.subtitlelang = "en";
```