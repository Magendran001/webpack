import { maggi } from "./cal";


const root = document.querySelector('#root');
let h1 = document.createElement("h1");
h1.setAttribute("class", "tomato")
h1.innerHTML = 'appendChild !';

const table = document.querySelector("#table");

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

table.append(div1, div2, div3)


root.append(h1)


