import express from 'express';
import session from 'express-session';
import passport from 'passport';
import strategy from 'passport-local';
const LocalStrategy = strategy.Strategy;

const users = [{ id: '1', username: 'test', password: 'test' }];

passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = users.find(user => user.username === username);
    if (!user) { return done(null, false); }
    if (user.password !== password) { return done(null, false); }
    return done(null, user);
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(user => user.id === id);
  done(null, user);
});

const app = express();
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
