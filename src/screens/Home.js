import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../components/Products'
import products from '../products'
const Home = () => {
  return (
    <div>
        <h5>Latest Products</h5>
        <Row>
           {
            products.map((product,index)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Products product={product}></Products>
                </Col>
            ))
        }   
        </Row>
      
    </div>
  )
}

export default Home