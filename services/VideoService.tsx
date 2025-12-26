/**
 * Video Service for web Storybook
 * Provides a VideoView component and video player management for web
 */
import React, { forwardRef, useEffect, useRef } from 'react';
// @ts-ignore - No type declarations available for this module
import { VideoProvider } from '@wavemaker/app-rn-runtime/core/device/av-service';

// VideoView component for web - uses HTML5 video element
// Receives a 'player' prop that contains the source and player controls
const VideoView = forwardRef<any, any>(({
    player,
    style,
    nativeControls,
    contentFit,
    testID,
    allowsPictureInPicture,
    onFullscreenEnter,
    onFullscreenExit,
    requiresLinearPlayback,
    ...props
}, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Get source from player
    const source = player?.source;
    const videoSource = typeof source === 'object' ? source.uri : source;

    useEffect(() => {
        if (videoRef.current && player) {
            // Connect HTML5 video element to player
            const video = videoRef.current;

            // Override player methods to control HTML5 video
            player.play = () => {
                video.play();
                player.emit?.('playingChange', { isPlaying: true });
            };

            player.pause = () => {
                video.pause();
                player.emit?.('playingChange', { isPlaying: false });
            };

            player.stop = () => {
                video.pause();
                video.currentTime = 0;
                player.emit?.('playingChange', { isPlaying: false });
            };

            // Apply muted and loop settings
            video.muted = player.muted;
            video.loop = player.loop;

            // Notify player is ready
            player.emit?.('statusChange', { status: 'readyToPlay' });
        }
    }, [player, videoSource]);

    // Event handlers
    const handlePlay = () => {
        player?.emit?.('playingChange', { isPlaying: true });
    };

    const handlePause = () => {
        player?.emit?.('playingChange', { isPlaying: false });
    };

    const handleLoadedData = () => {
        player?.emit?.('statusChange', { status: 'readyToPlay' });
    };

    const handleError = () => {
        player?.emit?.('statusChange', { status: 'error' });
    };

    if (!videoSource) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                color: '#666'
            }}>
                No video source
            </div>
        );
    }

    return (
        <video
            ref={videoRef}
            src={videoSource}
            data-testid={testID}
            style={{
                width: '100%',
                height: '100%',
                objectFit: contentFit === 'contain' ? 'contain' : 'cover',
                backgroundColor: '#000',
                ...(style as any),
            }}
            controls={nativeControls === 'controls'}
            onPlay={handlePlay}
            onPause={handlePause}
            onLoadedData={handleLoadedData}
            onError={handleError}
            {...props}
        />
    );
});

VideoView.displayName = 'VideoView';

// Create a video player that mocks the Expo AV API
function createVideoPlayer(source: any) {
    const listeners: { [key: string]: Function[] } = {};

    const player = {
        source,
        muted: false,
        loop: false,
        showNowPlayingNotification: false,

        addListener(event: string, callback: Function) {
            if (!listeners[event]) {
                listeners[event] = [];
            }
            listeners[event].push(callback);
        },

        removeListener(event: string, callback: Function) {
            if (listeners[event]) {
                listeners[event] = listeners[event].filter(cb => cb !== callback);
            }
        },

        emit(event: string, data?: any) {
            if (listeners[event]) {
                listeners[event].forEach(cb => cb(data));
            }
        },

        // These will be overridden by VideoView when mounted
        play() { },
        pause() { },
        stop() { },

        release() {
            Object.keys(listeners).forEach(key => {
                listeners[key] = [];
            });
        },
    };

    return player;
}

// Video service object
const videoService = {
    VideoView,
    createVideoPlayer,
};

// VideoService wrapper component
export const VideoServiceComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <VideoProvider value={videoService}>
            {children}
        </VideoProvider>
    );
};

export default videoService;
