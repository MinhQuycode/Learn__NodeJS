class NewsController {
  // method GET /news
  index(req, res) {
    res.render("news");
  }

  // method GET /news/:slug
  show(req, res) {
    res.send("news detail");
  }
}

export default new NewsController();
