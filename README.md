# Brief description

A pomodoro app that blocks distractions while you working. App integrates with your Github profile, pull-up issues You working
and adds to your next TODO pomodoro task

## Created using:
    - NodeJS
    - MongoDB
    - ExpressJS
    - AngularJS

## Instructions

Clone this repo
`npm install`

Github token data configures using JWT, so to create environment variables
you'll need to create a config.env file with:
  - GITHUB_CLIENT_ID
  - GITHUB_CLIENT_SECRET
  - BASE_URL

Add the config.env variables
`nodemon src/start.js`

And run
`npm start`

## Functionality
- [x] Login via Github oAuth
- [x] Select one of your organisations
- [ ] Select an issue from repo
- [x] Start, stop the timer for issue
- [x] Be able to take a 5 minute break at the end of each pomodoro
- [ ] Log how much time has been spent in a "session" on an issue
- [ ] Take a longer break after several pomodoro sessions


## Enchancements

- Create Chrome extension
- Create desktop application using Electron

## Contributing

We :heart: **Pull Requests**.

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Notice

The Pomodoro Technique® and Pomodoro™ are registered trademarks of Francesco Cirillo.

## License

Available under [the MIT license](http://mths.be/mit).