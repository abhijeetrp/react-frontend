import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
         this.addUser = this.addUser.bind(this);
         this.editUser = this.editUser.bind(this); 
        // this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    // deleteEmployee(id) {
    //     UserService.deleteEmployee(id).then(res => {
    //         this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
    //     });
    // }
    // viewEmployee(id) {
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
        });
    }

    addUser() {
        this.props.history.push('/add-user/-1');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Id</th>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Middle Name</th>
                                <th> Phone Number</th>
                                <th> Email</th>
                                <th> Address</th>
                                <th> DateOfBirth</th>
                                <th> Gender</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.id}</td>
                                            <td> {user.firstName} </td>
                                            <td> {user.lastName}</td>
                                            <td> {user.middleName}</td>
                                            <td> {user.phoneNumber} </td>
                                            <td> {user.email}</td>
                                            <td> {user.address}</td>
                                            <td> {user.dateOfBirth} </td>
                                            <td> {user.gender}</td>
                                            <td>
                                                <button onClick={() => this.editUser(user.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(user.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(user.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListUserComponent
