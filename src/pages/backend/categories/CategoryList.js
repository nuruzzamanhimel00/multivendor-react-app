import React, { useEffect, useCallback, useState } from 'react'
//redux
import { useDispatch } from 'react-redux'
import {setBreadCrumbData} from '../../../store/all-slice.js'

//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


// // prime react 
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// //dammy data
import { ProductService } from '../service/ProductService.js';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';  

export default function OrderList(){
    const dispatch = useDispatch()
    //data table
    const [customers, setCustomers] = useState([]);
    const [loading] = useState(false)
    
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
    const footer = `In total there are ${customers ? customers.length : 0} category types.`;
    //data table end 
    

    // expanded datatable end 
    const updateBreadcrumb = useCallback(() => {
        dispatch(setBreadCrumbData({
            items: [{ label: 'Category' }],
            home: { icon: 'pi pi-home', url: '/admin/dashboard' }
        }));
    }, [dispatch]);

    useEffect(() => {
        updateBreadcrumb();
        ProductService.getCustomersMedium().then((data) => setCustomers(data));
    }, [updateBreadcrumb])

    return (
        <>
            <Container>

            <Row>
                <Col md={12} className="mt-2" >
                    <Card >
                        <Card.Body>
                        <DataTable value={customers} header={header} footer={footer} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                            <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                            <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                            <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
                        </DataTable>
                        </Card.Body>
                    </Card>
                    
                </Col>
          
          </Row>
        </Container>
        </>
    )
}