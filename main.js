let pressBiscuit = document.querySelector('.biscoitoFechado')
let pressBiscuitOpened = document.querySelector('.biscoitoAberto')
let buttonOpenOther = document.querySelector('#abrirOutro')

let phrasesList = [
    'Consagre ao Senhor tudo o que você faz e seus planos serão bem sucedidos!',
    'Seja forte e corajoso!', 
    'Deus é seu refúgio e fortaleza!'
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

