function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = 'rgba(159, 169, 199, 1)'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = 'rgba(255, 109, 0, 1)'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'    
        document.body.style.background = 'rgba(23, 65, 107, 1)'
    }

}


