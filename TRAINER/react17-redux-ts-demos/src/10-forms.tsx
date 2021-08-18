import React, { Component } from "react";
interface MyState {
    alter: string
}
export default class InputComponent extends Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            alter: '0'
        }
    }
    handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({alter: e.currentTarget.value})
    }
    render() {
        return(
            <form>               
                <label htmlFor="myInput">Ihr Alter: </label>
                <input type="number" id="myInput" value={this.state.alter} onInput={this.handleInput}/> {/* variante1 */}
                {/* <input type="number" name="myInput" value={this.state.alter} onInput={(event) => this.handleInput(event)}/> */} {/* variante2 */}
            </form>
        )
    }
}