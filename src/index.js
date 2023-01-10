import express from "express";
import path from "path";
import bodyParser from "body-parser";
import router from "./router";
import { localsMiddleware } from "./middleware";
import session from "express-session";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(
  session({
    secret: "hi",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(localsMiddleware);
app.use("/", router);
// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
