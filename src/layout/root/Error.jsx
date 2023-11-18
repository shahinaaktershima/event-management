import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="max-w-2xl mx-auto my-10">
            <h2 className="text-3xl font-bold mb-10">OOOppssssss!!!!!!! there is nothing to show</h2>
            <img className="max-h-96 w-full" src="https://i.ibb.co/QDr6K6M/pexels-polina-zimmerman-3747139.jpg" alt="" />
            <Link className="btn mt-3 btn-secondary" to='/'>Go back</Link>
        </div>
    );
};

export default Error;