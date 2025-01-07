import axios  from "axios";
import React, { useEffect, useState } from "react";

const FetchAPIComponent = () => {
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return
};

export default FetchAPIComponent;