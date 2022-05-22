class SiteController {
  // method GET /
  index(req, res) {
    res.render("Home");
  }

  // method GET /search
  search(req, res) {
    res.render("search");
  }
}

export default new SiteController();
