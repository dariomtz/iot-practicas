import React, { useState, useEffect } from "react";
import Variable from "./Variable";

function Device({ device }) {
    const [variables, setVariables] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                device.variables,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Auth-Token": "BBFF-GtNc8wTktPuSc4bFBVAnjFJgXx4CFi",
                    },
                }
            );
            const data = await response.json();
            setVariables(data.results);
        };
        getData();
    }, [device.variables]);
    return (
        <div>
            <h1>{device.label}</h1>
            <h2>Variables</h2>
            <ul>
                {variables.map((variable) => (
                    <li key={variable.id}>
                        <Variable variable={variable} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Device;