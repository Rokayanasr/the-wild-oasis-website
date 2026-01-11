"use client";

import React, { useState } from "react";

function Counter({users}) {
    console.log(users)
    const [count, setCount] = useState(0);
    return (
        <div>
            <button
                className="bg-amber-300"
                onClick={() => {
                    setCount((c) => c + 1);
                }}
            >
                Click counter
            </button>
            <h1>{count}</h1>
        </div>
    );
}

export default Counter;
