import styled from 'styled-components'

export const Container = styled.div`

    padding: 0 36px;
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;


img{
    height: 180px;
    width: 179px;
    margin-bottom: 33px;

}

form {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 25px;
    width: 100%;
}

input {
    height: 45px;
    background: ${props => props.loading ? '#D4D4D4' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
}

input::placeholder {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}

button {
    height: 45px;
    width: 100%;
    background: #52B6FF;
    opacity: ${props => props.loading ? 0.7 : 1};
    border: none;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.link {
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
}
`;
