import courses from "../controllers/course.controller.js";
import express from "express";

export default (app) => {
    const router = express.Router();

    // Create a new course
    router.post("/", courses.create);
    
    // Retrieve all courses
    router.get("/", courses.findAll);

    // Retrieve a course with a courseNumber
    router.get("/:courseNumber", courses.find);

    // Update a course with a courseNumber
    router.put("/:courseNumber", courses.update);

    // Delete a course with a courseNumber
    router.delete("/:courseNumber", courses.destroy);

    // Delete all courses
    router.delete("/", courses.destroyAll);

    app.use('/project-2/course-t6', router);
};
