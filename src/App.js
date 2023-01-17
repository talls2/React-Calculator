import { useState } from "react";
import Input from "./components/Visor";
import Button from "./components/Buttons";
import { Row } from "./global";
import { FatherDiv } from "./global";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${number}${prev === '0' ? '' : prev}` );
  };
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          default: 
            break;
        }
    }

  }


  return (
    <div className="App">
      <FatherDiv>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleAddNumber("x")}>
            x
          </Button>
          <Button label="/" onClick={() => handleAddNumber("/")}>
            /
          </Button>
          <Button label="C" onClick={() => handleOnClear("C")}>
            C
          </Button>
          <Button label="X" onClick={() => handleAddNumber("X")}>
            X
          </Button>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")}>
            1
          </Button>
          <Button label="2" onClick={() => handleAddNumber("2")}>
            2
          </Button>
          <Button label="3" onClick={() => handleAddNumber("3")}>
            3
          </Button>
          <Button label="-" onClick={() => handleMinusNumbers("-")}>
            -
          </Button>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")}>
            4
          </Button>
          <Button label="5" onClick={() => handleAddNumber("5")}>
            5
          </Button>
          <Button label="6" onClick={() => handleAddNumber("6")}>
            6
          </Button>
          <Button label="+" onClick={() => handleSumNumbers("+")}>
            +
          </Button>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")}>
            7
          </Button>
          <Button label="8" onClick={() => handleAddNumber("8")}>
            8
          </Button>
          <Button label="9" onClick={() => handleAddNumber("9")}>
            9
          </Button>
          <Button label="=" onClick={() => handleEquals("=")}>
            =
          </Button>
        </Row>
      </FatherDiv>
    </div>  
  );
}

export default App;
