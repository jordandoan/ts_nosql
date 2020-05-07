import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import userRoutes from './userRoutes';
import postRoutes from './postRoutes';
// const express = require("express");
// const mongoose = require("mongoose");
// const userRoutes = require("./userRoutes");
// const postRoutes = require("./postRoutes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// mongoose.connect("mongodb://127.0.0.1/sample", { useNewUrlParser: true, useFindAndModify: false});

export = app;