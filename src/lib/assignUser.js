const Request = require('request');

module.exports = (options, cb) => {
  const headers = {
    'User-Agent': 'PomoNodo',
    'Authorization': `token ${options.access_token}`
  };
  const assignUrl = options.issueUrl + '/assignees';
  const labelUrl = options.issueUrl + '/labels';
  const assignPayload = { 'assignees': [ options.userName ] };
  const labelPayload = [ 'In Progress' ];


};
