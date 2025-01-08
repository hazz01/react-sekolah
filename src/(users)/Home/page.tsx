import React from "react";
import { useState } from "react";

const Home = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Home;