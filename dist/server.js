"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_routes_1 = require("./routes/categories.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(categories_routes_1.categoriesRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'hello world' });
});
app.post('/courses', (req, res) => {
    const { name } = req.body;
    return res.json({ name });
});
app.listen(3333, () => console.log('Server is running!'));
