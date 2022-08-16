import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import styled from "styled-components";
import Perfil from '../../Assets/Vector.png'
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

import { Button } from "../../styles/Style";
import { Load } from '../../styles/Style';
import { ThreeDots } from "react-loader-spinner";


export default function Home() {
    const { clientInfo, setClientInfo } = useContext(UserContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let value = localStorage.getItem('client')
        value = JSON.parse(value)
        if (value) {
            setClientInfo(value)
            setIsLoading(false)
        }
        else navigate('/')
    }, [])

    return (
        <>
            {
                isLoading ?
                    (<Load>
                        <ThreeDots color={'#FFFFFF'} width={120} />
                    </Load>) :
                    (<>
                        <HomeContainer>
                            <img src={clientInfo.membership.image} alt='logo' />
                            <img src={Perfil} alt='perfil' onClick={() => { localStorage.clear('client'); navigate('/') }} />
                            <h1>Olá, {clientInfo.name}</h1>
                            <div>
                                <span>
                                    {clientInfo.membership.perks.map((perk, index) =>
                                        <a href={perk.link} key={index}>
                                            <Button >{perk.title}</Button>
                                        </a>)}
                                </span>
                                <span>
                                    <Button onClick={() => { navigate('/subscriptions') }}>Mudar plano</Button>
                                    <Button onClick={() => { setIsModalVisible(true) }}>Cancelar plano</Button>
                                </span>
                            </div>


                        </HomeContainer>
                        {
                            isModalVisible ?
                                <Modal
                                    setIsModalVisible={setIsModalVisible}
                                /> : null
                        }
                    </>)
            }
        </>
    )
}

const HomeContainer = styled.div`
    padding: 80px 38px 0 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 97vh;
    box-sizing: border-box;

    img:first-child {
        width: 74.5px;
        position: fixed;
        top: 32px;
        left: 38px;
    }

    img:nth-child(2){
        width: 34px;
        position: fixed;
        top: 22.5px;
        right: 22px;
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        margin-bottom: 53px;
    }

    span:last-child button:last-child {
        background-color: #FF4747;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    span {
        width: 100%;
    }
`