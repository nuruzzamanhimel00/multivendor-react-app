import React from 'react'
//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//style
import style from './style/RecentSellerMessage.module.css'

export default function RecentSellerMessage (){
    return (
        <>
            <Row>
                <Col md={8}>
                    <h5>Recent Seller Message</h5>
                </Col>
                <Col md={4} className='text-right'>
                    <a href="/">View All</a>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className={style['recent-seller-message']}>
                        <div className={style.container}>
                            <img src="https://picsum.photos/200" alt="Avatar" />
                            <p>Hello. How are you today?</p>
                            <span className={style['time-right']}>11:00</span>
                        </div>

                        <div className={style.container+" "+style.darker }>
                            <img src="https://picsum.photos/200" alt="Avatar" className={style.right} />
                            <p>Hey! I'm fine. Thanks for asking!</p>
                            <span className={style['time-left']}>11:00</span>
                        </div>
                        <div className={style.container}>
                            <img src="https://picsum.photos/200" alt="Avatar" />
                            <p>Hello. How are you today?</p>
                            <span className={style['time-right']}>11:00</span>
                        </div>

                        <div className={style.container+" "+style.darker }>
                            <img src="https://picsum.photos/200" alt="Avatar" className={style.right} />
                            <p>Hey! I'm fine. Thanks for asking!</p>
                            <span className={style['time-left']}>11:00</span>
                        </div>
                        <div className={style.container}>
                            <img src="https://picsum.photos/200" alt="Avatar" />
                            <p>Hello. How are you today?</p>
                            <span className={style['time-right']}>11:00</span>
                        </div>

                        <div className={style.container+" "+style.darker }>
                            <img src="https://picsum.photos/200" alt="Avatar" className={style.right} />
                            <p>Hey! I'm fine. Thanks for asking!</p>
                            <span className={style['time-left']}>11:00</span>
                        </div>
                        <div className={style.container}>
                            <img src="https://picsum.photos/200" alt="Avatar" />
                            <p>Hello. How are you today?</p>
                            <span className={style['time-right']}>11:00</span>
                        </div>

                        <div className={style.container+" "+style.darker }>
                            <img src="https://picsum.photos/200" alt="Avatar" className={style.right} />
                            <p>Hey! I'm fine. Thanks for asking!</p>
                            <span className={style['time-left']}>11:00</span>
                        </div>

                            
                    </div>
                </Col>
                
            </Row>
        </>
    )
}