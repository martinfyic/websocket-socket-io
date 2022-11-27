require('dotenv').config();

const options = {
	client: 'mysql2',
	connection: {
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	},
};

module.exports = { options };
