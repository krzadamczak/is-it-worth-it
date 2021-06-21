import React, { Component } from 'react'
import MoneyInput from './MoneyInput.js'
import CalculateTime from './CalculateTime.js'

export default class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            salary: '',
            cost: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const salary = this.state.salary;
        const cost = this.state.cost;
        return (
            <div>
                <MoneyInput
                    howMuch = { salary }
                    name = 'salary'
                    onInputChange = { this.handleInputChange } 
                />

                <MoneyInput
                    howMuch = { cost }
                    name = 'cost'
                    onInputChange = { this.handleInputChange }
                />
                <CalculateTime 
                    salary = { salary } 
                    cost = { cost }
                />
            </div>
        )
    }
}
