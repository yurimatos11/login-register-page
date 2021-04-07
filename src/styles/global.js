import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background-color: #000;
    }

    a{
        text-decoration: none;
        list-style: none;
    }

    input{
        outline: none;
        padding-left: 10px;
    }
`;
