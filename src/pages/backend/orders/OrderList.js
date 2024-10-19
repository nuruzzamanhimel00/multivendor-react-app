import React, { useEffect, useCallback, useState, useRef } from 'react'
//redux
import { useDispatch } from 'react-redux'
import {setBreadCrumbData} from '../../../store/all-slice.js'

//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


// prime react 
//dammy data
import {ProductService} from '../service/ProductService.js'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';   
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';


import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";

export default function OrderList(){
    const dispatch = useDispatch()
    //expanded datatable 
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const [loading] = useState(false)
    const toast = useRef(null);
    const onRowExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    };

    const onRowCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    };

    // const expandAll = () => {
    //     let _expandedRows = {};

    //     products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    //     setExpandedRows(_expandedRows);
    // };

    // const collapseAll = () => {
    //     setExpandedRows(null);
    // };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    };

    const statusOrderBodyTemplate = (rowData) => {
        return <Tag value={rowData.status.toLowerCase()} severity={getOrderSeverity(rowData)}></Tag>;
    };

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} width="64px" className="shadow-4" />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getProductSeverity(rowData)}></Tag>;
    };

    const getProductSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const getOrderSeverity = (order) => {
        switch (order.status) {
            case 'DELIVERED':
                return 'success';

            case 'CANCELLED':
                return 'danger';

            case 'PENDING':
                return 'warning';

            case 'RETURNED':
                return 'info';

            default:
                return null;
        }
    };

    const allowExpansion = (rowData) => {
        // console.log('rowData',rowData)
        return rowData.orders.length > 0;
    };

    const renderHeader = () => {
        return (
          <div className="d-flex justify-content-between">
            <div>
              <Button
                label="Create"
                icon="pi pi-plus"
                rounded
                loading={loading}
                className="rounded-pill me-2"
            
                size="small"
              />
              <Button
                label="PDF"
                icon="pi pi-file-pdf"
                severity="success"
                rounded
                loading={loading}
                className="rounded-pill me-2"
            
                size="small"
              />
              <Button
                label="Excel"
                icon="pi pi-file-excel"
                severity="warning"
                rounded
                loading={loading}
                className="rounded-pill me-2"
            
                size="small"
              />
              <Button
                label="Reload"
                icon="pi pi-refresh"
                severity="help"
                rounded
                loading={loading}
                className="rounded-pill me-2"
            
                size="small"
              />
              <Button
                label="Delete"
                icon="pi pi-trash"
                severity="danger"
                rounded
                loading={loading}
                className="rounded-pill me-2"
                size="small"
            
              />
              {/* <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
              <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text /> */}
            </div>
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText
            
                placeholder="Keyword Search"
              />
            </IconField>
          </div>
        );
      };
      const header = renderHeader();
    const footer = `In total there are ${products ? products.length : 0} category types.`;
    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}   >
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem' }} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    };



    // expanded datatable end 
    const updateBreadcrumb = useCallback(() => {
        dispatch(setBreadCrumbData({
            items: [{ label: 'Orders' }],
            home: { icon: 'pi pi-home', url: '/admin/dashboard' }
        }));
    }, [dispatch]);

    useEffect(() => {
        updateBreadcrumb();
        ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data));
    }, [updateBreadcrumb])

    return (
        <>
            <Container>

            <Row>
                <Col md={12} className="mt-2" >
                    <Card >
                        <Card.Body>
                    
                        <Toast ref={toast} />
                            <DataTable value={products} header={header} footer={footer} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                                    onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} rowExpansionTemplate={rowExpansionTemplate}
                                    dataKey="id" tableStyle={{ minWidth: '60rem' }}>
                                <Column expander={allowExpansion} style={{ width: '5rem' }} />
                                <Column field="name" header="Name" sortable />
                                <Column header="Image" body={imageBodyTemplate} />
                                <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                                <Column field="category" header="Category" sortable />
                                <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
                                <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
                            </DataTable>
                        </Card.Body>
                    </Card>
                    
                </Col>
          
          </Row>
        </Container>
        </>
    )
}