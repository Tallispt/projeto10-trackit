import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";


import Logo from './Assets/Logo.png'
import { Container } from './Style';

export default function Signin() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [signinInfo, setSigninInfo] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    })

    function handleSignin(event) {
        event.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', signinInfo)


        setLoading(!loading)


        promise.then(response => {
            if (response) {
                navigate('/')
            }
        })
            .catch(e => {
                if (e) {
                    alert('Erro ao cadastrar, tente novamente!')
                    setSigninInfo({
                        email: '',
                        name: '',
                        image: '',
                        password: ''
                    })
                    setLoading(!loading)
                }
            })
    }


    return (
        <Container loading={loading}>
            <img src={Logo} alt='logo' />
            <form onSubmit={handleSignin}>
                <input
                    placeholder='email'
                    type='email'
                    name='email'
                    onChange={(e) => {
                        setSigninInfo({
                            ...signinInfo,
                            email: e.target.value
                        })
                    }}
                    value={signinInfo.email} />
                <input
                    placeholder='senha'
                    type='password'
                    name='password'
                    onChange={(e) => {
                        setSigninInfo({
                            ...signinInfo,
                            password: e.target.value
                        })
                    }}
                    value={signinInfo.password} />
                <input
                    placeholder='nome'
                    type='text'
                    name='name'
                    onChange={(e) => {
                        setSigninInfo({
                            ...signinInfo,
                            name: e.target.value
                        })
                    }}
                    value={signinInfo.name} />
                <input
                    placeholder='foto'
                    type='text'
                    onChange={(e) => {
                        setSigninInfo({
                            ...signinInfo,
                            image: e.target.value
                        })
                    }}
                    value={signinInfo.image} />
                <button type="submit">
                    {!loading ?
                        'Cadastrar' :
                        <ThreeDots color="#FFFFFF" width={80} />}
                </button>
            </form>
            <Link className='link' to="/">Já tem uma conta? Faça login!</Link>
        </Container>
    )
}