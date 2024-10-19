import React,{useState, useEffect} from 'react'
import { BreadCrumb } from 'primereact/breadcrumb';
//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//redux
import { useSelector } from 'react-redux'
        

export default function BreadCrumbSection(){
    const breadCrumbData = useSelector((state) => state.all.breadCrumbData);
    const [items, setItems] = useState('');
    const [home, setHome] = useState('');

    useEffect(()=>{ 
      setItems(() => breadCrumbData.items)
      setHome(() => breadCrumbData.home)
    },[breadCrumbData])



    return (
        <Container>
        <Row>
          <Col md={12}>
            <BreadCrumb model={items} home={home} />
          </Col>
        </Row>
        </Container>
    );
}