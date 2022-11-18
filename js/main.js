//All classes Include Here

//Create User class
class User {
    constructor(email, password) {

        this.email = email;
        this.password = password;
    }
}

//Create class for UI  
class UI {

    //Display all user list which is registerd
    static displayUsers() {
        let users = Store.getUsers();
        users.forEach((user) => UI.addUserList(user));

    }
    //Add registered user and append to table
    static addUserList(user) {

        const list = document.querySelector("#user-list");
        const row = document.createElement("tr");

        row.innerHTML = `<td>1</td>
						<td>${user.email}</td>
						<td>${user.password}</td>
						<td><a href="#" class="edit btn btn-success">Edit</a>  
						<a href="#" class="delete btn btn-danger">Delete</a></td>
		`;

        list.appendChild(row);
    }

    //Create Function for showing error message
    static showAlert(msz, className) {

        //Create  div element for showing message
        const div = document.createElement('div');

        div.className = `alert ${className}`;

        div.appendChild(document.createTextNode(msz));

        const container = document.querySelector('.container');
        //get modal
        const userTbl = document.querySelector('#userTable');
        //insert div element
        container.insertBefore(div,userTbl);

        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);

    }
    //clear all input fields
    static clearFields() {
        document.querySelector("#email").value = '';
        document.querySelector("#password").value = '';
        document.querySelector("#conf-password").value = '';
    }

    //remove appended user list 
    deleteUser(target) {

        if (target.className === 'delete btn btn-danger') {
            target.parentElement.parentElement.remove();
        }
    }

}

//class store :handle Local Staorage Operation
class Store {

    //Get User Data
    static getUsers() {
        let users;
        if (localStorage.getItem('users') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('users'));
        }
        return users;
    }
  //Add user information
    static addUser(user) {
        const users = Store.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

    }

    //Delete user detail from local storage
    static removeUser(email) {
        const users = Store.getUsers();

        users.forEach((user, index) => {

            if (user.email === email) {

                users.splice(index, 1);

            }
        });

        localStorage.setItem('users', JSON.stringify(users));
    }

    //Edit User Details
    editUser(td) {

        selectedRow = td.parentElement.parentElement;
        document.getElementById("email").value = selectedRow.cells[0].innerHTML;
        document.getElementById("password").value = selectedRow.cells[1].innerHTML;

    }

    updateUser(user) {

        selectedRow.cells[0].innerHTML = user.email;
        selectedRow.cells[1].innerHTML = user.password;

    }
}
//End Data Storage Class
//End js here



