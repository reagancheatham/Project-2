const db_name = process.env.DB_NAME;
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pw = process.env.DB_PW;

const dbConfig = {
    name: db_name,
    host: db_host,
    user: db_user,
    password: db_pw,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

export default dbConfig;
