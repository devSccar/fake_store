import {button} from "../../componentes/button"
import { header } from "../../componentes/header"

const propsNavigation = {
    home: "../../index.html",
    login: "./index.html"
}

const app = document.getElementById("app");

app.innerHTML += header(propsNavigation);
app.innerHTML += button("Excluir")