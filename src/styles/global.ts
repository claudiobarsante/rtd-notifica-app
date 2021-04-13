import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,*::after,*::before {
    margin:0;
    padding:0;
    box-sizing:content-box;
}

html{
    font-size:62.5%;
}

:root {
  --error:#c53030;
  --lightBlue:#007aff;
  --success: #73bd73;
  --purple:#788EEC;
  --white:#F4EDE8;
  --gray:#f3f2f2;
  --gray-hard:#666360;
}


body{
    -webkit-font-smoothing: antialiased;
}

body,input, button{
    font-family:'Roboto', serif;
    font-size: 1.6rem;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 500;
    }

    button {
        cursor:pointer;
    }
`;
