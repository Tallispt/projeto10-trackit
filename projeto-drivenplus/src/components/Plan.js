import axios from "axios"
import { useEffect, useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import UserContext from '../context/UserContext';
import { Button, Input } from "../styles/Style";


export default function Plan() {
    const { clientInfo } = useContext(UserContext);
    const navigate = useNavigate()
    const { planId } = useParams()

    const [plan, setPlan] = useState()

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${clientInfo.token}`
            }
        }

        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planId}`, config)
            .then(r => {
                setPlan({ ...r.data })
                console.log(r.data)
            })
            .catch(e => {
                if (e) {
                    navigate('/')
                    console.log(e)
                }
            })
    }, [])


    return (
        <>
            {plan ? (
                <>
                    <Header>
                        <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
                    </Header>
                    <Logo>
                        <img src={plan.image} alt='logo' />
                        <h1>{plan.name}</h1>
                    </Logo>
                    <Main>
                        <h2>
                            <ion-icon name="clipboard-outline"></ion-icon>
                            Benefícios:</h2>
                        <ol>
                            {plan.perks.map((perk, index) =>
                                <li key={index}>{index + 1}.{perk.title}</li>
                            )}
                        </ol>
                        <h2>
                            <ion-icon name="cash-outline"></ion-icon>
                            Preço:</h2>
                        <p>R$ {plan.price.replace('.', ',')} cobrados mensalmente</p>
                    </Main>
                    <Form>
                        <Input placeholder="Nome impresso no cartão" />
                        <Input placeholder="Digitos do cartão" />
                        <div>
                            <Input placeholder="Código de segurança" />
                            <Input placeholder="Validade" />
                        </div>
                        <Button>ASSINAR</Button>
                    </Form>
                </>
            ) : null}
        </>
    )
}

const Header = styled.div`
    color: #FFFFFF;
    position: fixed;
    left: 15px;
    top: 17px;

    ion-icon {
        font-size: 40px;
        font-weight: bold;
    }
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    gap: 12px;
    margin-top: 70px;
    margin-bottom: 22px;

    img {
        width: 140px;
        height: 95px;
    }
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    padding: 0 44px;

    ion-icon {
        color: #FF4791;
        margin-right: 5px;
        font-size: 15px;
    }

    h2 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        padding-bottom: 10px;
    }

    ol {
        padding-bottom: 12px;
    }

    p, li, span {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 40px 0 40px;
    gap: 8px;

    div {
        display: flex;
        gap: 9px
    }

    div input {
        width: 50%;
        padding-left: 2px;
        display: flex;
        align-items: center;
        text-align: center;
    }

    button {
        margin-top: 4px;
    }
`