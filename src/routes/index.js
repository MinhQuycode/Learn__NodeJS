import newsRoute from "./news.js";
import siteRoute from "./site.js";

function route(app) {
  app.use("/news", newsRoute);

  app.get("/search", siteRoute);

  app.get("/", siteRoute);
}

export default route;
