# gbk-body

## Installation

```sh
npm install gbk-body
```

## API

```js
var gbkBody = require('gbk-body')
```

### gbkBody()

## Example

### Simple Express example

```js
var express = require('express');
var gbkBody = require('gbk-body');

var app = express();

app.use(gbkBody());
```

## Notice

When using `gbk-body` and `body-parser` together, make sure `gbk-body` appears before `body-parser`.