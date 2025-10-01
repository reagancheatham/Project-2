export default (sequelize, Sequelize) => {
    const Course = sequelize.define(
        "course",
        {
            courseNumber: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            department: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            level: {
                type: Sequelize.INTEGER,
            },
            hours: {
                type: Sequelize.INTEGER,
            },
        },
        {
            timestamps: false,
        }
    );

    return Course;
};
