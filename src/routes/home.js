const getRepos = require('../lib/getRepos.js');

module.exports = {
  path: '/',
  method: 'GET',
  config: {
    auth: {
      mode: 'try',
      strategy: 'session'
    }
  },
  handler: (req, rep) => {
    const homeObj = {
      title: 'PomoNodo',
      loggedIn: req.auth.isAuthenticated
    };

    if (req.auth.isAuthenticated) {
      // add cookie info here!
      getRepos(req.auth.credentials, (err, res, body) => {
        if (err) { throw err; }
        const currentUser = { userName: req.auth.credentials.userName };
        const repos = { repos: JSON.parse(body) };
        rep.view('home', Object.assign(homeObj, repos, currentUser));
      });
    } else {
      rep.view('home', homeObj);
    }
  }
};
