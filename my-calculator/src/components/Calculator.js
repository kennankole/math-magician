import React from "react";
class Calculator extends React.Component {
	render() {
		return (
			<table>
				<tr>
					<td><input type="text" value="0" class="input-field" /></td>
				</tr>
				<tr>
					<td>
						<input type="text" name="" id="" value="AC" />
						<input type="text" name="" id="" value="+/-" />
						<input type="text" name="" id="" value="%" />
						<input type="text" name="" id="" value="&#247;" class="red" />
					</td>
				</tr>
				<tr>
					<td>
						<input type="text" name="" id="" value="7" />
						<input type="text" name="" id="" value="8" />
						<input type="text" name="" id="" value="9" />
						<input type="text" name="" id="" value="x" class="red" />
					</td>
				</tr>
				<tr>
					<td>
						<input type="text" name="" id="" value="4" />
						<input type="text" name="" id="" value="5" />
						<input type="text" name="" id="" value="6" />
						<input type="text" name="" id="" value="-" class="red" />
					</td>
				</tr>
				<tr>
					<td>
						<input type="text" name="" id="" value="1" />
						<input type="text" name="" id="" value="2" />
						<input type="text" name="" id="" value="3" />
						<input type="text" name="" id="" value="+" class="red" />
					</td>
				</tr>
				<tr>
					<td class="down-input">
						<input type="text" name="" id="" value="0" />
						<input type="text" name="" id="" value="." />
						<input type="text" name="" id="" value="=" class="red" />
					</td>
				</tr>
			</table>
		);
	}
}

export default Calculator;