import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name);
        console.log(`O usuário ${name} foi cadastrado com a senha: ${password}`);
    }

    const [name, setName] = useState('Lauro') //valor default
    const [password, setPassword] = useState()

    return (
        <>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form