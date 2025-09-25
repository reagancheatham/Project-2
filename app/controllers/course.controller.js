import db from "../models";

const Courses = db.courses;
const Op = db.Sequelize.Op;

const courses = {
    create: (req, res) => {
        if (!req.body.title) {
            res.status(400).send({
                message: "Content can not be empty!",
            });

            return;
        }

        const course = {
            courseNumber: req.params.courseNumber,
            name: req.body.name,
            department: req.body.department,
            description: req.body.description,
            level: req.body.level,
            hours: req.body.hours,
        };

        Courses.create(course)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.status(500).send({
                    message:
                        err.message ||
                        "Some error occurred while creating the course.",
                });
            });
    },
    findAll: (req, res) => {
        const courseNumber = req.query.courseNumber;
        let condition = courseNumber
            ? {
                  courseNumber: {
                      [Op.like]: `%${courseNumber}`,
                  },
              }
            : null;

        Courses.findAll({ where: condition })
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.status(500).send({
                    message:
                        err.message ||
                        "Some error occurred while retrieving lessons.",
                });
            });
    },
    find: (req, res) => {
        const courseNumber = req.params.courseNumber;

        Courses.findByPk(courseNumber)
            .then((data) => {
                if (data) res.send(data);
                else {
                    res.status(404).send({
                        message: `Cannot find course with courseNumber=${courseNumber}.`,
                    });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: `Error retrieving course with id=${courseNumber}.`,
                });
            });
    },
    update: (req, res) => {
        const courseNumber = req.params.courseNumber;

        Courses.update(req.body, {
            where: { courseNumber: courseNumber },
        })
            .then((num) => {
                if (num == 1) {
                    res.send({
                        message: "Course was updated successfully.",
                    });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: `Error updating course with courseNumber=${courseNumber}`,
                });
            });
    },
    destroy: (req, res) => {
        const courseNumber = req.params.courseNumber;

        Courses.destroy({
            where: { courseNumber: courseNumber },
        })
            .then((num) => {
                if (num == 1) {
                    res.send({
                        message: "Course was deleted successfully.",
                    });
                } else {
                    res.send({
                        message: `Cannot delete course with courseNumber=${courseNumber}. Course may not be in the database!`,
                    });
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: `Could not delete course with courseNumber=${courseNumber}.`,
                });
            });
    },
    destroyAll: (req, res) => {
        Courses.destroy({
            where: {},
            truncate: false,
        })
            .then((nums) => {
                res.send({
                    message: `${nums} courses were deleted successfully.`,
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message:
                        err.message ||
                        "Some error occurred while removing all courses.",
                });
            });
    },
};

export default courses;
