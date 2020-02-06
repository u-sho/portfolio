var ghpages = require('gh-pages');

ghpages.publish(
	'__sapper__/export/portfolio',
	{
		branch: 'gh-pagges',
		repo: 'https://github.com/u-sho/portfolio.git',
		user: {
			name: 'u-sho',
			email: 'shouhei.uechi@gmail.com',
		}
	},
	() => console.log('Deploy complete!')
)
