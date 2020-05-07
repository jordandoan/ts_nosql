"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const postRoutes_1 = __importDefault(require("./postRoutes"));
// const express = require("express");
// const mongoose = require("mongoose");
// const userRoutes = require("./userRoutes");
// const postRoutes = require("./postRoutes");
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hi");
});
app.use("/users", userRoutes_1.default);
app.use("/posts", postRoutes_1.default);
mongoose_1.default.connect("mongodb://127.0.0.1/sample", { useNewUrlParser: true, useFindAndModify: false });
app.listen(5000, () => {
    // tslint:disable-next-line:no-console
    console.log("Server running");
});
