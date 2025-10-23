import React, { useState } from "react"
import styled from "styled-components"

export default function AreaControle({modoLista}) {
    const [logado, setLogado] = useState(true)
    const nome = "Felipe Silva Soares"

    const classLi = "text-white flex items-center justify-center"
    const classButton = "text-[var(--color-azul-padrao)] hover:underline"

    const desconectar = () => {
        setLogado(!logado)
    }

    const central = (
        <div className="fixed flex flex-col p-5 items-center justify-center rounded-md bg-blue-50 z-50 top-17 right-9">
            {logado ?
                <>
                    <h1 className="font-semibold">{nome}</h1>
                    <hr className="w-full mb-5" />
                    <button className={`${classButton}`}>Atendimentos</button>
                    <button 
                        className={`${classButton} hover:text-red-500`}
                        onClick={desconectar}
                    >
                        Sair
                    </button>
                </>
            :
                <a href="/login" className={`${classButton}`}>Fazer Login</a>
            }
            
        </div>
    )

    const lista = (
        <>
        {logado ? 
            <>
            <li className={classLi}>Atendimentos</li>
            <li className={classLi} onClick={desconectar}>Sair</li>     
            </>
        :
            <>
            <li className={classLi}><a href="/login">Fazer Login</a></li>
            </>
        }            
        </>
    )

    return <>{modoLista ? lista : central}</>
}