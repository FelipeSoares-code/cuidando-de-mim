import React from "react"

export default function AreaControle() {
    const logado = false
    const nome = "Felipe"

    return(
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
}