import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-4">This is error page go back to home page</h1>
            <img className="w-[50%] ml-auto mr-auto rounded-3xl mt-24" src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="" />
            <Link to="/">
            <button  className="btn btn-secondary mt-6 ml-[650px]">Go Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;