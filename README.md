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

Currently, the code examples up to and including chapter 6 should work without
modification. Those from later chapters may need valid user credentials, or
creation of a suitable framework or environment, in order to be run or utilized.

All code Copyright (c) 2023 Richard Spencer
Released under Creative Commons — CC0 1.0 Universal License
