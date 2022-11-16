// assigned  an `employee` variable to an `Object` containing `name` and `streetAddress` keys;
const employee = {
    name:'Sam',
    streetAddress:'11 Broadway',
}

// function takes three arguments and returns an employee with the original key value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee,name,key){
    const newEmployee={...employee};
    newEmployee[name]=key;
    return newEmployee;
    }

    // updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
    function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value) {
        employee[streetAddress] =value;
        return employee;   
        
    }
// deletes `key` from a clone of employee and returns the new employee
    function deleteFromEmployeeByKey(employee, name) {
            const newEmployee={...employee};
            delete newEmployee.name;
            return newEmployee;   
    }
// returns employee without the deleted key/value pair
    function destructivelyDeleteFromEmployeeByKey(employee,name){
        delete employee.name;
        return employee
    }