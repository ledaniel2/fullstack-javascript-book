import vision from '@google-cloud/vision';

// Create a client
const client = new vision.ImageAnnotatorClient();

async function analyzeImage(imagePath) {
    const [result] = await client.labelDetection(imagePath);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
}

analyzeImage('./path/to/your/image.jpg');
