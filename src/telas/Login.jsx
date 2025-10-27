import Botao from "@/components/ui/Botao"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useApp } from "@/AppContext"

export default function Login() {
    const estiloInput = "h-11 p-3 w-[90%] lg:w-2/4"

    const { pathPadrao } = useApp()
    const [mostrarSenha, setMostarSenha] = useState(false)

    return (
        <form id="login" className="bg-blue-50 m-auto mt-15 mb-15 w-[90%] md:w-2/3 flex flex-col gap-10 p-6 rounded-xl justify-center items-center">
            <h1 className="text-[30px] font-bold m-auto">Login</h1>

            <input id="email" type="text" placeholder="E-mail" className={estiloInput} />

            <div className={'w-[90%] lg:w-full flex flex-col lg:flex-row items-center justify-center gap-5'}>
                <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" className={`${estiloInput} lg:ml-17 w-full`} />
                <button type="button" className="w-12 flex flex-col justify-center items-center" 
                    onClick={() => setMostarSenha(!mostrarSenha)}
                >
                    {mostrarSenha ? (
                        <Eye />
                    ) : (
                        <EyeOff />
                    )}
                </button>                                
            </div>

            <Link 
                to={pathPadrao + "cadastro"}
                className="text-blue-500 underline hover:text-blue-300 transition-colors duration-200"
            >
                Ainda não possuo conta
            </Link>
            

            <Botao texto="Entrar" />
        </form>
    )
}