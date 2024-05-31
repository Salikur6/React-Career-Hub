import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>OOPS!!!</h2>
            <Link className="btn " to='/'>Go Home</Link>
        </div>
    )
}

export default ErrorPage;