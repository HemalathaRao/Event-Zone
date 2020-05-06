const express = require("express");
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} = require("../controllers/reviews");

const Review = require("../models/Review");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Review, {
      path: "college",
      select: "name description"
    }),
    getReviews
  )
  .post(protect, authorize("student", "admin"), addReview);

router
  .route("/:id")
  .get(getReview)
  .put(protect, authorize("student", "admin"), updateReview)
  .delete(protect, authorize("student", "admin"), deleteReview);

module.exports = router;
