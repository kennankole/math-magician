/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <section className="calculatorSection">
        <div className="calculatorContainer">
          <table>
            <tr>
              <td><input type="text" value="0" className="inputField" /></td>
            </tr>
            <tr>
              <td>
                <input type="text" name="" id="" value="AC" />
                <input type="text" name="" id="" value="+/-" />
                <input type="text" name="" id="" value="%" />
                <input type="text" name="" id="" value="&#247;" className="red" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" name="" id="" value="7" />
                <input type="text" name="" id="" value="9" />
                <input type="text" name="" id="" value="8" />
                <input type="text" name="" id="" value="x" className="red" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" name="" id="" value="4" />
                <input type="text" name="" id="" value="5" />
                <input type="text" name="" id="" value="6" />
                <input type="text" name="" id="" value="-" className="red" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" name="" id="" value="1" />
                <input type="text" name="" id="" value="2" />
                <input type="text" name="" id="" value="3" />
                <input type="text" name="" id="" value="+" className="red" />
              </td>
            </tr>
            <tr>
              <td className="downInput">
                <input type="text" name="" id="" value="0" />
                <input type="text" name="" id="" value="." />
                <input type="text" name="" id="" value="=" className="red" />
              </td>
            </tr>
          </table>
        </div>
      </section>
    );
  }
}

export default Calculator;
