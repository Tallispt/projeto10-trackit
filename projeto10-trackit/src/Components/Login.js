import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";

import Logo from './Assets/Logo.png'
import { Container } from './Style';

export default function Login() {
    const navigate = useNavigate()
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)

    function handleLogin(event) {
        event.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginInfo)

        setLoading(!loading)


        promise.then(response => {
            if (response) {
                navigate('/hoje')
                console.log(response.data)
            }
        })
            .catch(e => {
                if (e) {
                    alert('Erro ao logar, tente novamente!')
                    setLoginInfo({
                        email: '',
                        password: ''
                    })
                    setLoading(false)
                }
            })
    }

    return (
        <Container loading={loading}>
            <img src={Logo} alt='logo' />
            <form onSubmit={handleLogin}>
                <input
                    placeholder='email'
                    type='email'
                    name='email'
                    onChange={(e) => {
                        setLoginInfo({
                            ...loginInfo,
                            email: e.target.value
                        })
                    }}
                    value={loginInfo.email} />
                <input
                    placeholder='senha'
                    type='password'
                    name='password'
                    onChange={(e) => {
                        setLoginInfo({
                            ...loginInfo,
                            password: e.target.value
                        })
                    }}
                    value={loginInfo.password} />
                <button type="submit">
                    {!loading ?
                        'Entrar' :
                        <ThreeDots color="#FFFFFF" width={80} />}
                </button>
            </form>
            <Link className='link' to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}

