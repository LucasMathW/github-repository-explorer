import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export default createGlobalStyle`
  *{  
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body{
      background: #f0f0f5 url(${background}) no-repeat 70% top;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button{
      font: 16px Roboto, sans-serif;
    }

    #root{
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    button{ 
     cursor: pointer;
    }
`;
