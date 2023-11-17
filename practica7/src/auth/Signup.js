import Input from "../utils/Input";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <h1>Signup</h1>
            <Input label="Email" placeholder="email@domain.com" value={email} setValue={setEmail} />
            <Input label="Password" placeholder="password" value={password} setValue={setPassword} />
            <Input label="Confirm Password" placeholder="password" value={passwordConfirm} setValue={setPasswordConfirm} />
            <button onClick={() => {
                if (password !== passwordConfirm) {
                    console.log("Passwords don't match");
                    return;
                }
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // redirect to home page
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }}>Signup</button>
        </div >
    )
}

export default Signup;