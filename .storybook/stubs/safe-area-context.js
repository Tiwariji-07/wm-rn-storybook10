/**
 * Stub for react-native-safe-area-context
 * Provides default values for web environment where native safe area doesn't exist.
 * Matches all exports from the real package.
 */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const defaultInsets = { top: 0, right: 0, bottom: 0, left: 0 };
const defaultFrame = { x: 0, y: 0, width: 0, height: 0 };

// Create proper React contexts with default values (not null)
export const SafeAreaInsetsContext = React.createContext(defaultInsets);
export const SafeAreaFrameContext = React.createContext(defaultFrame);

// Alias for backwards compatibility
export const SafeAreaContext = SafeAreaInsetsContext;

// Hooks - return default values
export function useSafeAreaInsets() {
    return defaultInsets;
}

export function useSafeAreaFrame() {
    return defaultFrame;
}

// Deprecated hook - kept for compatibility
export function useSafeArea() {
    console.warn('useSafeArea is deprecated. Use useSafeAreaInsets instead.');
    return defaultInsets;
}

// Initial window metrics for web (null in real package, we provide defaults)
export const initialWindowMetrics = {
    insets: defaultInsets,
    frame: defaultFrame,
};
export const initialWindowSafeAreaInsets = defaultInsets;

// Provider component
export function SafeAreaProvider({ children, initialMetrics, style, ...others }) {
    const insets = initialMetrics?.insets ?? defaultInsets;
    const frame = initialMetrics?.frame ?? defaultFrame;

    return React.createElement(
        SafeAreaFrameContext.Provider,
        { value: frame },
        React.createElement(
            SafeAreaInsetsContext.Provider,
            { value: insets },
            React.createElement(View, { style: [styles.fill, style], ...others }, children)
        )
    );
}

// SafeAreaListener - for listening to inset changes
export function SafeAreaListener({ children, onChange, style, ...others }) {
    return React.createElement(View, { style: [styles.fill, style], ...others }, children);
}

// SafeAreaView component
export const SafeAreaView = React.forwardRef(function SafeAreaView({ children, style, edges, mode, ...others }, ref) {
    return React.createElement(View, { ref, style: [styles.fill, style], ...others }, children);
});

// Consumer - use the context's Consumer
export const SafeAreaConsumer = SafeAreaInsetsContext.Consumer;

// HOC for wrapping components with safe area insets
export function withSafeAreaInsets(WrappedComponent) {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    function WithSafeAreaInsets(props) {
        const insets = useSafeAreaInsets();
        return React.createElement(WrappedComponent, { ...props, insets });
    }

    WithSafeAreaInsets.displayName = `withSafeAreaInsets(${displayName})`;
    return WithSafeAreaInsets;
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
});

// Default export for CommonJS compatibility
export default {
    SafeAreaProvider,
    SafeAreaView,
    SafeAreaConsumer,
    SafeAreaContext,
    SafeAreaInsetsContext,
    SafeAreaFrameContext,
    SafeAreaListener,
    useSafeAreaInsets,
    useSafeAreaFrame,
    useSafeArea,
    withSafeAreaInsets,
    initialWindowMetrics,
    initialWindowSafeAreaInsets,
};
