import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Sistema academico</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Pagina 1</Nav.Link>
                        <Nav.Link href="#features">Pagina 2</Nav.Link>
                        <Nav.Link href="#pricing">Carros</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecalho