
import React,{useRef, useEffect} from  'react'
import { Toast } from 'primereact/toast';
//redux
import { useSelector, useDispatch } from 'react-redux'

import {removeToaster} from "../store/toaster-slice.js"

const ToasterNotification = () =>{
    const toast = useRef(null);
    const toasters = useSelector((state) => state.toaster)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(toasters.length > 0){
            toasters.forEach((toaster)=>{
                toast.current.show(toaster);
                dispatch(removeToaster(toaster.id))
            })
        }
    
    },[toasters, dispatch])

    return (
        <Toast ref={toast} />
    );
}

export default ToasterNotification;
