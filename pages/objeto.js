import React, { useEffect, useState } from 'react'
import Pagina from '../components/Pagina'
import Button from 'react-bootstrap/Button';
import { Row, Col, Card, Container, CardGroup } from 'react-bootstrap';

const objeto = () => {

const carros = [
    { id: 1, marca: 'GM', modelo: 'Opala', ano: 1982, foto: 'https://www.pastorecc.com.br/site/photos/cars/974/bg_nuIPmYqoehpdB15TW9iZ.jpeg'},
    { id: 3, marca: 'VW', modelo: 'Gol', ano: 2020, foto: 'https://i.ytimg.com/vi/FwmiE7r_wcY/maxresdefault.jpg' },
    { id: 4, marca: 'Toyota', modelo: 'Supra', ano: 2016, foto: 'https://www.motortrend.com/uploads/sites/5/2019/05/2020-Toyota-GR-Supra-144.jpg?fit=around%7C875:492' },
    { id: 5, marca: 'Tesla', modelo: 'Model S', ano: 2018, foto: 'https://cdn.motor1.com/images/mgl/LnAej/s1/tesla-come-va-lultima-versione-dellautopilot-video.jpg' },
    { id: 6, marca: 'Fiat', modelo: 'Marea', ano: 1995, foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fiat_Marea_Sedan_%2844213257002%29.jpg/300px-Fiat_Marea_Sedan_%2844213257002%29.jpg' },
  ]

  return (
    <Pagina titulo= "Carros" >
        {carros.map(item => (


            <Row md={4} xd={4} style={{width: '100%'}}>
                <Col md={4} className='g-4'>
                
                <Card style={{ width: '12rem'}} className=' mt-2 mb-2'>
                
                <Card.Img variant="top" src={item.foto} />
                <Card.Body>
                    <Card.Title>{item.modelo}-{item.marca}</Card.Title>
                    <Card.Text>
                    {item.ano}
                    </Card.Text>
                    <Button variant="primary">saiba mais...</Button>
                </Card.Body>
                </Card>
                
                </Col>
            </Row>
            ))}
    </Pagina>
    )
        }


        
export default objeto

