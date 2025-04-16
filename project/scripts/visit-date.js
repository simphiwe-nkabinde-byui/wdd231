const lastVisit = localStorage.getItem('lastVisit');
const messageSeen = sessionStorage.getItem('messageSeen');
const alertBox = document.querySelector('#alert-box');

if (messageSeen == null) {
    let message = ''
    if (lastVisit == null) {
        message = 'Welcome to Bird Wonder Hub!';
                
    } else if (Date.now() - lastVisit < (1000 * 60 * 60 * 24)) {
        message = 'Back so soon! Awesome!';
        
    } else {
        const timeDiff = Date.now() - lastVisit
        const oneDay = 1000 * 60 * 60 * 24
        const days = timeDiff / oneDay
        message = `You last visited ${days.toFixed(0)} days ago`;
    }
    displayMessage(message);
}

localStorage.setItem('lastVisit', Date.now())

function displayMessage(text) {
    if (!alertBox) return
    alertBox.style.display = 'block'
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn'
    closeBtn.innerHTML = '&times;'
    closeBtn.addEventListener('click', () => {
        alertBox.style.display = 'none'
        sessionStorage.setItem('messageSeen', true)
    })

    const message = document.createElement('span');
    message.className = 'message'
    message.innerText = text

    alertBox.append(message,closeBtn)
}

