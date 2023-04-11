"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRoutes = exports.categoriesRoutes = void 0;
const express_1 = require("express");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
const defaultRoutes = (0, express_1.Router)();
exports.defaultRoutes = defaultRoutes;
const categories = [];
categoriesRoutes.post('/categories', (req, res) => {
    const { name, description } = req.body;
    categories.push({
        name,
        description,
    });
    return res.status(201).send();
});
