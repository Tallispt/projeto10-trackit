import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";

import { Container } from './Style';

export default function Signup() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [signupInfo, setSignupInfo] = useState({
        email: '',
        name: '',
        cpf: '',
        password: ''
    })

    function handleSignup(event) {
        event.preventDefault()

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', signupInfo)


        setLoading(!loading)

        promise.then(response => {
            if (response) {
                navigate('/')
            }
        })
            .catch(e => {
                if (e) {
                    alert('Erro ao cadastrar, tente novamente!')
                    console.log(e)
                    setSignupInfo({
                        email: '',
                        name: '',
                        cpf: '',
                        password: ''
                    })
                    setLoading(false)
                }
            })
    }


    return (
        <Container loading={loading}>
            <form onSubmit={handleSignup}>
                <input
                    placeholder='Nome'
                    type='text'
                    name='name'
                    onChange={(e) => {
                        setSignupInfo({
                            ...signupInfo,
                            name: e.target.value
                        })
                    }}
                    value={signupInfo.name} />
                <input
                    placeholder='CPF'
                    type='number'
                    name='cpf'
                    onChange={(e) => {
                        setSignupInfo({
                            ...signupInfo,
                            cpf: e.target.value.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
                        })
                    }}
                    value={signupInfo.image} />
                <input
                    placeholder='E-mail'
                    type='email'
                    name='email'
                    onChange={(e) => {
                        setSignupInfo({
                            ...signupInfo,
                            email: e.target.value
                        })
                    }}
                    value={signupInfo.email} />
                <input
                    placeholder='Senha'
                    type='password'
                    name='password'
                    onChange={(e) => {
                        setSignupInfo({
                            ...signupInfo,
                            password: e.target.value
                        })
                    }}
                    value={signupInfo.password} />
                <button type="submit">
                    {!loading ?
                        'CADASTRAR' :
                        <ThreeDots color="#FFFFFF" width={80} />}
                </button>
            </form>
            <Link className='link' to="/">Já possui uma conta? Entre</Link>
        </Container>
    )
}