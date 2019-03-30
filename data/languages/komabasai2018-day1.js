const langsData = require('../langs.json');
const flatten = require('lodash/flatten');
const assert = require('assert');

const languages = [
	['brainfuck-esotope', 'piet', 'emojicode', 'lua'],
	['c-gcc', 'whitespace', 'bash-busybox', 'nadesiko'],
	['starry', '', 'python3', 'php'],
	['node', 'ruby', '', 'vim'],
	['sqlite3', 'java', 'fish', 'rust'],
	['haskell', 'apl', 'unlambda', 'ocaml']
];

module.exports = flatten(languages).map((language, index) => {
	if (index === 9) {
		return {
			type: 'base',
			team: 0,
		};
	}

	if (index === 14) {
		return {
			type: 'base',
			team: 1,
		};
	}

	const langDatum = langsData.find((lang) => lang.slug === language);
	assert(language === '' || langDatum !== undefined, language);

	return {
		type: 'language',
		slug: language,
		name: langDatum ? langDatum.name : '',
		link: langDatum ? langDatum.link : '',
	};
});
