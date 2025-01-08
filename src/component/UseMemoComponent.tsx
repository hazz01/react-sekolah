import { useMemo, useState } from "react";

function UseMemoComponent({a, b}: {a: number, b: number}) {

    const sum = useMemo(() => {
        console.log("sum is called");
        return a + b;
    }, [a, b]);

    return <div>The sum is {sum}</div>

}

const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <UseMemoComponent a={2} b={3}/>
        </div>
    );
}

export default Home;