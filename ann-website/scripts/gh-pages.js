var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        silent: true,
        repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/itsannbat/itsannbat.github.io',
        user: {
            name: 'Ann Baturytski',
            email: 'baturytski.ann@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)