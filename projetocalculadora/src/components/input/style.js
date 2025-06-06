import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 90px;
    background-color: rgb(110, 4, 105);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    font-size: 25px;
    border-radius: 20px;
    margin-bottom: 10px;
    
    input {
       width: 100%;
       height: 75%;
       background-color: rgb(121, 20, 112);
       font-size: 60px;
       color: rgb(255, 255, 255);
       border-radius: 20px;
       padding: 0 10px;
    }

    @media (max-width: 600px) {
        height: 60px;
        font-size: 16px;

        input {
            font-size: 28px;
            height: 60%;
        }
    }
`