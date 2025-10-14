import Botao from "@/components/ui/Botao"
import { Eye, EyeClosed, EyeOff } from "lucide-react"

export default function Cadastro(){

    const estiloInput = "h-10 p-3 w-full"

    function verSenha(ocultar) {
        const senha = document.getElementById("senha");
        const repSenha = document.getElementById("repSenha");
        const verSenhaEl = document.getElementById("verSenha");
        const esconderSenhaEl = document.getElementById("esconderSenha");
        if (ocultar) {
            if (senha) senha.type = "password";
            if (repSenha) repSenha.type = "password";
            if (verSenhaEl) verSenhaEl.style.display = "block";
            if (esconderSenhaEl) esconderSenhaEl.style.display = "none";
        }
    }
    return (
        <form id="cadastro" className="bg-blue-50 m-auto mt-15 mb-15 w-3/4 flex flex-col gap-8 p-6 md:p-14 rounded-xl justify-center items-center">
            <h1 className="text-[30px] font-bold m-auto">Cadastro</h1>

            <input id="nome" placeholder="Nome e Sobrenome:" type="text" className={estiloInput} />

            <input id="email" placeholder="E-mail:" type="text" className={estiloInput} />

            <input id="phone" placeholder="Telefone:" type="text" className={estiloInput} />

            <div className="flex flex-col lg:flex-row gap-5 w-full justify-center items-center">
                <input id="senha" placeholder="Senha:" type="password" className={estiloInput} />

                <input id="repSenha" placeholder="Repetir Senha:" type="password" className={estiloInput} />

                <Eye id="verSenha" className="w-30" onClick={() => verSenha(true)} />
                <EyeClosed className="w-30" onClick={() => verSenha(false)} />
            </div>
            <span><Botao id="esconderSenha" texto="Cadastrar" /></span>
        </form>
    )
}