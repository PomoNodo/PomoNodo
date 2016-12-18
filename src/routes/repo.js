const getIssues = require('../lib/getIssues');
const marked = require('marked');
const completeIssue = require('../lib/completeIssue');

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

    const userSelection = {
      repoOwner: req.query.repo.split(' ')[0],
      repoName: req.query.repo.split(' ')[1],
      repoUrl: function () { return `https://github.com/${this.repoOwner}/${this.repoName}/issues`; }
    };
    if (req.auth.isAuthenticated) {
      getIssues(Object.assign(req.auth.credentials, userSelection), (err, res, body) => {
        if (err) throw err;
        const issues = { issues: JSON.parse(body) };
        rep.view('issues', Object.assign(homeObj, req.auth.credentials, userSelection, issues));
      });
    }
  }
};




module.exports = {
  method: 'GET',
  path: '/issue',
  config: {
    auth: {
      mode: 'try',
      strategy: 'session'
    }
  },


      handler: (req, rep) => {
      const homeObj = {
        // title: 'PomoNodo - work mode',
        loggedIn: req.auth.isAuthenticated
      };


const issueUrl = { issueUrl: req.query.url };

if (req.auth.isAuthenticated) {
  getIssueDetails(Object.assign(req.auth.credentials, issueUrl), (err, res, body) => {
    if (err) throw err;
  const issueDetails = { issueDetails: JSON.parse(body) };
  const parsedBody = { parsedBody: (marked(issueDetails.issueDetails.body) || false) };
  const parsedDate = { parsedDate: issueDetails.issueDetails.created_at.replace(/T/, ' ').replace(/Z/, '') };
  rep.view('issue_details', Object.assign(homeObj, req.auth.credentials, issueDetails, parsedBody, parsedDate, {title: `${issueDetails.issueDetails.title} - work mode`}));
});
}
}
};


module.exports = {
  method: 'POST',
  path: '/complete',
  config: {
    auth: {
      mode: 'try',
      strategy: 'session'
    }
  },
      handler: (req, rep) => {
      const issueDetails = req.payload;
if (req.auth.isAuthenticated) {
  completeIssue(Object.assign(req.auth.credentials, issueDetails), (err, res, body) => {
    if (err) throw err;
  rep.redirect('/');
});
}
}
};
