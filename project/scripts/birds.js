import extractCountries from "./extractCountries.mjs";

const select = document.querySelector('#bird-region')
const search = document.querySelector('#bird-search')
const list = document.querySelector('#bird-list');
const results = document.querySelector('#results');
const dialog = document.querySelector('dialog');

const searchParams = new URLSearchParams(window.location.search);

async function displayBirds(params) {
    try {
        const response = await fetch('https://www.freetestapi.com/api/v1/birds');
        const data = await response.json();
        renderBirdRegionOptions(data)
        renderBirdList(data)
    
    } catch (error) {
        console.log(error);
    }
}

function renderBirdList(birds) {
    const name = searchParams.get('birdname')
    const region = searchParams.get('birdregion')
    const filtered = birds.filter(bird => {        
        if (!name && !region) return true
        if (name && bird.name.toLowerCase().includes(name)) return true
        if (region && bird.place_of_found == region) return true
        return false
    })

    if (!filtered.length) {
        list.innerHTML = '<p>No results meet the search/filter criteria</p>'
    }
    
    results.textContent = `${filtered.length} results`
    filtered.forEach(bird => {
        const card = document.createElement('li');
        card.innerHTML = `
            <p class='title'>${bird.name}</p>
            <p class='description'>${bird.description}</p>
            <div class='tags'>
                <span>${bird.place_of_found}</span>
                <span>${bird.diet}</span>
                <span>${bird.habitat}</span>
            </div>
        `;
        card.addEventListener('click', () => {
            const html = `
                <form class='close' method='dialog'><button>❌</button></form>
                <p>
                    <span>name:</span> ${bird.name}
                </p>
                <p>
                    <span>species:</span> ${bird.species}
                </p>
                <p>
                    <span>description:</span> ${bird.description}
                </p>
                <p>
                    <span>family:</span> ${bird.family}
                </p>
                <p>
                    <span>habitat:</span> ${bird.habitat}
                </p>
                <p>
                    <span>diet:</span> ${bird.diet}
                </p>
                <p>
                    <span>Region:</span> ${bird.place_of_found}
                </p>
                <p>
                    <span>Region:</span> ${bird.place_of_found}
                </p>
                <p>
                    <span>name:</span> ${bird.name}
                </p>
                <p>
                    <span>weight:</span> ${bird.weight_kg}kg
                </p>
                <p>
                    <span>wing span:</span> ${bird.wingspan_cm}cm
                </p>
                <p>
                    <span>height:</span> ${bird.height_cm ? bird.height_cm + 'cm' : 
                    'N/A'}</p>
            `
            dialog.innerHTML = html;
            dialog.showModal()
        })

        list.appendChild(card)
    });
}
function renderBirdRegionOptions(birds) {
    const selectedRegion = searchParams.get('birdregion')
    const searchName = searchParams.get('birdname')
    const countries = extractCountries(birds);
    search.value = searchName
    select.innerHTML = '<option value="">select region</option>' + countries.map(i => (
        `<option ${selectedRegion == i ? 'selected' : ''} value='${i}'>${i}</option>`
    )).join('')
}


displayBirds()