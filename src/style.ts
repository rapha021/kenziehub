import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px var(--grey-3) inset;
    }

    input:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 50px var(--grey-3) inset;
        -webkit-text-fill-color: #fff;
    } 

    input:-webkit-autofill{
        -webkit-text-fill-color: #fff;
    }


    *{
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: var(--grey-4)
    }

    a {
      text-decoration: none;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;


        --success: #3fe864;
        --negative: #e83f5b;
    }

    .primary{
        color: var(--color-primary);
    }

    .white{
        color: #fff;
    }

    .grey{
        color: var(--grey-2);
    }

    .title1{
        font-weight: bold; 
        font-size: 18px;
    }

    .title2{
        font-weight: bold; 
        font-size: 16px;
    }

    .title3{
        font-weight: bold; 
        font-size: 14px;
    }

    .headline{
        font-style: normal; 
        font-size: 12px;
    }

    .headline-bold{
        font-weight: bold; 
        font-size: 12px;
    }

    .headline-italic{
        font-style: italic; 
        font-size: 12px;
    }
`
