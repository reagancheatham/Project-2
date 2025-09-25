var express = require("express");
var router = express.Router();

function validateClassInput(data) {
    let errors = {};
    //department
    if (!data.Dept || typeof data.Dept !== "string" || data.Dept.trim() === "") {
        errors.Dept = "Department is required";
    }
    //course number
    if (!data.CourseNum || typeof data.CourseNum !== "string" || data.CourseNum.trim() === "") {
        errors.CourseNum = "Course number is required";
    }
    //Level
    if (!data.Level || typeof data.Level !== "string" || data.Level.trim() === "") {
        errors.Level = "Level is required";
    }
    //hours
    if (!data.Hours || typeof data.Hours !== "string" || data.Hours.trim() === "") {
        errors.Hours = "Hours is required";
    }
    //course name
    if (!data.CourseName || typeof data.CourseName !== "string" || data.CourseName.trim() === "") {
        errors.CourseName = "Course name is required";
    }
    //
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}

/* ADD class listing. */
router.post("/", function(req, res, next) {
    var class = req.body;
    let errorMessage = validateClassInput(class);
    if (errorMessmessage.length > 2
})