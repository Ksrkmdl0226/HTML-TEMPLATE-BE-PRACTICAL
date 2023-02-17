function FullNameValidation() {
  let fullname = document.getElementById("username").value;
  let fullnameout = document.getElementById("username");
  let status = document.getElementById("err1");

  if (fullname.length == 0) {
    status.innerHTML = "Name Field must be Filled";
    status.style.color = "red";
    fullnameout.style.outline = "2px solid red";
  } else if (fullname.length <= 5) {
    status.innerHTML = "Enter FullName Not a ShortName";
    status.style.color = "orangered";
    fullnameout.style.outline = "2px solid red";
  } else if (fullname.length > 5) {
    status.innerHTML = "Valid ";
    status.style.color = "green";
    fullnameout.style.outline = "2px solid green";
  }
}

// email

function emailvalidation() {
  let email = document.getElementById("email").value;
  let emailout = document.getElementById("email");
  let status = document.getElementById("err2");
  // regular experssion
  let regex = /^\S+@\S+\.\S+$/;

  if (email === "") {
    status.innerHTML = "Email Field must be Filled";
    status.style.color = "red";
    emailout.style.outline = "2px solid red";
  } else {
    if (regex.test(email) === false) {
      status.innerHTML = "Invalid Email-id";
      status.style.color = "red";
      emailout.style.outline = "2px solid red";
    } else {
      status.innerHTML = "Valid Email-id";
      status.style.color = "green";
      emailout.style.outline = "2px solid green";
    }
  }
}

// mobile

function mobilevalidation() {
  let mobile = document.getElementById("number").value;
  let mobileout = document.getElementById("number");
  let status = document.getElementById("err3");
  // regular experssion
  let regex = /^[6-9]\d{9}$/;

  if (mobile === "") {
    status.innerHTML = "Mobile Number Field must be Filled";
    status.style.color = "red";
    mobileout.style.outline = "2px solid red";
  } else {
    if (regex.test(mobile) === false) {
      status.innerHTML = "Invalid  MobileNumber";
      status.style.color = "red";
      mobileout.style.outline = "2px solid red";
    } else {
      status.innerHTML = "Valid Mobile Number";
      status.style.color = "green";
      mobileout.style.outline = "2px solid green";
    }
  }
}

function Servicecheck(){
    let service = document.getElementById("service").value;
    let serviceout = document.getElementById("service");
    let status = document.getElementById("err4");

    if (service.length == 0) {
        status.innerHTML = "Service Field must be Filled";
        status.style.color = "red";
        serviceout.style.outline = "2px solid red";
      } else if (service.length <= 5) {
        status.innerHTML = "Service Not a Short";
        status.style.color = "orangered";
        serviceout.style.outline = "2px solid red";
      } else if (service.length > 5) {
        status.innerHTML = "Valid ";
        status.style.color = "green";
        serviceout.style.outline = "2px solid green";
      }


}

// all validation
function allcheck() {
  let fullname = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("number").value;
  let service = document.getElementById("service").value;

  let status = document.getElementById("err1");
  let status1 = document.getElementById("err2");
  let status2 = document.getElementById("err3");
  let status3 = document.getElementById("err4");


  if (fullname == "") {
    status.innerHTML = "Full Name is Empty..";
    status.style.color = "red";
    return false;
  } else if (email == "") {
    status2.innerHTML = "Email is Empty..";
    status2.style.color = "red";
    return false;
  } else if (mobile == "") {
    status1.innerHTML = "Mobile Number is Empty..";
    status1.style.color = "red";
    return false;
  } else if (service == "") {
    status3.innerHTML = "Service is Empty..";
    status3.style.color = "red";
    return false;
  } else {
    alert("Thanks For Contacting....");

    return true;
  }
}
