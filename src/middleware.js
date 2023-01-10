import multer from "multer";

export const uploadText = multer({
  dest: "uploads",
});

export const localsMiddleware = (req, res, next) => {
  if (req.session.files === undefined) {
    res.locals.files = [];
  } else {
    res.locals.files = req.session.files;
  }
  return next();
};
