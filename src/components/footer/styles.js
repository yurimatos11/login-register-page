import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    background-color: #333;
    @media (min-width: 700px) {
        margin-top: 0;
    }
    div{
        margin-top: 1rem;
        p{
            color: #fff;
        }
        .social{
            display: flex;
            justify-content: center;
            a{
                color: #fff;
                margin-left: 1rem;
                margin-bottom: 1rem;
            }
        }
    }
`;
