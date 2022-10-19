const popupElement = document.getElementById('popup')
const btnFecharPopup = document.getElementById('fecharPopup')

function fnFecharPopup() {
    popupElement.style.display = 'none'
}

btnFecharPopup.addEventListener('click', fnFecharPopup)