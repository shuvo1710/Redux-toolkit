"use client"
import React from 'react';

const Counter = ({count, handleIncrement, handleDecrement}: {
    count: number,
    handleIncrement: any,
    handleDecrement: any
}) => {
    return (
        <div className="card w-[500px] my-5">
            <h1 className="text-center">{count}</h1>
            <div className="flex justify-between pt-5">
                <button className="border p-2 rounded cursor-pointer bg-green-400 text-white"
                        onClick={handleIncrement}>Increment
                </button>
                <button className="border p-2 rounded cursor-pointer bg-red-400 text-white"
                        onClick={handleDecrement}>Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;