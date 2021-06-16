module.exports = {
    development: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL || { user: 'misterjoe',password:'1234', database: 'db_todo_note_together' },
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
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