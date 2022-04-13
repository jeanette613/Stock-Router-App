import { Link } from "react-router-dom"

export default function Nav(props) {
    return <nav aria-label="Main Navigation" role="navigation">
        <ul>
            <li><Link to='./main'>Homepage</Link></li>
            <li><Link to='./stocks'>Dashboard</Link></li>
            <li><Link to='./about'>About</Link></li>
        </ul>
    </nav>
};