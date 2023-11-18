const postgres = require('postgres');

const yourDb = postgres({
    host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
    port                 : 5433,          // Postgres server port[s]
    database             : 'db_rent',            // Name of database to connect to
    username             : 'postgres',            // Username of database user
    password             : '000',  
  })

  module.exports = yourDb;