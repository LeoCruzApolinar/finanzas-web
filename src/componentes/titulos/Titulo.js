import React from 'react'
import Estilos from './Style.module.css'

const Titulo = (props) => {
    return (
        <section className={Estilos.Contenedor}>
            <div className={Estilos.LineaI}/>
            <h2 className ={Estilos.Titulo}>{props.titulo}</h2>
            <div className={Estilos.LineaD}/>
        </section>
    )
}

export default Titulo
