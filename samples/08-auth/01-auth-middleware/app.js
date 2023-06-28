import express from 'express';
const app = express();

function authenticate(req, res, next) {
  // Assume 'getUser()' checks the provided credentials
  const user = getUser(req.body.username, req.body.password);

  if (user) {
    req.user = user;
    next(); // Proceed to the next middleware
  } else {
    res.status(401).send('Invalid credentials');
  }
}

function authorize(req, res, next) {
  // Assume 'getPermissions()' fetches permissions for the user
  const permissions = getPermissions(req.user);

  if (permissions.includes('access_dashboard')) {
    next(); // Proceed to the next middleware
  } else {
    res.status(403).send('You do not have permission to access this resource');
  }
}

// Applying middleware to a route
app.get('/dashboard', authenticate, authorize, (req, res) => {
  res.send('Welcome to the dashboard!');
});
