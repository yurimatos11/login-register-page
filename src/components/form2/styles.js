import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    .create{
        position: absolute;
        h1{
           color: #fff; 
        }
    }
    .top{
        margin-top: 4rem;
    }
    input{
        display: flex;
        margin-top: 2rem;
        background-color: #333;
        margin-top: 1.5rem;
        width: 20rem;
        border: 2px solid #fff;
        height: 3rem;
        border-radius: 20px;
        color: #fff;
        ::placeholder{
            color: #fff;
            padding-left: 1rem;
        }
    }
    .sub{
        display: flex;
        justify-content: center;
        margin-top: 3rem;
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
    .back{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        p{
            color: #fff;
        }
    }
`;
