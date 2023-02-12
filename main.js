let pressBiscuit = document.querySelector('.biscoitoFechado')
let pressBiscuitOpened = document.querySelector('.biscoitoAberto')
let buttonOpenOther = document.querySelector('#abrirOutro')

let phrasesList = [
    'Consagre ao Senhor tudo o que você faz e seus planos serão bem sucedidos!',
    'Seja forte e corajoso!', 
    'Deus é seu refúgio e fortaleza!',
    'Sobretudo, amem-se sinceramente uns aos outros, porque o amor perdoa muitíssimos pecados.',
    'O ódio provoca dissensão, mas o amor cobre todos os pecados.',
    'Assim, permanecem agora estes três: a fé, a esperança e o amor. O maior deles, porém, é o amor.',
    'Posso todas as coisas naquele que me fortalece.',
    'Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus.',
    'Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.',
    'Quanto a vocês, irmãos, nunca se cansem de fazer o bem.',
    'Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.',
    'Não se deixem vencer pelo mal, mas vençam o mal com o bem.',
    'Mas bendito é o homem cuja confiança está no Senhor, cuja confiança nele está.'
]
let randomPhrase = document.querySelector('#randomPhrase')
let createRandomPhrase

function toggleBiscoito() {
    pressBiscuit.classList.toggle('hide')
    pressBiscuitOpened.classList.toggle('hide')
}

pressBiscuit.addEventListener('click', generatePhrase)
    
function generatePhrase() {
    toggleBiscoito()

    createRandomPhrase = Math.floor(Math.random()*(phrasesList.length))

    randomPhrase.innerText = phrasesList[createRandomPhrase]
}

buttonOpenOther.addEventListener('click', function() {
    toggleBiscoito()
})

