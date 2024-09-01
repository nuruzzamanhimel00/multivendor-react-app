import React from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from "../store/counter-slice.js"
import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';
        
import { Button } from 'primereact/button';

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
                <Button label="Check" icon="pi pi-check" />
            </div>
        </>
    )
}

export default TestComponent;