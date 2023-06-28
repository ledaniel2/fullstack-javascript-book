let arButton = document.createElement('button');
arButton.onclick = () => {
    navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        if (supported) {
            let options = { requiredFeatures: ['hit-test'] };
            navigator.xr.requestSession('immersive-ar', options).then(onSessionStarted);
        }
    });
};
document.body.appendChild(arButton);

function onSessionStarted(session) {
    // Now you can start rendering AR content.
}
