import styled from 'styled-components';

export const MenuCarousel = styled.div`
    .img{
        height: 0vh;
        width: 0vw;
    }
    @media (min-width: 700px) {
        .img{
            height: 100vh;
            width: 43vw;
        }
    }
`;
