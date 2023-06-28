// Define the model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
