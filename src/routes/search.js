import express from "express";
const router = express.Router();
import searchController from "../controllers/SearchController.js";

router.get("/keyword", searchController.searchCourses);

export default router;