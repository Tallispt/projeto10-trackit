import styled from 'styled-components'

export const Container = styled.div`

    padding: 0 38px;
    margin-top: 134px;
    display: flex;
    flex-direction: column;
    align-items: center;


img{
    height: 50px;
    width: 300px;
    margin-bottom: 100px;

}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 25px;
    width: 100%;
}

.link {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #FFFFFF;
    text-align: center;
}
`;

export const PlanContainer = styled.div`

    form { display: flex;
        flex-direction: column;
        margin: 24px 40px 0 40px;
        gap: 8px;
    }

    form div {
        display: flex;
        gap: 9px
    }

    form div input {
        width: 50%;
        padding-left: 2px;
        display: flex;
        align-items: center;
    }

    form button {
        margin-top: 4px;
    }
`

export const Input = styled.input`
    height: 52px;
    background: ${({ loading }) => loading ? '#D4D4D4' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    padding-left: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

input::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7E7E7E;

}`

export const Button = styled.button`
    height: 52px;
    width: 100%;
    background: #FF4791;
    opacity: ${({ loading }) => loading ? 0.7 : 1};
    border: none;
    margin-top: 8px;
    border-radius: 8px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
`

export const Load = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`