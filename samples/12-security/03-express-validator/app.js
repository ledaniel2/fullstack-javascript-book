import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/comment', 
  body('comment').trim().escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body.comment);  // Sanitized comment
    res.send('Comment received.');
  }
);

app.listen(3000);
