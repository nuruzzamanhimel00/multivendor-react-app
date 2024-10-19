import React, { useEffect, useCallback } from 'react'
//redux
import { useDispatch } from 'react-redux'
import {setBreadCrumbData} from '../../../store/all-slice.js'

export default function OrderList(){
    const dispatch = useDispatch()


    const updateBreadcrumb = useCallback(() => {
        dispatch(setBreadCrumbData({
            items: [{ label: 'Orders' }],
            home: { icon: 'pi pi-home', url: '/admin/dashboard' }
        }));
    }, [dispatch]);

    useEffect(() => {
        updateBreadcrumb();
    }, [updateBreadcrumb])

    return (
        <>
            <h1>Order List</h1>
        </>
    )
}