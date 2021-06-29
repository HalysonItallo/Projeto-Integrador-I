"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/updateProfile", "AuthController.updateProfile").middleware([
  "auth",
]);
Route.get("/deleteProfile/:id", "AuthController.destroy").middleware(["auth"]);
Route.post("/authenticate", "AuthController.authenticate");
Route.get("/getProfile", "AuthController.index").middleware(["auth"]);

Route.post("/sendEmail", "ForgotPasswordController.store");
Route.post("/resetPassword", "ForgotPasswordController.update");
Route.post("/validateToken", "ForgotPasswordController.getToken");

Route.post(
  "/createSchoolCardReport",
  "SchoolReportCardController.store"
).middleware(["auth"]);
Route.get(
  "/showSchoolCardReport",
  "SchoolReportCardController.show"
).middleware(["auth"]);
Route.get(
  "/showAllSchoolCardReport",
  "SchoolReportCardController.index"
).middleware(["auth"]);
Route.post(
  "/updateSchoolCardReport/:id",
  "SchoolReportCardController.update"
).middleware(["auth"]);
Route.get(
  "/deleteSchoolCardReport/:id",
  "SchoolReportCardController.destroy"
).middleware(["auth"]);

Route.get("/showCall", "CallController.show").middleware(["auth"]);
Route.post("/createCall", "CallController.create").middleware(["auth"]);
Route.get("/showAllCall", "CallController.index").middleware(["auth"]);
Route.post("/updateCall/:id", "CallController.update").middleware(["auth"]);
Route.get("/deleteCall/:id", "CallController.destroy").middleware(["auth"]);

Route.post("/createHour", "HourController.create").middleware(["auth"]);
Route.get("/showAllHours", "HourController.index").middleware(["auth"]);
Route.get("/deleteHour/:week_day/:hour", "HourController.destroy").middleware([
  "auth",
]);
Route.post("/updateHour/:week_day/:hour", "HourController.update").middleware([
  "auth",
]);
