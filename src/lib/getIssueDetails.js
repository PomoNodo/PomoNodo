const Request = require('request');

module.exports = (options, cb) => {
  Request.get({
    url: options.issueUrl,
    headers: {
      'User-Agent': 'PomoNodo',
      Accept: `application/json`,
      Authorization: `token ${options.access_token}`
    }
  }, cb);
};
