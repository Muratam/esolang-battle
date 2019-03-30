const assert = require('assert');
const random = require('lodash/random');
const inRange = require('lodash/inRange');

module.exports.getPrecedingIndices = (cellIndex) => {
	assert(cellIndex >= 0);
	assert(cellIndex < 24);

	const x = cellIndex % 4;
	const y = Math.floor(cellIndex / 4);

	const precedingCells = [];

    const dx = [0, 1, 1, 1, 0, -1, -1, -1], dy = [1, 1, 0, -1, -1, -1, 0, 1];
	for (let i = 0; i < dx.length; i += 1){
		let nx = (x + dx[i] + 4)%4, ny = (y + dy[i]+6)%6;
		precedingCells.push(ny * 4 + nx);
	}
	return precedingCells;
};

module.exports.generateInput = () => `${[random(10, 99), random(10, 99)].join('\n')}\n`;

module.exports.isValidAnswer = (input, output) => {
	if (process.env.NODE_ENV !== 'production') {
		return true;
	}

	const [height, width] = input
		.trim()
		.split('\n')
		.map((token) => parseInt(token));
	assert(inRange(height, 10, 100));
	assert(inRange(width, 10, 100));

	const correctOutput = [
		'*'.repeat(width),
		...Array(height - 2)
			.fill()
			.map(() => `*${' '.repeat(width - 2)}*`),
		'*'.repeat(width),
	].join('\n');

	// Trim
	const trimmedOutput = output.toString().trim();

	console.log('info:', {input, correctOutput, output, trimmedOutput});

	return trimmedOutput === correctOutput;
};
