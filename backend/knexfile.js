require("dotenv").config();
const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: PGHOST,
      port: +PGPORT,
      user: PGUSER,
      password: PGPASSWORD,
      database: PGDATABASE,
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  },
};
