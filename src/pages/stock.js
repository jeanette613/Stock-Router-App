import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stocks from '../data.js'
import { Link } from "react-router-dom";

export default function Stock() {
    const { symbol } = useParams()
    const [stock, setStock] = useState({});
    const getData = () => {
        const stockSymb = stocks.find(element => element.symbol === symbol)
        setStock(stockSymb)

    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="stocks">
            <h1>Stocks List</h1>
            <h2>{stock.name}</h2>
        </div>
    );
};
