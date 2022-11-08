import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const buttonName = event.target.innerHTML;
    const results = calculate(this.state, buttonName);
    this.setState(results);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <section className="calculatorSection">
        <table>
          <thead>
            <tr>
              <td colSpan="4" role="presentation" onClick={this.handleChange} defaultValue="0" className="results">
                {total}
                {operation}
                {next}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td role="presentation" onClick={this.handleChange}>AC</td>
              <td role="presentation" onClick={this.handleChange}>+/-</td>
              <td role="presentation" onClick={this.handleChange}>%</td>
              <td role="presentation" className="red" onClick={this.handleChange}>÷</td>
            </tr>
            <tr>
              <td role="presentation" onClick={this.handleChange}>7</td>
              <td role="presentation" onClick={this.handleChange}>8</td>
              <td role="presentation" onClick={this.handleChange}>9</td>
              <td role="presentation" className="red" onClick={this.handleChange}>x</td>
            </tr>
            <tr>
              <td role="presentation" onClick={this.handleChange}>4</td>
              <td role="presentation" onClick={this.handleChange}>5</td>
              <td role="presentation" onClick={this.handleChange}>6</td>
              <td role="presentation" className="red" onClick={this.handleChange}>-</td>
            </tr>
            <tr>
              <td role="presentation" onClick={this.handleChange}>1</td>
              <td role="presentation" onClick={this.handleChange}>2</td>
              <td role="presentation" onClick={this.handleChange}>3</td>
              <td role="presentation" className="red" onClick={this.handleChange}>+</td>
            </tr>
            <tr>
              <td colSpan="2" role="presentation" onClick={this.handleChange}>0</td>
              <td role="presentation" onClick={this.handleChange}>.</td>
              <td role="presentation" className="red" onClick={this.handleChange}>=</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Calculator;
