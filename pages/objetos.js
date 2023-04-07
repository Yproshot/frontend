import React, { useEffect, useState } from 'react'
import Pagina from '../components/Pagina'

const objeto = () => {

    const carros = [
        { marca: 'chevrolet', modelo:'opala', ano: 1971, cor: 'azul', foto: 'https://motortudo.com/wp-content/uploads/2020/03/Opala-71-Motor-Tudo-32.jpeg'},
        { marca: 'ford', modelo:'ka', ano: 2003, cor: 'vermelho', foto: ''},
        { marca: 'bmw', modelo:'320i', ano: 1991, cor: 'beje', foto: ''}

    ]


    return (
        <Pagina titulo= "objetos">
            {carros.map(item => (
                <div>
                    <img src={item.foto} style={{width: '18rem' }}></img>
                    <h1>{item.marca}</h1>
                    <p>{item.ano}</p>
                    <p>{item.modelo}</p>
                    <p>{item.cor}</p>
                </div>
            ))}
        </Pagina>
        )
            }
export default objeto
