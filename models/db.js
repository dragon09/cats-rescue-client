require('dotenv').config();
var db = require('knex')({	//# knex X
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'l33tdba',
		password: 'yellowpencil',
		database: 'got_database'
	}
});

module.exports = db;
