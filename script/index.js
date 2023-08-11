"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5001;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Assignment Week 8");
});
app.listen(port, () => {
    console.log(`server run ${port}`);
});
// Get 
app.get('/finance', (req, res) => {
    res.json(app_1.finance);
    console.log(app_1.finance);
});
app.get('/finance/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let financial = app_1.finance.filter((item) => item.id === id);
    if (financial === null) {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
    else {
        res.json(financial);
    }
});
// Post
app.post('/finance', (req, res) => {
    const newFinancial = {
        id: app_1.finance.length + 1,
        type: req.body.type,
        name: req.body.name,
        details: req.body.details,
        amount: req.body.amount,
    };
    app_1.finance.push(newFinancial);
    res.status(301).json(newFinancial);
});
// Put
app.put('finance/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const financialIndex = app_1.finance.findIndex((f) => f.id === id);
    if (financialIndex !== -1) {
        const updatedFinancial = {
            id: app_1.finance.length + 1,
            type: req.body.type,
            name: req.body.name,
            details: req.body.details,
            amount: req.body.amount,
        };
        app_1.finance[financialIndex] = updatedFinancial;
        res.json(updatedFinancial);
    }
    else {
        res.status(404).json({ message: "Produk tidak ditemukan" });
    }
});
// Patch
app.patch("/finance/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const financialIndex = app_1.finance.findIndex((f) => f.id === id);
    if (financialIndex !== -1) {
        const updatedFinancial = Object.assign(Object.assign({}, app_1.finance[financialIndex]), req.body);
        app_1.finance[financialIndex] = updatedFinancial;
        res.json(updatedFinancial);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
// Delete
app.delete("/finance/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const financialIndex = app_1.finance.findIndex((f) => f.id === id);
    if (financialIndex !== -1) {
        const deletedFinancial = app_1.finance.splice(financialIndex, 1)[0];
        res.json(deletedFinancial);
        res.json(deletedFinancial);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
exports.default = app;
