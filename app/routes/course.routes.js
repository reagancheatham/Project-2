import courses from "../controllers/course.controller.js";
import express from "express";

export default (app) => {
    const router = express.Router();

    // Create a new course
    router.post("/courses", courses.create);
    
    // Retrieve all courses
    router.get("/courses", courses.findAll);

    // Retrieve a course with a courseNumber
    router.get("/courses/:courseNumber", courses.find);

    // Update a course with a courseNumber
    router.put("/courses/:courseNumber", courses.update);

    // Delete a course with a courseNumber
    router.delete("/courses/:courseNumber", courses.destroy);

    // Delete all courses
    router.delete("/courses", courses.destroyAll);

    app.use('/project-2/courses', router);
};
