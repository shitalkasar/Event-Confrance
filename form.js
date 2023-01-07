function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
  }
  
  function validate() {
    var check = true;
    var fname = document.forms['myForm']["fname"].value;
  
  
    if (fname.length < 5) {
      seterror("fname", "*length of name is shuld be greater than 5");
      check = false;
    }
  
    var email = document.forms['myForm']["email"].value;
  
    if (email.length > 35) {
      seterror("email", "*length of Email is too long");
      check = false;
    }
  
    if (email.length < 5) {
      seterror("email", "*length of Email is too short");
      check = false;
    }
  
    var phone = document.forms['myForm']["phone"].value;
  
    if (phone.length != 10) {
      seterror("phone", "*length of phone should be of 10 digit");
      check = false;
    }
  
    var password = document.forms['myForm']["pass"].value;
  
    if (password.length < 4) {
      seterror("pass", "*length of pass should be greater than 4 Character");
      check = false;
    }
    if (check) {
  
      let tr = document.createElement("tr")
      let nametd = document.createElement("td")
      let emailtd = document.createElement("td")
      let phonetd = document.createElement("td");
  
      nametd.innerHTML = document.querySelector("#inputfname").value;
  
      emailtd.innerHTML = document.querySelector("#email").value;
  
      phonetd.innerHTML = document.querySelector("#phone").value;
  
      tr.appendChild(nametd)
      tr.appendChild(emailtd)
      tr.appendChild(phonetd)
  
      document.querySelector("tbody").appendChild(tr)
    }
  
  }
  
  function checkfname(e) {
    let fname = e.target.value;
    console.log(fname, "*******")
    if (fname < 4) {
      clearError();
    }
  }
  
  function clearError() {
    let errors = document.getElementsByClassName('formerror1')[0];
  
    errors.innerHTML = "";
  
  }
  
  // function checkError() {
  //   const input = document.getElementsByTagName("input")[0];
  //   let size = input.value.length;
  
  //   if (size < 5) {
  //     seterror();
  //   } else {
  //     clearError();
  //   }
  // }
  
  