import React from 'react'
import { Button } from 'primereact/button'; 
<div className="card flex justify-content-center">
<Button label="Check" icon="pi pi-check" />
</div>

const Home = () =>{
    return (
        <>
            <h1>Home page</h1>
            <Button label="Check" icon="pi pi-check" />
        </>
    );
}

export default Home;