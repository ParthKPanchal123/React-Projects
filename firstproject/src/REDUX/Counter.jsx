// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment , decrement} from './Action';

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(increment(5))}>Increment</button>
            <button onClick={() => dispatch(decrement(10))}>Decrement</button>
        </>
    );
}
