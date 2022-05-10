import React from 'react'

export default class CalcButton extends React.Component{

    constructor(props){
            super(props)
            this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onAddCount()
    }
    render() {
        return (
            <button onClick={this.handleClick}>計算する</button>
        )
    }
}