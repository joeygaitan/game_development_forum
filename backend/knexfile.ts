require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql',
        connection: process.env.DATABASE_URL || {host : '127.0.0.1', user: process.env.NAME,password: process.env.PASSWORD, database: process.env.DBNAME },
        migrations: {
            extension: "ts",
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            extension: "ts",
            directory: path.join(__dirname, 'db', 'seeds')
        }
    }
    // ,production: {
    //   client: 'pg',
    //   connection: {
    //     database: process.env.RDS_DB,
    //     host: process.env.RDS_HOST,
    //     user: process.env.RDS_USER,
    //     password: process.env.RDS_PASSWORD,
    //     port: process.env.RDS_PORT
    //   },
    //   migrations: {
    //       directory: (__dirname, 'db', 'migrations')
    //     },
    //   seeds: {
    //       directory: (__dirname, 'db', 'seeds', 'production')
    //     },
    // },
}