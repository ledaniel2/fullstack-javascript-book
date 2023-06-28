// Create a variable
const v = tf.variable(tf.tensor([1, 2, 3]));
console.log('before:', v);
v.assign(tf.tensor([4, 5, 6]));
console.log('after:', v);
