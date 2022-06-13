import MyCourse from "../models/Course.js";
import { convertObject } from "../until/mongoose.js";
class courseController {
    // method GET /course/:slug
    show(req, res, next) {
        MyCourse.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render("course/show", { course: convertObject(course) });
            })
            .catch(next);
    }

    // method GET /course/create
    create(req, res, next) {
        res.render("course/create");
    }

    // method POST /course/store
    store(req, res, next) {
        const course = new MyCourse(req.body);
        course
            .save()
            .then(() => {
                res.redirect("/");
            })
            .catch(next);
    }

    // method GET /course/id/edit
    edit(req, res, next) {
        MyCourse.findById(req.params.id)
            .then((course) => {
                res.render("course/edit", { course: convertObject(course) });
            })
            .catch(next);
    }

    // method PUT /course/:id
    update(req, res, next) {
        MyCourse.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }

    // method DELETE /course/:id
    delete(req, res, next) {
        MyCourse.delete({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }

    // method DELETE /course/:id/force
    deleteForce(req, res, next) {
        MyCourse.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }

    // method PATCH /course/:id/restore
    restore(req, res, next) {
            MyCourse.restore({ _id: req.params.id })
                .then(() => res.redirect("back"))
                .catch(next);
        }
        // method POST /course/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case "delete":
                MyCourse.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect("back"))
                    .catch(next);
                break;
            case "deleteAll":
                MyCourse.deleteMany({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect("back"))
                    .catch(next);
                break;
            case "restoreAll":
                MyCourse.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect("back"))
                    .catch(next);
                break;
            default:
                res.json({ message: "Action invalid" });
                break;
        }
    }
}

export default new courseController();