function Variable({ variable }) {
    return (
        <div>
            <p>{variable.label}</p>
            <p>Value:{variable.lastValue.value}</p>
            <p>Timestamp:{Date(variable.lastValue.timestamp)}</p>
        </div>
    );
}

export default Variable;