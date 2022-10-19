const btnBaixar = document.getElementById('btnBaixar')

function fnAbrirGuia() {
    window.open("https://play.google.com/store/games", target='_blank')
}

btnBaixar.addEventListener('click', fnAbrirGuia);