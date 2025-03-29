const gridBtn = document.querySelector('#display-style-grid');
const listBtn = document.querySelector('#display-style-list');

const cardList = document.querySelector('#card-list');


gridBtn.addEventListener('click', (event) => {
    cardList.classList.add('grid');
    cardList.classList.remove('list');
    gridBtn.classList.toggle('active');
    listBtn.classList.toggle('active');
})
listBtn.addEventListener('click', (event) => {
    cardList.classList.remove('grid');
    cardList.classList.add('list');
    listBtn.classList.toggle('active');
    gridBtn.classList.toggle('active');
})