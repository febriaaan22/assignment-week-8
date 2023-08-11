export interface Financial {
    id: number;
    type: boolean;
    name: string;
    details: string;
    amount: number;
}

export let finance: Financial[] = [
    {
        id: 1,
        type: false,
        name: "Taylor",
        details: "Concert",
        amount: 13000
    },
    {
        id: 2,
        type: true,
        name: "Selena",
        details: "Rare",
        amount: 28000
    },
    {
        id: 3,
        type: true,
        name: "Anya",
        details: "Gambit",
        amount: 50000
    },
    {
        id: 4,
        type: false,
        name: "Haim",
        details: "Womenmusic",
        amount: 300000
    },
    {
        id: 5,
        type: true,
        name: "Kendall",
        details: "Balenciaga",
        amount: 850000
    },
    {
        id: 6,
        type: false,
        name: "Gracie",
        details: "Conway",
        amount: 920000
    }
];