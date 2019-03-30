const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.Promise = global.Promise;

(async () => {
	await mongoose.connect('mongodb://localhost:27010/esolang-battle');

	await User.updateOne(
		{email: 'wass80@twitter.com'},
		{admin: true}
	);

	mongoose.connection.close();
})();
