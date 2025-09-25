import db from '../models';

const Courses = db.courses;
const Op = db.Sequelize.Op;

export function create(req, res) {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });

        return;
    }

    const course = {
        courseNumber: req.params.courseNumber,
        name: req.body.name,
        department: req.body.department,
        description: req.body.description,
        level: req.body.level,
        hours: req.body.hours
    };

    Courses.create(course)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Some error occurred while creating the course.'
        });
    });
};