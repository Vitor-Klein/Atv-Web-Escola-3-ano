var dataUser = 2004
var dataAtual = new Date().getFullYear()

var total = dataAtual - dataUser;

function calculateDate(){
  var text = document.querySelector('.text')
  text.innerHTML = total
}
