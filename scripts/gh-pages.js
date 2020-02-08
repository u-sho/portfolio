const ghpages = require('gh-pages');
const version = require('../package.json').version;

ghpages.publish(
	'__sapper__/export',
	{
		tag: version,
		message: 'auto-generated commit by gh-pages package',
		user: {
			name: 'u-sho',
			email: 'shouhei.uechi@gmail.com',
		}
	},
	() => console.log('Deploy complete!')
);