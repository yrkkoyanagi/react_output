import React from 'react'

export default class PersonForm extends React.Component {
    render() {
        return (
            <div>一人当たりの金額 : { this.props.count}</div>
        ) 
    }
}
