import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            middleName: '',
            phoneNumber: '',
            email: '',
            address: '',
            dateOfBirth: '',
            gender: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '-1') {
            return
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    firstName: user.firstName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    middleName: user.middleName,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    address: user.address,
                    dateOfBirth: user.dateOfBirth,
                    gender: user.gender,
                    password: user.password
                });
            });
        }
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            middleName: this.state.middleName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            dateOfBirth: this.state.dateOfBirth,
            gender: this.state.gender,
            password: this.state.password
        };
        console.log('user => ' + JSON.stringify(user));

        // UserService.createUser(user).then(res => {
        //     this.props.history.push('/users');
        // });

        // step 5
        if (this.state.id === '-1') {
            UserService.createUser(user).then(res => {
                this.props.history.push('/users');
            });
        } else {
            UserService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/users');
            });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeMiddleNameHandler = (event) => {
        this.setState({ middleName: event.target.value });
    }

    changePhoneNumberHandler = (event) => {
        this.setState({ phoneNumber: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeDateOfBirthHandler = (event) => {
        this.setState({ dateOfBirth: event.target.value });
    }

    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    cancel() {
        this.props.history.push('/users');
    }

    getTitle() {
        if (this.state.id === '-1') {
            return <h3 className="text-center">Add User</h3>
        } else {
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> User Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Middle Name: </label>
                                        <input placeholder="Middle Name" name="middleName" className="form-control"
                                            value={this.state.middleName} onChange={this.changeMiddleNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Phone Number: </label>
                                        <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                            value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> DateOfBirth: </label>
                                        <input placeholder="DateOfBirth" name="dateOfBirth" className="form-control"
                                            value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Gender: </label>
                                        <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changeGenderHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateUserComponent
