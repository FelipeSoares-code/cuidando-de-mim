import Botao from "@/components/ui/Botao"
import { Eye, EyeClosed } from "lucide-react"

export default function Login() {
    const estiloInput = "h-11 p-3 w-[90%] lg:w-2/4"

    return (
        <form id="login" className="bg-blue-50 m-auto mt-15 mb-15 w-[90%] md:w-2/3 flex flex-col gap-10 p-6 rounded-xl justify-center items-center">
            <h1 className="text-[30px] font-bold m-auto">Login</h1>

            <input id="email" type="text" placeholder="email" className={estiloInput} />
            <div className={'w-[90%] lg:w-2/4 flex flex-row items-center justify-center gap-5'}>
                <input type="password" placeholder="senha" className={`${estiloInput} lg:w-full`} />
                <Eye />                
            </div>
            

            <Botao texto="Entrar" />
        </form>
    )
}