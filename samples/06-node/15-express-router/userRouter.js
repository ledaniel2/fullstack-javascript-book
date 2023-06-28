import express from 'express';
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update user with ID: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete user with ID: ${req.params.id}`);
});

export default router;
