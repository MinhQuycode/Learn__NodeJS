import MyCourse from "../models/Course.js";
import { convertArrToObject } from "../until/mongoose.js";
class searchController {
    // method GET search/keyword?q=
    searchCourses(req, res, next) {
        let words = req.query.q;
        MyCourse.find({ $or: [{ name: { $regex: words, $options: 'i' } }] })
            .then((course) => {
                res.render("search", { course: convertArrToObject(course) });
            })
            .catch((err) => next(err));
    }
}

export default new searchController();