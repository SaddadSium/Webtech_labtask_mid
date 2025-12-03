function handleUserType() {
  let userType = document.getElementById("userType").value;
  let rollDiv = document.getElementById("rollDiv");
  let deptDiv = document.getElementById("deptDiv");
  let message = document.getElementById("message");

  message.innerText = "";
  dataDisplay.innerText = "";

  if (userType === "student") {
    rollDiv.style.display = "block";
    deptDiv.style.display = "none";
  } else if (userType === "teacher") {
    deptDiv.style.display = "block";
    rollDiv.style.display = "none";
  } else {
    rollDiv.style.display = "none";
    deptDiv.style.display = "none";
  }
}

function handleSubmit() {
  let userType = document.getElementById("userType").value;
  let roll = document.getElementById("rollInput").value.trim();
  let dept = document.getElementById("deptInput").value.trim();

  let message = document.getElementById("message");
  let dataDisplay = document.getElementById("dataDisplay");

  message.innerText = "";
  dataDisplay.innerText = "";

  if (userType === "student") {
    if (roll === "") {
      message.style.color = "red";
      message.innerText = "Please enter your roll number!";
      return;
    }

    message.style.color = "#9fffc7ff";
    message.innerText = "Student roll submitted";
    dataDisplay.innerText = `Roll: ${roll}`;
  } else if (userType === "teacher") {
    if (dept === "") {
      message.style.color = "red";
      message.innerText = "Please enter your department!";
      return;
    }

    message.style.color = "#00ffffff";
    message.innerText = "Teacher department submitted";
    dataDisplay.innerText = `Department: ${dept}`;
  } else {
    message.style.color = "red";
    message.innerText = "Please select a user type first!";
  }
}