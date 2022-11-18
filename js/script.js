//All Custom Js Include here//
//Login And Register Form Show And Hide Event 
//Open Login And Register Model
document.querySelector("#login-btn").addEventListener('click', (e) => {

    $("#modal").modal();
    document.getElementById("login").style.display = 'block';
    document.getElementById("register").style.display = 'none';
    document.querySelector(".modal-title").innerHTML = "Login with";
});

document.querySelector("#register-btn").addEventListener('click', (e) => {

    $("#modal").modal();
    document.getElementById("login").style.display = 'none';
    document.getElementById("register").style.display = 'block';
    document.querySelector(".modal-title").innerHTML = "Register with";

});

//Handle form using link like login and register
document.querySelector(".register-link").addEventListener('click', (e) => {

    $("#modal").modal();
    document.getElementById("login").style.display = 'none';
    document.getElementById("register").style.display = 'block';
    document.querySelector(".modal-title").innerHTML = "Register with";

});

document.querySelector(".login-link").addEventListener('click', (e) => {

    $("#modal").modal();
    document.getElementById("login").style.display = 'block';
    document.getElementById("register").style.display = 'none';
    document.querySelector(".modal-title").innerHTML = "Login with";

});
//Form hide and show event end

//Event Handle for Display UserList 
document.addEventListener('DOMContentLoaded', UI.displayUsers);

//Handle Event for add User and validate data of  user
document.querySelector("#register").addEventListener('submit', (e) => {
    //prevent for actual submit
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const conf_pass = document.querySelector("#conf-password").value;

    //validation for input field
    if (email === '' || password === '' || conf_pass === '') {

        UI.showAlert("Please Fill Input Field", 'alert-danger');

        return false;
    }
    if (email) {
        //regular expression for email
        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //check expression for email
        if (!regex.test(email)) {
            UI.showAlert("Please Insert Correct Email Id", 'alert-danger');
            return false;
        } else if (password != conf_pass) {

            UI.showAlert("Password did not match !", 'alert-danger');
            return false;

        } else {
            //initiate User class
            const user = new User(email, password);
            //Add User record
            UI.addUserList(user);
            //Add Data to localStorage
            Store.addUser(user);
            //clear fields 
            UI.clearFields();

            $("#modal").modal('hide');

            //show success message
            UI.showAlert("Thanks for adding", 'alert-success');
        }
    }

});

//Handle Event For Login User
document.getElementById('login').addEventListener('submit', (e) => {

    e.preventDefault();

    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

     //validation for input field
    if (email === '' || password === '') {

        UI.showAlert("Please Fill Input Field", 'alert-danger');

        return false;
    }
    if (email) {
        //regular expression for email
        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //check expression for email
        if (!regex.test(email)) {
            UI.showAlert("Please Insert Correct Email Id", 'alert-danger');
            return false;
        } else{ 

        	$("#modal").modal('hide');
            //show success message
            UI.showAlert("Thanks for Login", 'alert-success');
        }
    }

});

//Handle Event For Delete Data
document.getElementById('user-list').addEventListener('click', (e) => {

    //instatiate Class
    const ui = new UI();
    //delete targeted user list
    ui.deleteUser(e.target);
    //remove from local storage
    Store.removeUser(e.target.parentElement.parentElement.cells[1].innerHTML);

    e.preventDefault();

});

//end all event handle


