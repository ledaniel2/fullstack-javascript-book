import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const app = express();

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`<!DOCTYPE html><html><head></head><body><div id="app">${html}</div></body></html>`);
});

app.listen(3000);
