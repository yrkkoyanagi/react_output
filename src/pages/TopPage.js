import React from 'react'
import { createRoot } from 'react-dom/client'
import PersonForm from '../components/PersonForm'
import CalcButton from '../components/CalcButton'
import {Box} from  '@material-ui/core';
import {TextField} from '@material-ui/core';

export default class TopPage extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			count: 0,
			totalAmount: 0,
			partySize: 0
		}
		this.handleChange = this.handleChange.bind(this)
		this.addCount = this.addCount.bind(this)
	}
	
	handleChange (e) {
		let name = e.target.name;
		this.setState({[name] : e.target.value})
	};
	addCount(){
		this.setState((state) => {
			return {
				count : state.totalAmount/state.partySize
			}
		})
	}	

    render() {
        return (
             <Box
      			component="form"
      			sx={{
        		'& > :not(style)': { m: 1, width: '25ch' },
      			}}
     			 noValidate
      			autoComplete="off"
   			 >
   			    <TextField name="totalAmount" value={this.state.totalAmount} onChange={this.handleChange} label="合計金額" variant="outlined" />
            	<TextField name="partySize" value={this.state.partySize} onChange={this.handleChange} label="人数" variant="outlined" />
                <PersonForm count={this.state.count} />
                <CalcButton onAddCount={this.addCount} />
            </Box>
        )
    }
}