import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './components/input';
import Button from './components/button';
import GlobalStyles from './global';
import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [waitingForNewNumber, setWaitingForNewNumber] = useState(false);
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setWaitingForNewNumber(false);
    setOperation('');
  };

  const handleAddNumber = (num) => {
    if (waitingForNewNumber) {
      setCurrentNumber(num);
      setWaitingForNewNumber(false);
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }
  };

  // Função para preparar a operação
  const handleOperation = (op) => {
    setFirstNumber(currentNumber);
    setOperation(op);
    setWaitingForNewNumber(true);
  };

  // Botão = realiza a operação escolhida
  const handleEquals = () => {
    let result = 0;
    switch (operation) {
      case '+':
        result = Number(firstNumber) + Number(currentNumber);
        break;
      case '-':
        result = Number(firstNumber) - Number(currentNumber);
        break;
      case 'X':
        result = Number(firstNumber) * Number(currentNumber);
        break;
      case '÷':
        result = Number(currentNumber) === 0 ? 'Erro' : Number(firstNumber) / Number(currentNumber);
        break;
      default:
        result = currentNumber;
    }
    setCurrentNumber(String(result));
    setFirstNumber('0');
    setOperation('');
    setWaitingForNewNumber(true);
  };

  //Botão para apagar uma casa
  const handleBackspace = () => {
  setCurrentNumber(prev => {
    if (prev.length === 1) return '0';
    return prev.slice(0, -1);
  });
};


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="X" onClick={() => handleOperation('X')} />
          <Button label="÷" onClick={() => handleOperation('÷')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="⌫" onClick={handleBackspace} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} flex={2.2}/>
          <Button label="," onClick={() => handleAddNumber(".")} />
          <Button label="" />
        </Row>
        
        <GlobalStyles />
      </Content>
    </Container>
  );
};

export default App;