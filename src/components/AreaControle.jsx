import React, { useState } from "react"
import styled from "styled-components"

export default function AreaControle({modoLista}) {
    const logado = true
    const nome = "Felipe"

    const classLi = "text-white flex items-center justify-center"

    const central = (
        <div className="fixed flex flex-col bg-white z-50 top-17 right-9">
            {logado ?
                <>
                    <span>{nome}</span>
                    <button>Atendimentos</button>
                    <button>Sair</button>
                </>
            :
                <a href="/login">Fazer Login</a>
            }
            
        </div>
    )

    const lista = (
        <>
        {logado ? 
            <>
            <li className={classLi}>Atendimentos</li>
            <li className={classLi}>Sair</li>     
            </>
        :
            <>
            <li className={classLi}>Fazer Login</li>
            </>
        }            
        </>
    )

    return <>{modoLista ? lista : central}</>
}