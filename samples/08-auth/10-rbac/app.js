function checkPermission(permission) {
  return (req, res, next) => {
    const { user } = req;
    const userPermissions = roles[user.role];
    if (userPermissions.includes(permission)) {
      next();
    } else {
      res.status(403).json({ error: 'Forbidden' });
    }
  }
}

app.post('/posts', checkPermission('create-post'), (req, res) => {
  // Create the post
});
