import React, {Component } from  'react';
import {connect} from 'react-redux';
import {addEmployee} from '../redux/employees.js';


class AddEmployeeForm extends Component {
    constructor(props) {
        super(props);
        var { firstName, lastName, position, availability } = props;
        this.state = {
            inputs: {
                firstName: firstName || "",
                lastName: lastName || "",
                position: position || "",
                availability: availability || {
                    inputs: {
                        monday: {
                            inputs: {
                                startTime: "",
                                endTime: "",
                            }
                        },
                        tuesday: {
                            inputs: {
                                startTime: "",
                                endTime: "",
                            }
                        },
                        wednesday: {
                            inputs: {
                                startTime: "",
                                endTime: "",
                            }
                        },
                        thursday: {
                            inputs: {
                                startTime: "",
                                endTime: "",
                            }
                        },
                        friday: {
                            inputs: {
                                startTime: "",
                                endTime: "",
                            }
                        },
                        saturday: {
                            inputs: {
                                startTime: "",
                                endTime: "",
                            }
                        },
                        sunday: {
                            inputs: {
                                startTime: "",
                                endTime: "",
                            }
                        }
                        
                        
                    }
                }
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
    handleChange(e){
        let {name, value} = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs, [name]: value
                }
            }
        })
    }
    clearInputs(){
        this.setState({
            inputs: {
                firstName: "",
                lastName: "",
                position: "",
                availability: {
                    monday: {
                        startTime: "",
                        endTime: ""
                    },
                    tuesday: {
                        startTime: "",
                        endTime: ""
                    },
                    wednesday: {
                        startTime: "",
                        endTime: ""
                    },
                    thursday: {
                        startTime: "",
                        endTime: ""
                    },
                    friday: {
                        startTime: "",
                        endTime: ""
                    },
                    satday: {
                        startTime: "",
                        endTime: ""
                    },
                    sunday: {
                        startTime: "",
                        endTime: ""
                    },
                },
    
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let {addEmployee} = this.props;
        addEmployee(this.state.inputs);
        console.log(this.props);
        this.clearInputs(this.props);
    }
    render(){
        let {firstName, lastName, position, availability} = this.state.inputs;
        return(
            <div>
                <div>
                    <AddEmployeeForm onSubmit= {this.handleSubmit}>
                        <div>
                            <AddEmployeeForm.Group widths={1}>
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={firstName} name="firstName" type="text" label="First Name" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={lastName} name="lastName" type="text" label="Last Name" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={position} name="position" type="text" label="Position" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.monday.startTime} name="monday start" type="text" label="Monday Start Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.monday.endTime} name="monday end" type="text" label="Monday End Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.tuesday.startTime} name="tuesday start" type="text" label="Tuesday Start Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.tuesday.endTime} name="tuesday end" type="text" label="Tuesday End Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.wednesday.startTime} name="wednesday start" type="text" label="Wednesday Start Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.wednesday.endTime} name="Wednesday end" type="text" label="Wednesday End Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.thursday.startTime} name="thursday start" type="text" label="Thursday Start Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.thursday.endTime} name="thursday end" type="text" label="Thursday End Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.friday.startTime} name="friday start" type="text" label="Friday Start Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.friday.endTime} name="friday end" type="text" label="Friday End Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.saturday.startTime} name="saturday start" type="text" label="Saturday Start Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.saturday.endTime} name="saturday end" type="text" label="saturday End Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.sunday.startTime} name="sunday start" type="text" label="Sunday Start Time" />
                                <AddEmployeeForm.Input onChange= {this.handleChange}value={availability.sunday.endTime} name="sunday end" type="text" label="Sunday End Time" />
                            </AddEmployeeForm.Group>
                        </div>
                    </AddEmployeeForm>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {employee: state.employees}
}

export default connect(mapStateToProps, {addEmployee}) (AddEmployeeForm);