var getRawBody = require('raw-body');
var contentType = require('content-type');

module.exports = gbk;

function gbk() {
  return function parser(req, res, next) {
    var charset = getCharset(req);

    if (charset !== 'gb2312' && charset !== 'gbk') {
      return next();
    }

    getRawBody(req, {
      length: req.headers['content-length'],
      limit: '100kb',
      encoding: 'gbk'
    }, function (err, body) {
      if (err) {
        return next(err);
      }

      req._body = true;  // skip body-parser
      req.body = body;
      next();
    });
  };
}

function getCharset(req) {
  try {
    return contentType.parse(req).parameters.charset.toLowerCase();
  } catch (e) {
    return undefined;
  }
}