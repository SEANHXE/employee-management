import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService"

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {},
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        });
    }

    render() {
        return (
            <div>
                <br/>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Employee Detail</h3>
                    <div className = "card-body">
                        <label> Employee First Name: </label>
                        <div> {this.state.employee.firstName} </div>
                    </div>
                    <div className = "card-body">
                        <label> Employee Last Name: </label>
                        <div> {this.state.employee.lastName} </div>
                    </div>
                    <div className = "card-body">
                        <label> Employee Email Address: </label>
                        <div> {this.state.employee.emailId} </div>
                    </div>
                    <button style = {{marginLeft: "10px"}} onClick = {() => this.props.history.push('/employees')} className = "btn, btn-danger"> Back </button>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;
