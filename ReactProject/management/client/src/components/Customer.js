import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CustomerDelete from './CustomerDelete';

/* 상단 리스트 콤퍼넌트 */
class Customer extends React.Component {
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.img} alt='profile'/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birth}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
            </TableRow>
        )
    }
}

export default Customer;