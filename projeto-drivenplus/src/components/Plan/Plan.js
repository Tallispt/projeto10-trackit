import axios from "axios"
import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import UserContext from '../../context/UserContext';
import { ThreeDots } from "react-loader-spinner";

import { Button, Input, Load, PlanContainer } from "../../styles/Style";
import Modal from "./Modal";

export default function Plan() {
    const navigate = useNavigate()
    const { clientInfo } = useContext(UserContext);
    const { planId } = useParams()

    const [plan, setPlan] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [planInfo, setPlanInfo] = useState({
        membershipId: '',
        cardName: '',
        cardNumber: '',
        securityNumber: '',
        expirationDate: ''
    })

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${clientInfo.token}`
            }
        }

        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planId}`, config)
            .then(r => {
                setPlan({ ...r.data })
                setPlanInfo({ ...planInfo, membershipId: r.data.id })
            })
            .catch(e => {
                if (e) {
                    navigate('/')
                    console.log(e)
                }
            })
    }, [])

    function handlePlan(event) {
        event.preventDefault()

        setPlanInfo({ ...planInfo, cardNumber: planInfo.cardNumber.match(/.{1,4}/g).join(' ') })
        setIsModalVisible(true)
    }

    return (
        <PlanContainer >
            <Header>
                <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
            </Header>
            {plan ? (
                <>
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
                                <li key={index}><pre>{index + 1}.  {perk.title}</pre></li>
                            )}
                        </ol>
                        <h2>
                            <ion-icon name="cash-outline"></ion-icon>
                            Preço:</h2>
                        <p>R$ {plan.price.replace('.', ',')} cobrados mensalmente</p>
                    </Main>
                    <form onSubmit={handlePlan}>
                        <Input
                            placeholder="Nome impresso no cartão"
                            type='text'
                            name='name'
                            value={planInfo.cardName}
                            onChange={e => {
                                setPlanInfo({
                                    ...planInfo,
                                    cardName: e.target.value
                                })
                            }}
                            required
                        />
                        <Input
                            placeholder="Digitos do cartão"
                            type='number'
                            name='card'
                            value={planInfo.cardNumber}
                            onChange={e => {
                                setPlanInfo({
                                    ...planInfo,
                                    cardNumber: e.target.value
                                })
                            }}
                            required
                        />
                        <div>
                            <Input
                                placeholder="Código de segurança" type='number' value={planInfo.securityNumber}
                                onChange={e => {
                                    setPlanInfo({ ...planInfo, securityNumber: parseInt(e.target.value) })
                                }}
                                required
                            />
                            <Input
                                placeholder="Validade"
                                value={planInfo.expirationDate}
                                onChange={e => {
                                    setPlanInfo({
                                        ...planInfo,
                                        expirationDate: e.target.value
                                    })
                                }}
                                required
                            />
                        </div>
                        <Button type="submit">ASSINAR</Button>
                    </form>
                    {
                        isModalVisible ?
                            <Modal
                                plan={plan}
                                planInfo={planInfo}
                                setIsModalVisible={setIsModalVisible}
                            /> : null
                    }
                </>
            ) :
                <Load>
                    <ThreeDots color={'#FFFFFF'} width={120} />
                </Load>}
        </PlanContainer>
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