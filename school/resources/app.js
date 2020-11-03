const tbody = document.querySelector("section div div div table tbody");
const tbodyCourse = document.querySelector("#courses table tbody");
const tbodyTrainer = document.querySelector("#trainers table tbody");
const tbodyAssignment = document.querySelector("#assignments table tbody");
const form = document.querySelector("#st");
const formCourse = document.querySelector("#fcourses");
const formTrainer = document.querySelector("#ftrainers");
const formAssignment = document.querySelector("#fassignments");

const tbodyStudentPerCourse = document.querySelector("#relateEntities table tbody");

const formStudentPerCourse = document.querySelector("#stupercourse");

const tbodyAssignmentPerStudent = document.querySelector("#AperS tbody");
const formAssignmentPerStudent = document.querySelector("#assignmentperstudent");

const tbodyAssignmentPerCourse = document.querySelector("#ApC tbody");
const formAssignmentPerCourse = document.querySelector("#assignmentpercourse");

const tbodyTrainerPerCourse = document.querySelector("#TpC tbody");
const formTrainerPerCourse = document.querySelector("#trainerpercourse");
// const courses = [
//     [ "Java", "6 months", 2000 ],
//     [ "PHP", "7 months", 2200 ],
//     [ "Python", "8 months", 2400 ]
//    ];

// //Loop over array, add dynamically input to a table

// for (let i = 0;i < courses.length; i++){
//       tbody.innerHTML += "<tr></tr><td>" + courses[i][0]+ "</td><td>" + courses[i][1]+ "</td>"
//       + "<td>"  + courses[i][2]+ "</td></tr>";
// }
form.addEventListener("submit", handleSubmit);
formCourse.addEventListener("submit",handleSubmitCourse);
formTrainer.addEventListener("submit",handleSubmitTrainer);
formAssignment.addEventListener("submit", handleSubmitAssignment);

formStudentPerCourse.addEventListener("submit",handleSubmitStPerCourse);
formAssignmentPerStudent.addEventListener("submit",handleSubmitAssignPerStudent);
formAssignmentPerCourse.addEventListener("submit", handleSubmitAssignPerCourse);
formTrainerPerCourse.addEventListener("submit", handleSubmitTrPerCourse);

function handleSubmitTrPerCourse(event){
    event.preventDefault();
    const trainerName = document.querySelector("#trainerName").value;
    const trainerLastName = document.querySelector("#trainerLastName").value;
    const trcourseTitle = document.querySelector("#trcourseTitle").value;
    const trcourseDescr = document.querySelector("#trcourseDescr").value;
    //const tuition = document.querySelector("#tuition").value;
    const newRow = "<tr><td>"+ trainerName + "</td><td>" + trainerLastName + "</td><td>" + trcourseTitle +"</td><td>"+ trcourseDescr +
"</td><td>" + "<button class='btn'>Edit</button>" +
      "</td><td>" + "<button class='btn'>Delete</button>" + "</td></tr>";
    tbodyTrainerPerCourse.innerHTML += newRow;
    console.log(event.type , event.target === form,event.value);
    formTrainerPerCourse.reset(); // same as event.target.reset();
     //desables the action of the form
};



function handleSubmitAssignPerCourse(event){
    event.preventDefault();
    const assignmentTitle = document.querySelector("#assignmentTitle").value;
    const assignmentDescr = document.querySelector("#assignmentDescr").value;
    const acourseTitle = document.querySelector("#acourseTitle").value;
    const acourseDescr = document.querySelector("#acourseDescr").value;
    //const tuition = document.querySelector("#tuition").value;
    const newRow = "<tr><td>"+ assignmentTitle + "</td><td>" + assignmentDescr + "</td><td>" + acourseTitle +"</td><td>"+ acourseDescr +
    "</td><td>" + "<button class='btn'>Edit</button>" +"</td><td>" + "<button class='btn'>Delete</button>" + "</td></tr>";
    tbodyAssignmentPerCourse.innerHTML += newRow;
    console.log(event.type , event.target === form,event.value);
    formAssignmentPerCourse.reset(); // same as event.target.reset();
     //desables the action of the form
};


function handleSubmitAssignPerStudent(event){
    event.preventDefault();
    const astuname = document.querySelector("#astuname").value;
    const astulastname = document.querySelector("#astulastname").value;
    const assigntitle = document.querySelector("#assigntitle").value;
    const assigndescr = document.querySelector("#assigndescr").value;
    //const tuition = document.querySelector("#tuition").value;
    const newRow = "<tr><td>"+ astuname + "</td><td>" + astulastname + "</td><td>" + assigntitle +"</td><td>"+ assigndescr + "</td><td>" + "<button class='btn'>Edit</button>" +
    "</td><td>" + "<button class='btn'>Delete</button>" + "</td></tr>";
    tbodyAssignmentPerStudent.innerHTML += newRow;
    console.log(event.type , event.target === form,event.value);
    formAssignmentPerStudent.reset(); // same as event.target.reset();
     //desables the action of the form
};


function handleSubmitStPerCourse(event){
      event.preventDefault();
      const stuname = document.querySelector("#stuname").value;
      const stulastname = document.querySelector("#stulastname").value;
      const coursetitle = document.querySelector("#coursetitle").value;
      const coursedescr = document.querySelector("#coursedescr").value;
      //const tuition = document.querySelector("#tuition").value;
      const newRow = "<tr><td>"+ stuname + "</td><td>" + stulastname + "</td><td>" + coursetitle +"</td><td>"+ coursedescr+"</td><td>" + "<button class='btn'>Edit</button>" +
      "</td><td>" + "<button class='btn'>Delete</button>" + "</td></tr>";
      tbodyStudentPerCourse.innerHTML += newRow;
      console.log(event.type , event.target === form,event.value);
      formStudentPerCourse.reset(); // same as event.target.reset();
       //desables the action of the form
};


function handleSubmit(event){
      //alert();
      event.preventDefault();
      const firstname = document.querySelector("#firstname").value;
      const lastname = document.querySelector("#lastname").value;
      const dob = document.querySelector("#dob").value;
      const tuition = document.querySelector("#tuition").value;
      //const tuition = document.querySelector("#tuition").value;
      const newRow = "<tr><td>"+ firstname + "</td><td>" + lastname + "</td><td>" + dob +"</td><td>"+ tuition + "</td><td>" + "<button class='btn'>Edit</button>" +
      "</td><td>" + "<button class='btn'>Delete</button>" + "</td></tr>";
      tbody.innerHTML += newRow;
      console.log(event.type , event.target === form,event.value);
      form.reset(); // same as event.target.reset();
       //desables the action of the form
};

function handleSubmitCourse(event){
    //alert();
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const stream = document.querySelector("#stream").value;
    const type = document.querySelector("#type").value;
    const start = document.querySelector("#start").value;
    const end =document.querySelector("#end").value;
    //const tuition = document.querySelector("#tuition").value;
    const newRow = "<tr><td>"+ title + "</td><td>" + stream + "</td><td>" + type +"</td><td>"+ start+ "</td><td>" + end + "</td><td>" + "<button class='btn'>Edit</button>" +
    "</td><td>" + "<button class='btn'>Delete</button>" + "</td></tr>";
    tbodyCourse.innerHTML += newRow;
    console.log(event.type , event.target === form,event.value);
    formCourse.reset(); // same as event.target.reset();
     //desables the action of the form
};

function handleSubmitTrainer(event){
    //alert();
    event.preventDefault();
    const trfirstname = document.querySelector("#trfirstname").value;
    const trlastname = document.querySelector("#trlastname").value;
    const subject = document.querySelector("#subject").value;
    const newRow = "<tr><td>"+ trfirstname + "</td><td>" + trlastname + "</td><td>" + subject + "</td><td>" + "<button class='btn'>Edit</button>" +
    "</td><td>" + "<button class='btn'>Delete</button>" + "</td></tr>";
    tbodyTrainer.innerHTML += newRow;
    console.log(event.type , event.target === form,event.value);
    formTrainer.reset(); // same as event.target.reset();
     //desables the action of the form
};

function handleSubmitAssignment(event){
    //alert();
    event.preventDefault();
    const title = document.querySelector("#atitle").value;
    const description = document.querySelector("#adescription").value;
    const sub = document.querySelector("#sub").value;
    const mark = document.querySelector("#mark").value;
    //const tuition = document.querySelector("#tuition").value;
    const newRow = "<tr><td>"+ title + "</td><td>" + description + "</td><td>" + sub +"</td><td>"+ mark + "</td><td>" + "<button class='btn'>Edit</button>" +
    "</td><td>" + "<button class='btn'>Delete</button>" + "</td></tr>";
    tbodyAssignment.innerHTML += newRow;
    console.log(event.type , event.target === form,event.value);
    formAssignment.reset(); // same as event.target.reset();
     //desables the action of the form
};

function delRow(x){
    console.log(x.parentElement.parentElement)
    document.getElementById("stTable").deleteRow(x.parentElement.parentElement.rowIndex);
    };


    function delRowCourse(x){
        console.log(x.parentElement.parentElement)
        document.getElementById("courseTable").deleteRow(x.parentElement.parentElement.rowIndex);
        };

function delRowTrainer(x){
    console.log(x.parentElement.parentElement)
    document.getElementById("trainerTable").deleteRow(x.parentElement.parentElement.rowIndex);
    };

function delRowAssignment(x){
    console.log(x.parentElement.parentElement)
    document.getElementById("assignmentTable").deleteRow(x.parentElement.parentElement.rowIndex);
    };

  function delRowStuPerCourse(x){
    console.log(x.parentElement.parentElement)
    document.getElementById("studentPerCourse").deleteRow(x.parentElement.parentElement.rowIndex);
    };

 function delRowAssignPerStu(x){
    console.log(x.parentElement.parentElement)
    document.getElementById("AperS").deleteRow(x.parentElement.parentElement.rowIndex);
    };

function delRowAssignPerCourse(x){
        console.log(x.parentElement.parentElement)
        document.getElementById("ApC").deleteRow(x.parentElement.parentElement.rowIndex);
        }; 

function delRowTrainerPerCourse(x){
            console.log(x.parentElement.parentElement)
            document.getElementById("TpC").deleteRow(x.parentElement.parentElement.rowIndex);
            };

function confirmation() {
        if (confirm("Are you sure you want to submit:")) {
            alert("Thank you! The form was submitted successfully \!");
        } else {
            alert("Submit cancelled!");
        }
    };



