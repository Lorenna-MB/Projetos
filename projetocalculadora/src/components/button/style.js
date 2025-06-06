import styled from 'styled-components';

export const ButtonContainer = styled.button`
    flex: ${({ flex }) => flex || 1};
    height: 60px;
    background: #6e0469;
    color: #fff;
    font-size: 24px;
    border: none;
    border-radius: 12px;
    margin: 2px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #a83279;
    }

    @media (max-width: 600px) {
        height: 38px;
        font-size: 16px;
        border-radius: 8px;
        margin: 1px;
    }
`;