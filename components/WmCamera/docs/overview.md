# Overview

The Camera component is a button-based widget that opens the device camera for capturing photos or videos in React Native mobile applications. When tapped, it launches the native camera interface and exposes the captured media's local file path through the `localFilePath` property.

This component is essential for mobile apps that need to capture user-generated content, document scanning, profile pictures, or any scenario requiring camera functionality. The captured media can be displayed immediately, stored in databases, or uploaded to servers.

## Features

- **Dual Capture Modes**: Support for both image and video capture through the `capturetype` property
- **Image Quality Control**: Configurable JPEG compression levels (0-100%) for optimal file size management
- **Format Flexibility**: Support for JPEG and PNG encoding formats
- **Responsive Scaling**: Target width and height properties for automatic image resizing while maintaining aspect ratio
- **Edit Capability**: Optional image editing/cropping functionality before final capture
- **Accessibility Support**: Full accessibility features including labels, hints, and roles for screen readers
- **Visual Customization**: Configurable icon class and size for button appearance