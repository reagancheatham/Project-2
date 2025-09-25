export default (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        courseNumber: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        department: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.INTEGER
        },
        hours: {
            type: Sequelize.INTEGER
        }
    })
};