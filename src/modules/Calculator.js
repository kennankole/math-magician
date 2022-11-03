import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [operation, setOperation] = useState(null);
  const [next, setNext] = useState(null);
  const [total, seTotal] = useState(0);

  const cacluatorDataObjects = { operation, next, total };

  const handleChange = (event) => {
    const buttonName = event.target.innerHTML;
    const results = calculate(cacluatorDataObjects, buttonName);
    const { operation, next, total } = results;

    setOperation(operation);
    setNext(next);
    seTotal(total);
  };
  return (
    <section className="calculatorSection">
      <table>
        <thead>
          <tr>
            <td colSpan="4" role="presentation" onClick={handleChange} defaultValue="0" className="results">
              {total}
              {operation}
              {next}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td role="presentation" onClick={handleChange}>AC</td>
            <td role="presentation" onClick={handleChange}>+/-</td>
            <td role="presentation" onClick={handleChange}>%</td>
            <td role="presentation" className="red" onClick={handleChange}>÷</td>
          </tr>
          <tr>
            <td role="presentation" onClick={handleChange}>7</td>
            <td role="presentation" onClick={handleChange}>8</td>
            <td role="presentation" onClick={handleChange}>9</td>
            <td role="presentation" className="red" onClick={handleChange}>x</td>
          </tr>
          <tr>
            <td role="presentation" onClick={handleChange}>4</td>
            <td role="presentation" onClick={handleChange}>5</td>
            <td role="presentation" onClick={handleChange}>6</td>
            <td role="presentation" className="red" onClick={handleChange}>-</td>
          </tr>
          <tr>
            <td role="presentation" onClick={handleChange}>1</td>
            <td role="presentation" onClick={handleChange}>2</td>
            <td role="presentation" onClick={handleChange}>3</td>
            <td role="presentation" className="red" onClick={handleChange}>+</td>
          </tr>
          <tr>
            <td colSpan="2" role="presentation" onClick={handleChange}>0</td>
            <td role="presentation" onClick={handleChange}>.</td>
            <td role="presentation" className="red" onClick={handleChange}>=</td>
          </tr>
        </tbody>

      </table>
    </section>
  );
}

export default Calculator;
