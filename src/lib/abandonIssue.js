const Request = require('request');

module.exports = (options, cb) => {
  const headers = {
    'User-Agent': 'PomoNodo',
    'Authorization': `token ${options.access_token}`
  };
  const assignUrl = options.issueUrl + '/assignees';
  const labelUrl = options.issueUrl + '/labels/In%20Progress';
  const assignPayload = { 'assignees': [ options.userName ] };

  
};
