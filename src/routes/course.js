import express from "express";
const router = express.Router();
import courseController from "../controllers/CourseController.js";

router.post("/store", courseController.store);
router.post("/handle-form-action", courseController.handleFormAction);
router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id", courseController.delete);
router.delete("/:id/force", courseController.deleteForce);
router.get("/create", courseController.create);
router.get("/:id/edit", courseController.edit);
router.get("/:slug", courseController.show);

export default router;