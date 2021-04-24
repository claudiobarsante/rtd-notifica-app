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
  --background-modal:#f0f2f5;
}


body{
    -webkit-font-smoothing: antialiased;
}


  

    button {
        cursor:pointer;
    }


/*Modal*/
.react-modal-overlay{
    background:rgba(0,0,0,0.5);

    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;

    display:flex;
    align-items:center;
    justify-content:center;

}

.react-modal-close{
    background:transparent;
    border:0;

    position:absolute;
    right:1.5rem;
    top:1.5rem;

    transition:filter 0.2s;

    &:hover{
        filter:brightness(0.8)
    }
}
.react-modal-content{
    width:100%;
    max-width: 576px;

    background:var(--background-modal);
    border-radius:0.24rem;

    padding:3rem;
    position:relative;   
  
}
`;
