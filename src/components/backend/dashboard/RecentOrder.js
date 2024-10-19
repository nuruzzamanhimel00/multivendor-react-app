import React,{useState, useEffect} from 'react'
//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//prime react
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const data = [
    {
        order_id: 1,
        price: 100,
        payment_status: 'Paid',
        order_status: 'Delivered',
        active: 'Active'
    },
    {
        order_id: 1,
        price: 100,
        payment_status: 'Paid',
        order_status: 'Delivered',
        active: 'Active'
    },
    {
        order_id: 1,
        price: 100,
        payment_status: 'Paid',
        order_status: 'Delivered',
        active: 'Active'
    },
];
export default function RecentOrder (){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders([...data]);
    }, []);

    return (
        <>
            <Row>
                <Col md={8}>
                    <h5>Recent Orders</h5>
                </Col>
                <Col md={4} className='text-right'>
                    <a href="/">View All</a>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <div className="card">
                    <DataTable value={orders} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="order_id" header="Order Id"></Column>
                        <Column field="price" header="Price"></Column>
                        <Column field="payment_status" header="Payment Status"></Column>
                        <Column field="order_status" header="Order Status"></Column>
                        <Column field="active" header="Active"></Column>
                    </DataTable>
                </div>
                </Col>
                
            </Row>
        </>
    )
}