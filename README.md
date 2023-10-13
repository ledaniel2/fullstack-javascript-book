# Fullstack JavaScript Book

This is a works in progress as the online companion repository to the book
**Fullstack JavaScript: Everything You Need To Node** (ASIN: B0C8PLDS6Q)
available from [Amazon.com](https://www.amazon.com/dp/B0C8PLDS6Q).

Most of the `.html` files can be loaded into a browser and activated, without
the need to explicitly load from a local webserver. Most of the `.js` files
can be run with eg. `node relative/path/to/app.js`, or are automatically
loaded by `webpage.html` in the same directory. Sometimes you will need to
navigate into the directory with eg. `cd relative/path/to`, `node app.js`.

The file `package.json` needs to be found in a parent directory, and allows
`import` to be used with a `.js` file extension. If the `.js` file is copied
outside of the hierarchy and a `package.json` is not present, it must be
renamed to have a `.mjs` extension, eg. `app.mjs`.

The majority of code samples in directory "samples" up to and including chapter 8
should work without modification. Those from later chapters may need valid user
credentials, or creation of a suitable framework or environment, in order to be
run or utilized.

Markdown sources for all of the chapters in the book are now available
to browse online. The command used to build the e-book under Windows 10 using
the "pandoc" program was:

```
..\pandoc-3.1.2\pandoc --epub-cover-image=covermono.png --epub-title-page=false --highlight-style=code.theme --syntax-definition=plaintext.xml --metadata title="Fullstack JavaScript: Everything You Need To Node" --data-dir=..\pandoc-3.1.2\data -f gfm -t epub3 -o book.epub 00-overview.md 01-introduction.md 02-javascript.md 03-html-css.md 04-dom-browser.md 05-async.md 06-node.md 07-databases.md 08-auth.md 09-frameworks.md 10-testing.md 11-optimization.md 12-security.md 13-sockets.md 14-webapps.md 15-advanced-frontend.md 16-advanced-backend.md 17-devops.md 18-ml-ai.md 19-access.md 20-serverless.md 21-wasm.md 22-cross-platform.md 23-web-scraping.md 24-blockchain.md 25-graphql.md 26-chatbots.md 27-ar-vr.md 28-iot.md 29-vcs.md 30-legacy-code.md 31-career.md
```

Note that not all of the resources referenced above are currently available online.

## Book Contents

0. Overview
1. Introduction to Fullstack Web Development
2. JavaScript Essentials: From Novice to Fullstack
3. HTML and CSS for Web Developers
4. Exploring the DOM and Browser APIs
5. Asynchronous JavaScript and Promises
6. Introduction to Node.js and NPM
7. Working with Databases
8. User Authentication and Authorization
9. Frontend JavaScript Frameworks and Libraries
10. Testing and Deployment
11. Web Performance Optimization
12. Security and Best Practices
13. Real-Time Web Development with WebSockets
14. Building Progressive Web Applications
15. Advanced Frontend Development Techniques
16. Advanced Backend Development Techniques
17. DevOps for Fullstack Developers
18. Machine Learning and Artificial Intelligence in Fullstack Development
19. Accessibility in Web Development
20. Serverless Computing and Functions as a Service (FaaS)
21. WebAssembly and Blazor
22. Building Cross-Platform Mobile Applications
23. Web Scraping and Automation
24. Building Blockchain Applications with JavaScript
25. Building Web Applications with GraphQL
26. Building Chatbots and Voice Assistants with JavaScript
27. Building Augmented and Virtual Reality Applications
28. Building IoT Applications with JavaScript
29. Version Control Systems
30. Working with Legacy Code
31. The Future of Fullstack Web Development

All text and code Copyright (c) 2023 Richard Spencer

Released under Creative Commons — CC0 1.0 Universal License
