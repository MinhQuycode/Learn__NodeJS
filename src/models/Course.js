import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import mongooseDelete from "mongoose-delete"

const Schema = mongoose.Schema;
const Course = new Schema({
    name: { type: String, default: "hahaha" },
    description: { type: String, default: "Minh quy dep trai" },
    slug: { type: String, slug: "name", unique: true },
}, { timestamps: true });


//Add plugins
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
mongoose.plugin(slug);


const MyCourse = mongoose.model("Course", Course);
export default MyCourse;