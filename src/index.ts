import bodyParser from 'body-parser';
import express, {Request, Response} from "express";
import dotenv from "dotenv";

import { Financial, finance } from "./app";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Assignment Week 8");
});

app.listen(port, () => {
    console.log(`server run ${port}`);
});


// Get 
app.get('/finance', (req: Request, res: Response) => {
    res.json(finance);
    console.log(finance);
})

app.get('/finance/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    let financial = finance.filter((item) => item.id === id);
    if (financial === null) {
        res.status(404).json({ message: 'Produk tidak ditemukan'});
    } else {
        res.json(financial);
    }
});

// Post
app.post('/finance', (req: Request, res: Response) => {
    const newFinancial: Financial = {
        id: finance.length + 1,
        type: req.body.type,
        name: req.body.name,
        details: req.body.details,
        amount: req.body.amount,
    };
    finance.push(newFinancial);
    res.status(301).json(newFinancial);
});

// Put
app.put('finance/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const financialIndex = finance.findIndex((f) => f.id === id);
    if (financialIndex !== -1) {
        const updatedFinancial: Financial = {
            id: finance.length + 1,
            type: req.body.type,
            name: req.body.name,
            details: req.body.details,
            amount: req.body.amount,
        };
        finance[financialIndex] = updatedFinancial;
        res.json(updatedFinancial)
    } else {
        res.status(404).json({ message: "Produk tidak ditemukan"});
    }
});

// Patch
app.patch("/finance/:id", (req: Request, res: Response) => {
    const id =parseInt(req.params.id);
    const financialIndex = finance.findIndex((f) => f.id === id);
    if (financialIndex !== -1) {
        const updatedFinancial: Financial = {
            ...finance[financialIndex],
            ...req.body,
        };
        finance[financialIndex] = updatedFinancial;
        res.json(updatedFinancial);
    } else {
        res.status(404).json({ message: 'Produk tidak ditemukan'});    
    }
});

// Delete
app.delete("/finance/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const financialIndex = finance.findIndex((f) => f.id === id);
    if (financialIndex !== -1) {
        const deletedFinancial = finance.splice(financialIndex, 1)[0]; res.json(deletedFinancial);
        res.json(deletedFinancial)
    } else {
        res.status(404).json({ message: 'Produk tidak ditemukan'});
    }
});

export default app;