const langsData = require('../langs.json');
const flatten = require('lodash/flatten');
const assert = require('assert');

const languages = [
	['', 'hyp_tes', 'shisoku', ''],
	['mamoph', '', '', 'esc'],
	['sns', '', '', 'collatz'],
	['yatsume', 'tetris', 'postlang', ''],
];

module.exports = flatten(languages).map((language, index) => {

  if (index === 5 || index === 6 || index == 9 || index === 10) {
		return {
			type: 'base',
			team: 0,
		};
	}

  /*
	if (index === 10) {
		return {
			type: 'base',
			team: 1,
		};
	}
  */

	const langDatum = langsData.find((lang) => lang.slug === language);
	assert(language === '' || langDatum !== undefined, language);

	return {
		type: 'language',
		slug: language,
		name: langDatum ? langDatum.name : '',
		link: langDatum ? langDatum.link : '',
	};
});
