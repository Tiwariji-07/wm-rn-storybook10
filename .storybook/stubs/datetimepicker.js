/**
 * Stub for @react-native-community/datetimepicker
 * This package has TypeScript syntax in .js files which breaks esbuild/Vite.
 * Since we're building for web Storybook, we don't need the native date picker.
 */

// Default export - the main DateTimePicker component
export default function DateTimePicker() {
    return null;
}

// Named exports that might be imported
export const DateTimePickerAndroid = {
    open: () => Promise.resolve({ action: 'dismissed' }),
    dismiss: () => { },
};

export const RNDateTimePicker = DateTimePicker;
