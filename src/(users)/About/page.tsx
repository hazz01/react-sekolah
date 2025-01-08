import React from "react";
import { useEffect, useState } from "react";

const About = () => {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 3000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <div>
            <h1>Welcome to the About Page</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default About;