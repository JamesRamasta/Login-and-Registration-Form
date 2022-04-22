import "./App.css";

export default function App() {
  const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link"),
    btnregcancel = document.querySelector(".btnregcancel"),
    btnlogin = document.querySelector(".btnlog"),
    btnreg = document.querySelector(".btnreg");

  const homepage = document.querySelector(".homepage");

  //   js code to show/hide password and change icon
  pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
      pwFields.forEach((pwField) => {
        if (pwField.type === "password") {
          pwField.type = "text";

          pwShowHide.forEach((icon) => {
            icon.classList.replace("uil-eye-slash", "uil-eye");
          });
        } else {
          pwField.type = "password";

          pwShowHide.forEach((icon) => {
            icon.classList.replace("uil-eye", "uil-eye-slash");
          });
        }
      });
    });
  });

  //js code to appear signup and login form
  signUp.addEventListener("click", () => {
    container.classList.add("active");
  });
  login.addEventListener("click", () => {
    container.classList.remove("active");
  });

  //cancel button in register form
  btnregcancel.addEventListener("click", () => {
    container.classList.remove("active");
  });

   //cancel button in register form
   btnreg.addEventListener("click", () => {
    container.classList.remove("active");
  });
  
 
}
