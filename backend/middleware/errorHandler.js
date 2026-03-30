export const errorHandler = (err, req, res, next) => {
  // Log full error for debugging
  console.error(err && err.stack ? err.stack : err);

  res.status(500).json({
    error: "Something went wrong",
    details: err.message
  });
};