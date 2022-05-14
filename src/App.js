import "./App.css";

const btnStartElement = document.getElementById("btnStart");
const btnBackElement = document.getElementById("btnBack");
const btnAboutElement = document.getElementById("btnAbout");
const btnBack2Element = document.getElementById("btnBack2");
const btnSignup = document.getElementById("btnSignup");
//const btnReg = document.getElementById("btnReg");
const btnBack2Login = document.getElementById("btnbackLogin");
//const btnLogin = document.getElementById("btnLogin");



const gameStart = document.getElementById("gameStart");
const container = document.getElementById("container");
const aboutUs = document.getElementById("about");
const signUp = document.getElementById("form-signup");



export default function App() {
  /*Start the game*/
  btnStartElement.addEventListener("click", startGame);
  function startGame() {
    btnStartElement.classList.add("hide");
    gameStart.classList.remove("hide");
    container.classList.add("hide");
  }

  btnBackElement.addEventListener("click", backHome);
  function backHome() {
    btnStartElement.classList.remove("hide");
    gameStart.classList.add("hide");
    container.classList.remove("hide");
  }

  btnAboutElement.addEventListener("click", about);
  function about() {
    btnStartElement.classList.add("hide");
    gameStart.classList.add("hide");
    container.classList.add("hide");
    aboutUs.classList.remove("hide");
  }

  btnBack2Element.addEventListener("click", backstartGame);
  function backstartGame() {
    btnStartElement.classList.add("hide");
    gameStart.classList.remove("hide");
    container.classList.add("hide");
    aboutUs.classList.add("hide");
  }

  btnSignup.addEventListener("click", SignUp);
  function SignUp() {
    btnStartElement.classList.add("hide");
    gameStart.classList.add("hide");
    container.classList.add("hide");
    aboutUs.classList.add("hide");
    signUp.classList.remove("hide");
  }


  btnBack2Login.addEventListener("click", backLogin);
  function backLogin() {
    btnStartElement.classList.add("hide");
    gameStart.classList.remove("hide");
    container.classList.add("hide");
    aboutUs.classList.add("hide");
    signUp.classList.add("hide");
  }
}
