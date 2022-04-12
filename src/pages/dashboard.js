import { Link } from "react-router-dom"
import stocks from "../data"

export default function Dashboard(props) {
    return <div className="stocks">
        {stocks.map((company) => {
            const { name, symbol } = company;
            return (
                <Link to={`/stocks/${symbol}`}>
                    <h2>{name}</h2>
                </Link>
            );
        })}
    </div>
};