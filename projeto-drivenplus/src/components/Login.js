import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";

import Logo from '../Assets/Logo.png'
import { Container, Input, Button } from '../styles/Style';

export default function Login() {
    const navigate = useNavigate()
    const { setClientInfo } = useContext(UserContext);

    const [loading, setLoading] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        let value = localStorage.getItem('client')
        value = JSON.parse(value)
        if (value) {
            setClientInfo(value)
            value.membership ? navigate('/home') : navigate('/subscriptions')
        }
    })

    function handleLogin(event) {
        event.preventDefault()

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', loginInfo)

        setLoading(!loading)

        promise.then(response => {
            if (response) {
                setClientInfo({
                    ...response.data
                })
                localStorage.setItem('client', JSON.stringify({ ...response.data }))
                response.data.membership ? navigate('/home') : navigate('/subscriptions')
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
                <Input
                    placeholder='E-mail'
                    type='email'
                    name='email'
                    onChange={(e) => {
                        setLoginInfo({
                            ...loginInfo,
                            email: e.target.value
                        })
                    }}
                    required
                    value={loginInfo.email} />
                <Input
                    placeholder='Senha'
                    type='password'
                    name='password'
                    onChange={(e) => {
                        setLoginInfo({
                            ...loginInfo,
                            password: e.target.value
                        })
                    }}
                    required
                    value={loginInfo.password} />
                <Button type="submit">
                    {!loading ?
                        'ENTRAR' :
                        <ThreeDots color="#FFFFFF" width={80} />}
                </Button>
            </form>
            <Link className='link' to="/sign-up">Não possui uma conta? Cadastre-se</Link>
        </Container>
    )
}

