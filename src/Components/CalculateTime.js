import React, { Component } from 'react'
import dayjs from 'dayjs'

export default class CalculateTime extends Component {
    
    tryCalculateSeconds = () => {
        const cost = parseFloat(this.props.cost);
        const salary = parseFloat(this.props.salary);

        if(Number.isNaN(cost) || Number.isNaN(salary)){
            return NaN;
        }
        else{
            let result = cost / (salary / 60 / 60);
            return result
        }
    }
    displayTime = () => {

    }
    render() {

        const totalTime = this.tryCalculateSeconds();
        return (
            <>
                {!Number.isNaN(totalTime) && 
                    <>
                        <div>{Math.floor(totalTime / 60 / 60)}</div>
                        <div>{Math.floor(totalTime / 60 % 60)}</div>
                        <div>{Math.round(totalTime % 60)}</div>
                    </>
                }
                
            </>
        )
    }
}
