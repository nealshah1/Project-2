var submitBtn = document.getElementById('submit');

function submitBtntester() {
  
  var checkPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //stores the form data for use
  var fname = document.getElementById('fname');
  var lname = document.getElementById('lname');
  var email = document.getElementById('email');
  var phone = document.getElementById('number');
  var birth = document.getElementById('bday');

  var checkEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  if (checkEmail.test(email.value)) {
    alert("Thank you for the submission!")
  } else {
    alert("You need to enter a valid email address")
  }
//end of execution
};
