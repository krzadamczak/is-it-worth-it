import React, { Component } from 'react'

export default class MoneyInput extends Component {
    handleChange = (e) => {
        this.props.onInputChange(e.target.value);
    }
    render() {
        const money = this.props.money;
        return (
            <>
                <input className="money-input" value={money} onChange={this.handleChange}></input>
            </>
        )
    }
}
