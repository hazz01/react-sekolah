import React from 'react';

type TItems = {
    id: number;
    name: string;
};

const items: TItems[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

const MyClassComponent: React.FC = () => {
    return (
        <div>
            <h1>Hello, I'm a Functional Component!</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyClassComponent;
