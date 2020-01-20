// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault : true,
    connection: {
      // location and name of database
      filename: './data/users.db3'
    },
    migrations : {
      // location of migrations for the database 
      directory: './data/migrations'
    },
    seeds: {
      // location of seed data for the database
      directory: './data/seeds'
    }
  }
};
