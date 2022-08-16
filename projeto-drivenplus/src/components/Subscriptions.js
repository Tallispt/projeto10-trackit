import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";

import { Load } from '../styles/Style'

function PlanContainer({ plan }) {
    return (
        <PlanBox to={`/subscriptions/${plan.id}`}>
            <img src={plan.image} alt='logo' />
            <p>R$ {plan.price.replace('.', ',')}</p>
        </PlanBox>
    )
}

export default function Subscriptions() {
    const navigate = useNavigate()

    const { clientInfo } = useContext(UserContext);
    const [plans, setPlans] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${clientInfo.token}`
            }
        }

        axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)
            .then(r => {
                setPlans([...r.data])
                setLoading(!loading)
            })
            .catch(e => {
                if (e) {
                    localStorage.removeItem('client')
                    navigate('/')
                }
            })
    }, [])

    return (
        <Container>
            {loading ?
                (<Load>
                    <ThreeDots color={'#FFFFFF'} width={120} />
                </Load>) :
                (<>
                    <h1>Escolha seu Plano</h1>
                    <InnerContainer>
                        {plans.map(plan => <PlanContainer plan={plan} key={plan.id} onMouseEnter={event => {
                            event.target.style.background = '#2C3333'
                        }}
                            onMouseLeave={event => event.target.style.background = ''} />)}
                    </InnerContainer>
                </>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 43px 0 43px;

    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;
        padding-top: 13px;
        padding-bottom: 24px;
    }
`

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

const PlanBox = styled(Link)`
    display: flex;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    height: 170px;
    width: 100%;
    text-decoration: none;

    img {
        width: 140px;
        height: 95px;
    }

    p {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
`