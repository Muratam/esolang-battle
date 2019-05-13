const langsData = require('../langs.json');
const flatten = require('lodash/flatten');
const assert = require('assert');

const languages = [
	['brainfuck-esotope', 'piet', 'befunge98', 'perl6', 'evil', 'emojicode', 'lua'],
	['c-gcc', 'whitespace', 'kotlin', 'alice', 'golfscript',  'bash-busybox', 'nadesiko'],
	['starry', '', 'hexagony', 'cmd', 'unreadable',  'python3', 'php'],
	['make', 'verilog', 'x86asm-nasm', 'scheme-guile', 'gs2', 'octave', 'snowman'],
	['node', 'ruby', 'perl', 'csharp', 'malbolge',  '', 'vim'],
	['sqlite3', 'java', 'rail', 'd-dmd', 'iwashi',  'fish', 'rust'],
	['haskell', 'apl', 'crystal', '05ab1e', 'spl',  'unlambda', 'ocaml']
];

// perl6 scheme(gauche)　alice cmd csharp d-dmd 05ab1e make verilog x86asm-nasm gs2 octave snowman

module.exports = flatten(languages).map((language, index) => {
	if (index === 15) {
		return {
			type: 'base',
			team: 0,
		};
	}

	if (index === 33) {
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
