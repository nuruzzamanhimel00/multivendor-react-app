import React from 'react'
//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//components
import VerticalChart from '../../components/backend/dashboard/VerticalChart.js'
import RecentSellerMessage from '../../components/backend/dashboard/RecentSellerMessage.js'
const Dashboard = () => {
    return (
        <>
        <Container>
          <Row>
            <Col md={4}>
              <Card  className="my-2">
                <Card.Body>
                  <div className="d-flex justify-content-between my-2">
                    <div className="d-flex flex-column">
                      <div>Orders </div>
                      <div>12</div>
                    </div>
                    <div>
                      <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                  </div>
                  <Card.Text>24 new since last visit</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card  className="my-2">
                <Card.Body>
                  <div className="d-flex justify-content-between my-2">
                    <div className="d-flex flex-column">
                      <div>Orders </div>
                      <div>12</div>
                    </div>
                    <div>
                      <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                  </div>
                  <Card.Text>24 new since last visit</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card  className="my-2">
                <Card.Body>
                  <div className="d-flex justify-content-between my-2">
                    <div className="d-flex flex-column">
                      <div>Orders </div>
                      <div>12</div>
                    </div>
                    <div>
                      <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                  </div>
                  <Card.Text>24 new since last visit</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card  className="my-2">
                <Card.Body>
                  <div className="d-flex justify-content-between my-2">
                    <div className="d-flex flex-column">
                      <div>Orders </div>
                      <div>12</div>
                    </div>
                    <div>
                      <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                  </div>
                  <Card.Text>24 new since last visit</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card  className="my-2">
                <Card.Body>
                  <div className="d-flex justify-content-between my-2">
                    <div className="d-flex flex-column">
                      <div>Orders </div>
                      <div>12</div>
                    </div>
                    <div>
                      <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                  </div>
                  <Card.Text>24 new since last visit</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card  className="my-2">
                <Card.Body>
                  <div className="d-flex justify-content-between my-2">
                    <div className="d-flex flex-column">
                      <div>Orders </div>
                      <div>12</div>
                    </div>
                    <div>
                      <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                  </div>
                  <Card.Text>24 new since last visit</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className='my-4'>
              <Card  className="my-2">
                <Card.Body>
                <VerticalChart />
                </Card.Body>
              </Card>
            
            </Col>
            <Col md={6} className='my-4'>
              <Card  className="my-2">
                <Card.Body>
                  <RecentSellerMessage />
                </Card.Body>
              </Card>
            
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default Dashboard;