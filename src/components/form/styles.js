import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    h1{
        color: #fff;
        display: flex;
        justify-content: center;
    }
    input{
        display: flex;
        background-color: #333;
        margin-top: 1.5rem;
        width: 30rem;
        border: 2px solid #fff;
        height: 3rem;
        border-radius: 20px;
        ::placeholder{
            color: #fff;
            padding-left: 1rem;
        }
    }
`;
