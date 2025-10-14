

export default function Cadastro(){

    return (
        <form id="cadastro" className="m-auto mt-15 w-3/4 flex flex-col gap-8 border-solid-var(--color-azul-padrao)">
            <h1>Cadastro</h1>

            <input id="nome" placeholder="Nome e Sobrenome:" type="text" />

            <input id="email" placeholder="E-mail:" type="text" />

            <input id="phone" placeholder="Telefone:" type="text" />

            <input id="senha" placeholder="Senha:" type="text" />

            <input id="repSenha" placeholder="Repetir Senha:" type="text" />

            <button>Cadastrar</button>
        </form>
    )
}