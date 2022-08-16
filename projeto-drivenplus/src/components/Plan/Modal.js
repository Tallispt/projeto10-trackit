import styled from 'styled-components'
import { Button } from "../../styles/Style"

export default function Modal({ setIsModalVisible }) {
    return (
        <ModalContainer >
            < div >
                <h3>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</h3>
                <span>
                    <Button onClick={setIsModalVisible(false)}>Não</Button>
                    <Button>SIM</Button>
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