// Let's load a glTF model and place it in our AR scene:
let loader = new THREE.GLTFLoader();
loader.load('path_to_your_model.gltf', (gltf) => {
    // Set the model's position and scale:
    gltf.scene.position.set(0, 0, -2);
    gltf.scene.scale.set(0.5, 0.5, 0.5);

    // Add the model to the scene:
    scene.add(gltf.scene);
});
