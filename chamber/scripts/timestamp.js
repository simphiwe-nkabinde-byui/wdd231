const form = document.querySelector('form')
const timestamp = document.querySelector('#timestamp')

form.addEventListener('submit', (e) => {
    timestamp.value = new Date().toISOString();    
})