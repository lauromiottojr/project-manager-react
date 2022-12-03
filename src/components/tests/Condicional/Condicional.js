import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        O e-mail do usuário é <p>{userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </>
    )
}

// "&&" vai verificar se tem userEmail então execute as informações entre ()

export default Condicional