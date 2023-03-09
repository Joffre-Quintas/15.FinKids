const planoLocalStorage = document.querySelectorAll("a.botao_plano");



for (var i = 0; i < planoLocalStorage.length; i++) {
    planoLocalStorage[i].addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.setItem("planoSelecionado", event.target.getAttribute("data-plano"));
        window.location.href = 'adesao.html';
    });
}

document.addEventListener('DOMContentLoaded', ()=> {
    var planoSelecionado = localStorage.getItem('planoSelecionado');
    if (planoSelecionado) {
      document.querySelector('#plano').value = planoSelecionado;
    }
});
