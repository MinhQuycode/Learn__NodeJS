import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import mongooseDelete from "mongoose-delete"
import Inc from "mongoose-sequence";

const AutoIncrement = Inc(mongoose);

const Schema = mongoose.Schema;
const Course = new Schema({
    _id: { type: Number },
    name: { type: String, default: "hahaha" },
    description: { type: String, default: "Minh quy dep trai" },
    slug: { type: String, slug: "name", unique: true },
}, {
    _id: false,
    timestamps: true
});


// Custom query helpers
Course.query.sortable = function(req) {
    if (req.query.hasOwnProperty("_soft")) {
        const isValidType = ["asc", "desc"].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : "desc",
        });
    }
    return this
}



//Add plugins
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
mongoose.plugin(slug);


const MyCourse = mongoose.model("Course", Course);
export default MyCourse;