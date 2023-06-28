// Define training data
const xs = tf.tensor([750, 800, 850, 900, 950]); // Sizes
const ys = tf.tensor([200000, 225000, 250000, 275000, 300000]); // Prices

// Train the model
await model.fit(xs, ys, {epochs: 100});
