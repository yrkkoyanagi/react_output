import React from 'react'
import PersonForm from '../components/PersonForm'
import CalcButton from '../components/CalcButton'

export default class TopPage extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			count: 0
		}
		this.addCount = this.addCount.bind(this)
	}
	addCount(){
		this.setState((state) => {
			return {
				count : state.count +1 
			}
		})
	}	

    render() {
        return (
            <div>
                <PersonForm count={this.state.count} />
                <CalcButton onAddCount={this.addCount} />
            </div>
        )
    }
}