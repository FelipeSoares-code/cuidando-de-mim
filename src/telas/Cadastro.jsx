import Botao from "@/components/ui/Botao"
import { Eye, EyeClosed, EyeOff } from "lucide-react"
import { useState } from "react";

export default function Cadastro(){

    const estiloInput = "h-10 p-3 w-full"    

    const [mostrarSenha, setMostrarSenha] = useState(false);

    function verSenha(ocultar) {
        setMostrarSenha(!ocultar);
    }
    return (
        <form id="cadastro" className="bg-blue-50 m-auto mt-15 mb-15 w-3/4 flex flex-col gap-8 p-6 md:p-14 rounded-xl justify-center items-center">
            <h1 className="text-[30px] font-bold m-auto">Cadastro</h1>

            <input id="nome" placeholder="Nome e Sobrenome:" type="text" className={estiloInput} />

            <input id="email" placeholder="E-mail:" type="text" className={estiloInput} />

            <input id="phone" placeholder="Telefone:" type="text" className={estiloInput} />

            <div className="flex flex-col lg:flex-row gap-5 w-full justify-center items-center">
                <input
                    id="senha"
                    placeholder="Senha:"
                    type={mostrarSenha ? "text" : "password"}
                    className={estiloInput}
                />

                <input
                    id="repSenha"
                    placeholder="Repetir Senha:"
                    type={mostrarSenha ? "text" : "password"}
                    className={estiloInput}
                />

                {mostrarSenha ? (
                    <Eye id="verSenha" className="w-30" onClick={() => verSenha(false)} />
                ) : (
                    <EyeOff id="ocultarSenha" className="w-30" onClick={() => verSenha(true)} />
                )}
                
            </div>
            
            <span><Botao id="cadastrar" texto="Cadastrar" /></span>
            
        </form>
    )
}