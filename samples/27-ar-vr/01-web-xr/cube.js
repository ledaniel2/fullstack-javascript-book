let geometry = new THREE.BoxGeometry(1, 1, 1); // A 1x1x1 cube
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green
let cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Add the cube to the scene
