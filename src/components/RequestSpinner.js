import React from 'react'

import { ProgressSpinner } from 'primereact/progressspinner';
//redux
import {useSelector} from 'react-redux'
        
const RequestSpinner = () =>{
    const isRequestSpinner = useSelector((state) => state.all.isRequestSpinner)
return (
    <>
    {
        isRequestSpinner && <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
    }
      
    </>
)
}

export default RequestSpinner;