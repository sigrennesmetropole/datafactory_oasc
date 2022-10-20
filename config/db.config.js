module.exports = {
    // HOST: process.env.HOST,
    // USER: process.env.USER,
    // PASSWORD: process.env.PASSWORD,
    // DB: process.env.DB,
    HOST: "localhost",
    USER: "admin",
    PASSWORD: "password",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: process.env.MAX_POOL_SIZE,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };