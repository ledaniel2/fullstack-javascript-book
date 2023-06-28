fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=your_api_key')
    .then(response => response.json())
    .then(data => {
        // Create a text mesh for each news headline:
        data.articles.forEach((article, i) => {
            let geometry = new THREE.TextGeometry(article.title, { font: myFont, size: 0.2, height: 0.02 });
            let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            let text = new THREE.Mesh(geometry, material);
            text.position.set(-1, i * 0.3, -2);
            scene.add(text);
        });
    });
