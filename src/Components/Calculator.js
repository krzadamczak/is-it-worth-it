import React, { Component } from 'react'
import MoneyInput from './MoneyInput.js'
import CalculateTime from './CalculateTime.js'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             money: ''
        }
    }
    
    handleInputChange = (money) => {
        this.setState(Object.assign({}, {money}))
    }

    render() {
        return (
            <div>
                <MoneyInput money={this.state.money} onInputChange={this.handleInputChange} />
                <CalculateTime money={this.state.money} />
            </div>
        )
    }
}
