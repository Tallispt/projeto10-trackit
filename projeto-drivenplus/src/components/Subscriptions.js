import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useContext, useState } from 'react'
import UserContext from '../context/UserContext';
import { useNavigate, useParams } from 'react-router-dom'

export default function Subscriptions() {
    const navigate = useNavigate()
    const { idPlan } = useParams()
    console.log(idPlan)
    const { clientInfo } = useContext(UserContext);
    const [plans, setPlans] = useState([])


    function handleClick() { }

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${clientInfo.token}`
            }
        }

        axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)
            .then(r =>
                setPlans([...r.data])
            )
            .catch(e => {
                if (e) {
                    localStorage.removeItem('client')
                    navigate('/')
                }
            })
    }, [])

    return (
        <Container>
            <h1>Escolha seu Plano</h1>
            <InnerContainer>
                {plans.map(plan =>
                    <PlanBox onClick={handleClick} key={plan.id}>
                        <img src={plan.image} alt='logo' />
                        <p>{plan.price}</p>
                    </PlanBox>)}
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 43px;

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

const PlanBox = styled.div`
    display: flex;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    height: 170px;
    width: 100%;

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