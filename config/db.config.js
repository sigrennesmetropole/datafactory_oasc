module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_DATABASE,
    dialect: "postgres",
    pool: {
      max: process.env.MAX_POOL_SIZE,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };