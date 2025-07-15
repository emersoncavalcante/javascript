var hora = new Date().getHours();
if (hora > 5 && hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 17) {
    console.log('Boa Tarde')
} else if (hora <23) {
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}