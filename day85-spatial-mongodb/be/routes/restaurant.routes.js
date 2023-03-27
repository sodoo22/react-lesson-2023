const { Router } = require("express");
const { getRestaurants } = require("../controllers/restaurant.controller");
const Restaurant = require("../models/restaurants");

const route = Router();

route.get("/restaurants", getRestaurants);

module.exports = route;
