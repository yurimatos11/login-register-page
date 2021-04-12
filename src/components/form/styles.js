import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    @media (min-width: 700px) {
        margin-right: 180px;
    }
    h1{
        color: #fff;
        display: flex;
        justify-content: center;
    }
    input{
        display: flex;
        background-color: #333;
        margin-top: 1.5rem;
        width: 18rem;
        border: 2px solid #fff;
        height: 3rem;
        border-radius: 20px;
        color: #fff;
        ::placeholder{
            color: #fff;
            padding-left: 1rem;
        }
    }
    .login{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        button{
        background-color: #fff;
        border-radius: 20px;
        border: 2px solid #333;
        width: 15rem;
        height: 2.8rem;
        font-size: 1.3rem;
        font-weight: bold;
        :hover{
            background-color: green;
            transition: .5s;
        }
    }
    }
    .submit{
        margin-top: 1.5rem;
        p{
            display: flex;
            justify-content: center;
            color: #fff;
        }
    }
    .here{
        display: flex;
        justify-content: center;
        button{
        background-color: #fff;
        border-radius: 20px;
        border: 2px solid #333;
        width: 15rem;
        height: 2.8rem;
        font-size: 1.3rem;
        font-weight: bold;
        :hover{
            background-color: blue;
            transition: .5s;
        }
        a{
            color: #000;
        }
    }
    }
        
    
`;
