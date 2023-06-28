import express from 'express';
import session from 'express-session';

const app = express();
const port = 3000;

app.use(session({
  secret: 'some secret',  // used to sign the session ID cookie
  resave: false,  // whether the session is to be saved back to the session store
  saveUninitialized: false,  // whether a session that is "uninitialized" is to be saved to the store
  cookie: { secure: false }  // whether the session cookie will be sent over secure HTTP
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the site for the first time!');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/`);
});
