import axios from "axios";
const employeeUrl = "http://localhost:8080/api/employee";

export const addEmployee = (employee) => {
    return (dispatch) => {
        axios.post(employeeUrl, employee)
         .then(response => {
             dispatch({
                 type: "ADD_EMPLOYEE"
             });
         })
         .catch((err) => {
             console.error(err);
             return err;
         })
    }
}

const addEmployeeReducer = (prevState = [], action) =>{
    switch(action.type) {
        case "ADD_EMPLOYEE":
            return [ ...prevState, action.employees]
        default: 
            return prevState;
    }
}

export default addEmployeeReducer;
