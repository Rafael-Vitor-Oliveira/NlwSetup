const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener(
  "click",
  add
) /*estou dizendo que quando clicar ele irá executar uma função, no caso adicionar as colunas com data*/
form.addEventListener(
  "change",
  save
) /*sempre houver uma mudança irá ser salva, para que os dados não sejam perdidos*/

function add() {
  const today = new Date()
    .toLocaleDateString("pt-br")
    .slice(0, -5) /*adiciona o dia de hoje, através da função "new Date()"*/
  const dayExists = nlwSetup.dayExists(today) /*verificado se o dia já existe*/

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }
  /*caso o dia já existir irá rodar a condicional acima e parar o código nela*/
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
} /*salva as mudanças e transforma o objeto em string, para poder salvar no localstorage (no navegador)*/

const data =
  JSON.parse(localStorage.getItem("NLWSetup@habits")) ||
  {} /*transforma novamente os dados, em objeto novamente e carrega na tela*/
nlwSetup.setData(data)
nlwSetup.load()
