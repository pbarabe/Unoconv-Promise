# Unoconv Promise

Node.js wrapper with Promise for converting documents with unoconv, inspired by [Graham Floyd's version](https://github.com/gfloyd/node-unoconv)

## Setup

### Requirement

[Unoconv](http://dag.wieers.com/home-made/unoconv/) is required, which requires [LibreOffice](http://www.libreoffice.org/) (or OpenOffice.)

If you're using Mac, you can install it easily

```
brew install unoconv
```

### Installation

```
npm install unoconv-promise
```

## Usage

### Convert files: return Buffer

```
const unoconv = require('unoconv-promise')

unoconv.convert('./mydoc.doc')
  .then((fileBuffer) => {
    // Converted file buffer
    return Promise.resolve(fileBuffer)
  })
  .catch((e) => {
    throw(e)
  })
```

### Convert files: return output file path

```
const unoconv = require('unoconv-promise')

unoconv.convert('./mydoc.doc', {
    output: "./result.pdf"
  })
  .then((outputFilePath) => {
    // Converted file outputFilePath
  })
  .catch((e) => {
    throw(e)
  })
```

### Show supported formats

```
const unoconv = require('unoconv-promise')

unoconv.formats()
  .then((formats) => {
    // formats will be an array contains supports formats
  })
  .catch((e) => {
    throw(e)
  })
```

## Test

```
npm test
```

## Reference

- [node-unoconv](https://github.com/gfloyd/node-unoconv)
- [filepreview.js](https://github.com/maxlabelle/filepreview/blob/master/filepreview.js)
- [unoconv man page](https://linux.die.net/man/1/unoconv)
