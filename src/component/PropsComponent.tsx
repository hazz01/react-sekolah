import React from "react";

type TProps = {
    name: string;
};

const WelcomeMesage = (props: TProps) => {
    return <h1>Hello, {props.name}!</h1>;
};


export default WelcomeMesage;