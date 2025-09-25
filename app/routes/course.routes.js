import courses from "../controllers/course.controller.js";
import express from "express";

export default (app) => {
    const router = express.Router();

    // Create a new course
    router.post("/courses/", courses.create);
    
    // Retrieve all courses
};
