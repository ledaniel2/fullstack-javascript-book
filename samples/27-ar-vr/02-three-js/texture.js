let textureLoader = new THREE.TextureLoader();
let texture = textureLoader.load('path_to_your_texture.jpg');

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ map: texture });
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);
