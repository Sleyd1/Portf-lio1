const botao = document.querySelector('.btn-mostra');
const inativos = document.querySelectorAll('.projeto:not(.ativo)');


botao.addEventListener('click', () => {
  mostrar()
  esconder()
  
})

function mostrar() {
  inativos.forEach((projetoInativo) => {
    projetoInativo.classList.add('ativo')
  })
}

function esconder() {
  botao.classList.add("remove");
}
