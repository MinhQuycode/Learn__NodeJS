import MyCourse from "../models/Course.js";
import { convertArrToObject } from "../until/mongoose.js";
class meController {
    // method GET me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([MyCourse.find({}), MyCourse.countDocumentsDeleted()])
            .then(([course, deletedCount]) => {
                res.render("me/stored-courses", { deletedCount, course: convertArrToObject(course) });
            })
            .catch((err) => next(err));

        // MyCourse.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount)
        //     })
        //     .catch(() => {})

        // MyCourse.find({})
        //     .then((course) => {
        //         res.render("me/stored-courses", { course: convertArrToObject(course) });
        //     })
        //     .catch((err) => next(err));
    }
    trashCourses(req, res, next) {
        MyCourse.findDeleted({})
            .then((course) => {
                res.render("me/trash-courses", { course: convertArrToObject(course) });
            })
            .catch((err) => next(err));
    }
}

export default new meController();