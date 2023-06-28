// Load a glTF model with an animation:
let loader = new THREE.GLTFLoader();
loader.load('path_to_your_animated_model.gltf', (gltf) => {
    scene.add(gltf.scene);

    // Play the first animation:
    if (gltf.animations && gltf.animations.length) {
        let mixer = new THREE.AnimationMixer(gltf.scene);
        mixer.clipAction(gltf.animations[0]).play();
    }
});
