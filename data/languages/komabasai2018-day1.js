const langsData = require('../langs.json');
const flatten = require('lodash/flatten');
const assert = require('assert');

const languages = [
	['brainfuck-esotope', 'piet', 'befunge98', 'evil', 'emojicode', 'lua'],
	['c-gcc', 'whitespace', 'kotlin', 'golfscript',  'bash-busybox', 'nadesiko'],
	['starry', '', 'hexagony', 'unreadable',  'python3', 'php'],
	['node', 'ruby', 'perl', 'malbolge',  '', 'vim'],
	['sqlite3', 'java', 'rail', 'iwashi',  'fish', 'rust'],
	['haskell', 'apl', 'crystal', 'spl',  'unlambda', 'ocaml']
];

module.exports = flatten(languages).map((language, index) => {
	if (index === 13) {
		return {
			type: 'base',
			team: 0,
		};
	}

	if (index === 22) {
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
