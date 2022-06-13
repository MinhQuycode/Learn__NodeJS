import MyCourse from "../models/Course.js";
import { convertArrToObject, convertObject } from "../until/mongoose.js";
class SiteController {
    // method GET /
    index(req, res, next) {
        //Cách viết callback
        /* MyCourse.find({}, function (err, courses) {
          if (!err) {
            res.json(courses);
          } else {
            next(err);
          }
        }); */

        //Cách viết promise
        MyCourse.find({})
            .then((course) => {
                //Convert sang object thường
                res.render("home", { course: convertArrToObject(course) });
            })
            .catch((err) => next(err));
    }

}

export default new SiteController();