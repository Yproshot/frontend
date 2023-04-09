import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

const Pagina = (props) => {

  return (
    <>
      <Cabecalho />
      <div className='bg-secondary py-3 text-white text-center mb-3'>
        <Container>
          <h1 style={{display: "inline-block", marginRight: "53%"}}>{props.titulo}</h1>
        </Container>
      </div>

      {props.children}


    </>
  )
}

export default Pagina