const Request = require('request');

module.exports = (options, cb) => {
  const headers = {
    'User-Agent': 'PomoNodo',
    'Authorization': `token ${options.access_token}`
  };

};
