function contar() {
    var i = document.getElementById('num')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var c = ''

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar! Preencha todos os campos.';
        return;
    }

    res.innerHTML = 'Contando: <br>';
    var ini = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)

    if ( passo <= 0) {
        alert('Passo inválido! Considerando passo 1')
        passo = 1
    }

    if (ini < fim) {
        // Crescente
        for (var c = ini; c <= fim; c += passo)
            res.innerHTML += `${c} 👉 `
    } else {
        // Descrescente
        for (var c = ini; c >= fim; c -= passo)
             res.innerHTML += `${c} 👉 `
    }
    res.innerHTML += '🏁';


}

//  U+1F3FB mão
//U+1F3C1 bandeira