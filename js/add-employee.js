//Global Variables
let id;
let name;
let ext;
let email;
let department;
let submit;
let empForm;
let output;
let form;

// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener("load", init);

function init() {
    "use strict";
    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    var width = 800;
    var height = 700;

    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);

    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

    // Get Dom Elements
    empForm = $('empForm');
    id = $('id');
    name = $('name');
    ext = $('ext');
    email = $('email');
    department =  $('department');

    //console.log(`Id: ${id} `);

    //Get data from the form from textboxes and select field 
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        id = id.value;
        name = name.value;
        ext  = extension.value;
        email = email.value;
        department = department.value;
        //console.log(`Id: ${id} `);
        //alert(" is is " + id);
        
        // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        let output = window.opener.document.getElementById('loginDetails');

        // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
        output.innerHTML = 'ID:          '      + id + '<br>' + 
                            'Name:       '      + name + '<br>' +
                            'Extension:  '      + ext + '<br>' +
                            'Email:      '      + email + '<br>' +
                            'Department: '      + department;
    
        window.close();    
     });

        // WHEN THE USER CLICKS 'cancel' BUTTON, CLOSE THE WINDOW
        document.getElementById('cancel').addEventListener('click', () => {
        window.close();
    });
}

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
//Helper function to get dom elements
const $ = (id) => {
    return document.getElementById(id);
}


//***************************************************************** 
// This is a todo task list do not have the heart to delete it.

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE