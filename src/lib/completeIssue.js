const Request = require('request');

module.exports = (options, cb) => {
  const headers = {
    'User-Agent': 'PomoNodo',
    'Authorization': `token ${options.access_token}`
  };
  const labelUrl = options.issueUrl + '/labels';
  const newLabelPayload = [ 'Ready for Review' ];
  
};
