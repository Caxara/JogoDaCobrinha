const titles = document.getElementById('gameTitle')

function flash(){
    const colors = ['#e27d60', '#e8a87c', '#c38d9e']
    const cor = colors[Math.floor(Math.random()*colors.length)]
    
    titles.style.color = cor
}

setInterval(flash, 1000)
