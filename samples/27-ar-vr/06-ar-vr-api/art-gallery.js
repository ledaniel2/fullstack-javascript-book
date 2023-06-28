fetch('https://api.artic.edu/api/v1/artworks?limit=10')
    .then(response => response.json())
    .then(data => {
        // Create a plane for each artwork:
        data.data.forEach((artwork, i) => {
            let texture = textureLoader.load(artwork.image_url);
            let geometry = new THREE.PlaneGeometry(1, 1.5);
            let material = new THREE.MeshBasicMaterial({ map: texture });
            let painting = new THREE.Mesh(geometry, material);
            painting.position.set(i * 2 - 5, 1.5, -3);
            scene.add(painting);
        });
    });
