import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    function handleLogin() {
        const username = "admin";
        if(username === "admin"){
            navigate("/");
        }
        else alert("Invalid username");
    }

    return(
        <>
        <h1>login</h1>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login