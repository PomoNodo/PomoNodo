const getIssues = require('../lib/getIssues');

module.exports = {
  method: 'GET',
  path: '/repo',
  config: {
    auth: {
      mode: 'try',
      strategy: 'session'
    }
  },
  handler: (req, rep) => {
    const homeObj = {
      title: 'PomoNodo - view issues!',
      loggedIn: req.auth.isAuthenticated
    };

   
};
