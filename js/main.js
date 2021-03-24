// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener("load", init);

function init() {
    "use strict";
    var addEmployee = window.document.getElementById("btnAddEmployee");
    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    addEmployee.addEventListener("click", function () {
        // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open("add-employee.html", "Add Employee", "width=400,height=400");    
        //console.log("in addemp");
    });
}

