export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    error: "Something went wrong",
    details: err.message
  });
};