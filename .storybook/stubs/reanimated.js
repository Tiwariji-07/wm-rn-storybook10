/**
 * Stub for react-native-reanimated
 * Provides mock implementations for web environment
 * Animations use CSS transitions where possible
 */
import React from 'react';
import { View, Text, Image, ScrollView, Animated as RNAnimated } from 'react-native';

// makeMutable - creates a mutable value that can be read/written synchronously
// Used by WmBottomsheet for animation state
export function makeMutable(initialValue) {
    const state = {
        value: initialValue,
        _listeners: [],
        addListener(callback) {
            this._listeners.push(callback);
            return () => {
                this._listeners = this._listeners.filter(l => l !== callback);
            };
        },
        set(newValue) {
            this.value = newValue;
            this._listeners.forEach(l => l(newValue));
        }
    };

    // Make value property reactive
    let currentValue = initialValue;
    Object.defineProperty(state, 'value', {
        get() { return currentValue; },
        set(newValue) {
            currentValue = newValue;
            state._listeners.forEach(l => l(newValue));
        }
    });

    return state;
}

export function useSharedValue(initialValue) {
    const ref = React.useRef(null);
    if (ref.current === null) {
        ref.current = makeMutable(initialValue);
    }
    return ref.current;
}

export function useDerivedValue(updater, dependencies) {
    const value = useSharedValue(null);
    React.useEffect(() => {
        value.value = updater();
    }, dependencies);
    return value;
}

export function useAnimatedStyle(updater, dependencies) {
    const [style, setStyle] = React.useState(() => updater());

    React.useEffect(() => {
        const newStyle = updater();
        setStyle(newStyle);
    }, dependencies || []);

    return style;
}

export function useAnimatedProps(updater, dependencies) {
    return React.useMemo(() => updater(), dependencies || []);
}

export function useAnimatedGestureHandler(handlers) {
    return handlers;
}

export function useAnimatedScrollHandler(handlers) {
    return handlers;
}

export function useAnimatedRef() {
    return React.useRef(null);
}

export function useAnimatedReaction(prepare, react, dependencies) {
    React.useEffect(() => {
        const value = prepare();
        react(value, null);
    }, dependencies);
}

// Animation functions - use CSS transitions timing
export function withTiming(toValue, config = {}, callback) {
    const duration = config.duration || 300;
    if (callback) {
        setTimeout(() => callback({ finished: true }), duration);
    }
    return toValue;
}

export function withSpring(toValue, config = {}, callback) {
    if (callback) {
        setTimeout(() => callback({ finished: true }), 500);
    }
    return toValue;
}

export function withDecay(config, callback) {
    if (callback) {
        setTimeout(() => callback({ finished: true }), 300);
    }
    return 0;
}

export function withDelay(delay, animation) {
    return animation;
}

export function withSequence(...animations) {
    return animations[animations.length - 1];
}

export function withRepeat(animation, count, reverse, callback) {
    return animation;
}

export function cancelAnimation(sharedValue) {
    // No-op for web
}

export function runOnJS(fn) {
    return (...args) => fn(...args);
}

export function runOnUI(fn) {
    return (...args) => fn(...args);
}

export const Easing = {
    linear: (t) => t,
    ease: (t) => t,
    quad: (t) => t * t,
    cubic: (t) => t * t * t,
    poly: (n) => (t) => Math.pow(t, n),
    sin: (t) => 1 - Math.cos((t * Math.PI) / 2),
    circle: (t) => 1 - Math.sqrt(1 - t * t),
    exp: (t) => Math.pow(2, 10 * (t - 1)),
    elastic: (t) => t,
    back: (t) => t,
    bounce: (t) => t,
    bezier: (x1, y1, x2, y2) => (t) => t,
    in: (easing) => easing,
    out: (easing) => (t) => 1 - easing(1 - t),
    inOut: (easing) => (t) => (t < 0.5 ? easing(t * 2) / 2 : 1 - easing((1 - t) * 2) / 2),
};

// Animated wrapper that uses react-native's Animated for web compatibility
const AnimatedView = React.forwardRef((props, ref) => {
    const { style, ...rest } = props;
    return React.createElement(View, { ref, style, ...rest });
});
AnimatedView.displayName = 'AnimatedView';

const AnimatedText = React.forwardRef((props, ref) => {
    return React.createElement(Text, { ref, ...props });
});
AnimatedText.displayName = 'AnimatedText';

const AnimatedImage = React.forwardRef((props, ref) => {
    return React.createElement(Image, { ref, ...props });
});
AnimatedImage.displayName = 'AnimatedImage';

const AnimatedScrollView = React.forwardRef((props, ref) => {
    return React.createElement(ScrollView, { ref, ...props });
});
AnimatedScrollView.displayName = 'AnimatedScrollView';

// Animated components
const Animated = {
    View: AnimatedView,
    Text: AnimatedText,
    Image: AnimatedImage,
    ScrollView: AnimatedScrollView,
    createAnimatedComponent: (component) => {
        const AnimatedComponent = React.forwardRef((props, ref) => {
            return React.createElement(component, { ref, ...props });
        });
        AnimatedComponent.displayName = `Animated(${component.displayName || component.name || 'Component'})`;
        return AnimatedComponent;
    },
};

// Layout animations (no-op)
const createLayoutAnimation = () => {
    const animation = {
        duration: () => animation,
        delay: () => animation,
        springify: () => animation,
        damping: () => animation,
        stiffness: () => animation,
        withCallback: () => animation,
        withInitialValues: () => animation,
    };
    return animation;
};

export const Layout = createLayoutAnimation();
export const FadeIn = createLayoutAnimation();
export const FadeOut = createLayoutAnimation();
export const SlideInRight = createLayoutAnimation();
export const SlideOutRight = createLayoutAnimation();
export const SlideInDown = createLayoutAnimation();
export const SlideOutDown = createLayoutAnimation();
export const ZoomIn = createLayoutAnimation();
export const ZoomOut = createLayoutAnimation();

// Gesture mocks
export const Gesture = {
    Pan: () => ({
        onStart: function () { return this; },
        onUpdate: function () { return this; },
        onEnd: function () { return this; },
        onFinalize: function () { return this; },
        enabled: function () { return this; },
        minDistance: function () { return this; },
        activeOffsetY: function () { return this; },
        activeOffsetX: function () { return this; },
        failOffsetY: function () { return this; },
        failOffsetX: function () { return this; },
    }),
    Tap: () => ({
        onStart: function () { return this; },
        onEnd: function () { return this; },
        enabled: function () { return this; },
        numberOfTaps: function () { return this; },
    }),
    Simultaneous: (...gestures) => ({}),
    Exclusive: (...gestures) => ({}),
    Race: (...gestures) => ({}),
};

export const GestureDetector = ({ children }) => children;

// Measure mock
export function measure(animatedRef) {
    return { width: 0, height: 0, x: 0, y: 0, pageX: 0, pageY: 0 };
}

// Scrolling
export function scrollTo(animatedRef, x, y, animated) {
    if (animatedRef.current?.scrollTo) {
        animatedRef.current.scrollTo({ x, y, animated });
    }
}

export function interpolate(value, inputRange, outputRange, extrapolation) {
    if (inputRange.length < 2 || outputRange.length < 2) return outputRange[0] || 0;

    // Find which segment we're in
    let i = 0;
    while (i < inputRange.length - 1 && value > inputRange[i + 1]) {
        i++;
    }
    i = Math.min(i, inputRange.length - 2);

    const inputMin = inputRange[i];
    const inputMax = inputRange[i + 1];
    const outputMin = outputRange[i];
    const outputMax = outputRange[i + 1];

    const progress = (value - inputMin) / (inputMax - inputMin);
    return outputMin + progress * (outputMax - outputMin);
}

export function interpolateColor(value, inputRange, outputRange) {
    return outputRange[0];
}

// Clamp utility
export function clamp(value, min, max) {
    'worklet';
    return Math.min(Math.max(value, min), max);
}

export default Animated;
