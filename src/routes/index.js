import newsRoute from "./news.js";
import siteRoute from "./site.js";
import courseRoute from "./course.js";
import me from "./me.js"
import search from "./search.js"

function route(app) {
    app.use("/me", me);

    app.use("/courses", courseRoute);

    app.use("/news", newsRoute);

    app.use("/search", search);

    app.use("/", siteRoute);
}

export default route;