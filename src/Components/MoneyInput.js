import React, { Component } from 'react'

export default class MoneyInput extends Component {
    handleChange = (e) => {
        this.props.onInputChange(e);
    }
    render() {
        const howMuch = this.props.howMuch;
        const name = this.props.name;
        return (
            <>
                <input 
                    className = "money-input" 
                    value = { howMuch }
                    name = { name }
                    placeholder = { name.toUpperCase() }
                    onChange = { this.handleChange } >
                </input>
            </>
        )
    }
}
