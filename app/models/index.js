import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import createModel from "./course.model.js";

const sequelize = new Sequelize(
    dbConfig.name,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
    }
);

const courses = createModel(sequelize, Sequelize);

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    courses
};

export default db;
