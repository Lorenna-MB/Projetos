import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg,rgb(157, 168, 218) 0%, #a83279 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 40px 32px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.15);
  min-width: 350px;
  max-width: 400px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 16px 6px;
    min-width: 90vw;
    max-width: 98vw;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  gap: 5px;

  @media (max-width: 600px) {
    gap: 4px;
    margin-bottom: 6px;
  }
`;