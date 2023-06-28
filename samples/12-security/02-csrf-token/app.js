import express from 'express';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';

// setup route middlewares
const csrfProtection = csrf({ cookie: true });
const parseForm = express.urlencoded({ extended: false });

const app = express();

app.use(cookieParser());

app.get('/form', csrfProtection, (req, res) => {
  // pass the csrfToken to the view
  res.render('send', { csrfToken: req.csrfToken() });
});

app.post('/process', parseForm, csrfProtection, (req, res) => {
  res.send('Data is being processed');
});

app.listen(3000);
