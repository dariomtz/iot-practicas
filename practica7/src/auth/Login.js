import Input from "../utils/Input";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            <Input label="Email" placeholder="email@domain.com" value={email} setValue={setEmail} />
            <Input label="Password" placeholder="password" value={password} setValue={setPassword} />
            <button onClick={() => {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }}>Login</button>
        </div>
    )
}

export default Login;