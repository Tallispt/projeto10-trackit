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

input {
    height: 52px;
    background: ${props => props.loading ? '#D4D4D4' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    padding-left: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
}

input::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7E7E7E;

}

button {
    height: 52px;
    width: 100%;
    background: #FF4791;
    opacity: ${props => props.loading ? 0.7 : 1};
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
