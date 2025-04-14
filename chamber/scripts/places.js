const dialog = document.querySelector('dialog');
const url = '/chamber/data/interest-areas.json'

async function showPlaces() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderPlaceCards(data)
    
    } catch (error) {
        console.log({error});
        
    }

}

function renderPlaceCards(data) {

    const container = document.querySelector('#interest-areas')

    let html = '';

    data.forEach(item => {
        const li = document.createElement('li');
        // h2
        const h2 = document.createElement('h2');
        h2.textContent = item.name;
        li.append(h2)

        // figure
        const figure = document.createElement('figure');
        figure.innerHTML = `<img src="images/${item.imageName}.webp" width="300" height="200" alt="${item.name}">`;
        li.append(figure)

        // address
        const address = document.createElement('address');
        address.textContent = item.address;
        li.append(address)

        // paragraph
        const p = document.createElement('p');
        p.textContent = item.description;
        li.append(p)

        // button
        const btn = document.createElement('button');
        btn.textContent = 'learn more';
        btn.addEventListener('click', () => dialog.showModal());
        li.append(btn)

        container.appendChild(li)
    });
    // container.innerHTML = html

}

showPlaces()
dialog.addEventListener('focusout', () => dialog.close())

