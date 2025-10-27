import './style.css'
import {header} from './componentes/header'
import {button} from './componentes/button'

const propsNavigation = {
  home: "./",
  login: "/src/pages/login/index.html",
};

window.addEventListener("load", () => {
  const app = document.getElementById("app");
  app.innerHTML += header(propsNavigation)
  app.innerHTML += button("Cadastrar")
})

setupCounter(document.querySelector('#counter'))
