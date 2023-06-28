navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
    if (supported) {
        let options = { optionalFeatures: ['local-floor', 'bounded-floor'] };
        navigator.xr.requestSession('immersive-vr', options).then(onSessionStarted);
    }
});
