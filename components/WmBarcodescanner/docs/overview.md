# Overview

The **Barcode Scanner** component is a device-specific widget that enables mobile applications to scan barcodes using the device's camera. When clicked, it opens the camera interface for barcode scanning, making scanned data available through the `datavalue` property. This component is commonly used in retail, inventory management, and product identification applications.

The widget appears as a button with customizable caption and icon. Upon successful scanning, it triggers callback events and populates the scanned data for use throughout your application.

## Features

- **Camera Integration**: Direct access to device camera for barcode scanning
- **Multiple Format Support**: Supports various barcode formats including QR codes, EAN, UPC, and more
- **Customizable Appearance**: Configurable caption, icon, and styling
- **Accessibility Support**: Built-in accessibility features for screen readers
- **Event-Driven**: Success callbacks for handling scanned data
- **Responsive Design**: Device-specific display options