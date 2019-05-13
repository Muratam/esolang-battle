const mongoose = require('mongoose');
const Contest = require('../models/Contest');
const {stripIndent} = require('common-tags');

mongoose.Promise = global.Promise;

(async () => {
	await mongoose.connect('mongodb://localhost:27010/test');

	await Contest.updateOne(
		{id: 'komabasai2018-day1'},
		{
			name: '[[KMC Version]] 駒場祭2018 Live Codegolf Contest day1',
			id: 'komabasai2018-day1',
			start: new Date('2019-03-29T00:00:00+0900'),
			end: new Date('2019-04-04T00:00:00+0900'),
			description: {
				ja: stripIndent`
				\`\`\`
				指定された大きさの箱を出力せよ
				\`\`\`

				## 入力

				* 2桁の数値が2つ、改行区切りで与えられる。
				  * 2桁の数値とは10以上99以下の整数である。
				* 入力は正規表現 \`\\A\\d{2}\\n\\d{2}\\n\\z\` で表現される。
				* 入力の最後には改行が付与される。

				## 出力

				* 1行目の数値を高さ、2行目の数値を幅とみなし、指定された大きさの「箱」を出力せよ。
				* 「箱」は各行が改行 (LF) で区切られた以下のような文字列である。

				\`\`\`
				********
				*      *
				*      *
				*      *
				********
				\`\`\`

				* 外周を表現する文字は \`*\`, 内部を表現する文字は \` \` である。
				* 出力された文字列の前後の空白文字は無視される。

				## 入出力例

				### 入力

				\`\`\`
				10
				20
				\`\`\`

				### 出力

				\`\`\`
				********************
				*                  *
				*                  *
				*                  *
				*                  *
				*                  *
				*                  *
				*                  *
				*                  *
				********************
				\`\`\`
			`,
				en: '',
			},
		},
		{upsert: true}
	);

	await Contest.updateOne(
		{id: 'komabasai2018-day2'},
		{
			name: '駒場祭2018 Live Codegolf Contest day2',
			id: 'komabasai2018-day2',
			start: new Date('2018-11-24T14:03:00+0900'),
			end: new Date('2018-11-24T15:18:00+0900'),
			description: {
				ja: stripIndent`
				\`\`\`
				与えられた単語列から575を検出せよ
				\`\`\`

				## 入力

				* 50文字の文字列が与えられる。
				* 入力は正規表現 \`^[01]{50}$\` で表現される。
				* 入力の最後には改行が付与される。

				## 出力

				* 入力された数値列の \`1\` の部分を単語の先頭とみなし、 \`0\` を単語の非先頭部分とみなす。
				  * 例えば、 \`1010000100\` は2文字の単語、5文字の単語、3文字の単語が順に並んでいる状態を表す。
				* 上のとおりに解釈した単語列において、5文字の部分単語列、7文字の部分単語列、5文字の部分単語列とこの順に分割することができる起点を \`1\` で表し、それ以外を \`0\` で表した文字列を出力せよ。
				* 出力に含まれる空白文字はすべて無視される。

				## 制約

				* 入力中には上の条件を満たす起点がただ1つ存在する。
				* 入力には \`1\` が15個以上含まれる。

				## 入出力例

				### 入力

				\`\`\`
				10001101001110000000110011101001011011001011111000
				\`\`\`

				### 出力

				\`\`\`
				00000000000000000000000000001000000000000000000000
				\`\`\`
			`,
				en: '',
			},
		},
		{upsert: true}
	);

	mongoose.connection.close();
})();
