function verificar() {
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res')
    var idade = ano - Number(fano.value)
    var fsex = document.getElementsByName('radsex')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var genero = ''

    if (idade > 125) {
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente' 
    }

    else { 

    if (fsex[0].checked) {
        genero = 'Homem'
        if ( idade >= 0 && idade <6 ) {
            //Bebê
            img.setAttribute('src', 'rno.png')
        } else if (idade >= 6 && idade <11) {
            //Criança
            img.setAttribute('src', 'menino.png')
        } else if (idade >=11 && idade <18) {
            //Adolescente
            img.setAttribute('src', 'menino_adol.png')
        } else if (idade >=18 && idade < 40) {
            //Adulto
            img.setAttribute('src', 'homem.png')
        } else if (idade >=40 && idade <60) {
            //Adulto Maduro
            img.setAttribute('src', 'homemmaduro.png')
        } else if ( idade >= 60) {
            //Idoso
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if ( idade >= 0 && idade <6 ) {
            //Bebê
            img.setAttribute('src', 'rna.png')
        } else if (idade >= 6 && idade <11) {
            //Criança
            img.setAttribute('src', 'menina.png')
        } else if (idade >=11 && idade <18) {
            //Adolescente
            img.setAttribute('src', 'menina_adol.png')
        } else if (idade >=18 && idade < 40) {
            //Adulto
            img.setAttribute('src', 'mulher.png')
        } else if (idade >=40 && idade < 60) {
            //Adulto Maduro
            img.setAttribute('src', 'mulhermadura.png')
        } else if ( idade >= 60) {
            //Idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    
    res.innerHTML = `Identificamos - ${genero} de ${idade} anos.`

    res.appendChild(img)
    
    

    
   
    }

}