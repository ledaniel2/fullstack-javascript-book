import express from 'express';
import helmet from 'helmet';

const app = express()

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "userscripts.example.com"],
    mediaSrc: ["media1.com", "media2.com"],
    imgSrc: ["*"]
  }
}))

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(3000)
