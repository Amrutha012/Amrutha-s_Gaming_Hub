const signup = document.querySelector(".signup");
signup.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const genderInputs = document.getElementsByName("gender");
  const errorMessage = document.getElementById("errormessage");
  errorMessage.textContent = "";
  let gender = "";
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      gender = genderInputs[i].value;
      break;
    }
  }
  if (name === "") {
    errorMessage.textContent = "Please enter your name!";
    errorMessage.style.color = "red";
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    errorMessage.textContent = "Please enter your email!";
    errorMessage.style.color = "red";
    return;
  }
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter in valid format of email!";
    errorMessage.style.color = "red";
    return;
  }
  if (password === "") {
    errorMessage.textContent = "Please enter your password!";
    errorMessage.style.color = "red";
    return;
  }
  if (age === "") {
    errorMessage.textContent = "Please enter your age!";
    errorMessage.style.color = "red";
    return;
  }
  if (gender === "") {
    errorMessage.textContent = "Please select your gender!";
    errorMessage.style.color = "red";
    return;
  }

  errorMessage.textContent = "✅ All your details are collected successfully!";
  errorMessage.style.color = "lightgreen";

  const userData = {
    name: name,
    email: email,
    password: password,
    gender: gender,
    age: age,
  };
  const userDataString = JSON.stringify(userData);
  localStorage.setItem("userData", userDataString);

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
