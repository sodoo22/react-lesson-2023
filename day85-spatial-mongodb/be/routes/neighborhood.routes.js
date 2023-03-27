const { Router } = require("express");
const { getNeighborhood } = require("../controllers/neighborhood.controller");

// const Restaurant = require("../models/restaurants");

const route = Router();

route.get("/list", getNeighborhood);

module.exports = route;
