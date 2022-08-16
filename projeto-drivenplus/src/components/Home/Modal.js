import axios from 'axios';
import styled from 'styled-components';
import UserContext from '../../context/UserContext';
import { useContext } from "react";

import { Button } from "../../styles/Style";
import { useNavigate } from 'react-router-dom';

export default function Modal({ setIsModalVisible }) {
    const { clientInfo, setClientInfo } = useContext(UserContext);
    const navigate = useNavigate();

    function handleClick() {
        console.log(clientInfo)
        const config = {
            headers: {
                'Authorization': `Bearer ${clientInfo.token}`
            }
        }

        axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config)
            .then(r => {
                setClientInfo({ ...clientInfo, membership: {} })
                localStorage.setItem('client', JSON.stringify({ ...clientInfo, membership: {} }))
                navigate('/subscriptions')
            })
            .catch(e => {
                if (e) {
                    alert('Erro ao cancelar')
                    setIsModalVisible(false)
                    console.log(e)
                }
            })
    }

    return (
        <ModalContainer >
            <ion-icon name="close-circle-sharp" onClick={() => { setIsModalVisible(false) }}></ion-icon>
            < div >
                <h3>Tem certeza que deseja cancelar o plano {clientInfo.membership.name}?</h3>
                <span>
                    <Button onClick={() => { setIsModalVisible(false) }}>Não</Button>
                    <Button onClick={handleClick}>SIM</Button>
                </span>
            </div >
        </ModalContainer >
    )
}

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;

    ion-icon {
        position: relative;
        top: 26px;
        left: 85%;
        color: #FFFFFF;
        font-size: 40px;
    }

    div {
        position: relative;
        width: 248px;
        height: 210px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #FFFFFF;
        border-radius: 12px;
        box-sizing: border-box;
        padding: 33px 22px 0 22px;
    }

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #000000;
    }

    span {
        display: flex;
        gap: 14px;
        margin-top: 40px
    }

    span button:first-child{
        background: #CECECE;
    }
`