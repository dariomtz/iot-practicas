import { useState } from "react";

function Input({ label, placeholder, value, setValue }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <label>{label}</label>
            <input
                type={placeholder === "password" && !showPassword ? "password" : "text"}
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {label === "Password" && (
                <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide password" : "Show password"}
                </button>
            )}
        </div>
    );
}

export default Input;