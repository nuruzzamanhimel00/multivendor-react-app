import React from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from "../store/counter-slice.js"

const TestComponent = () =>{



    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()



    return (
        <>
            <div>Hello world! Himel</div>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </>
    )
}

export default TestComponent;