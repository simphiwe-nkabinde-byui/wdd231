const url = '/wdd231/chamber/data/members.json';
const membersList = document.querySelector('#card-list');
const membershipLevels = {
    '1': 'Gold',
    '2': 'Silver',
    '3': 'Bronze'
}
async function getMembers() {
    
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
    displaySpotlights(data)
}

getMembers();

const displayMembers = (members) => {
    if (!membersList) return
    members.forEach(member => {
        const memberContainer = document.createElement('li');
        const name = document.createElement('h2');
        const phone = document.createElement('p');
        const address = document.createElement('p');
        const logo = document.createElement('img');
        const webLink = document.createElement('a');

        name.textContent = member.name;
        phone.textContent =  member.phoneNumber;
        address.textContent = member.address;
        logo.setAttribute('src', 'images/' + member.imageName);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', '50');
        webLink.setAttribute('href', member.websiteUrl)
        webLink.textContent = 'visit website'

        memberContainer.appendChild(logo);
        memberContainer.appendChild(name);
        memberContainer.appendChild(address);
        memberContainer.appendChild(phone);
        memberContainer.appendChild(webLink);
    
        membersList.appendChild(memberContainer);

    });
}
function getOrdinal(number) {
    switch (number) {
        case 1:
            return '1st';
        case 2:
            return '2nd';
        case 3:
            return '3rd';
        default:
            return `${number}th`;
    }
}

function displaySpotlights(allMembers) {
    const members = allMembers.filter(item => (item.membershipLevel == 1 || item.membershipLevel == 2))
    shuffleArray(members)
    members.splice(3)
    const spotlightsList = document.querySelector('#spotlights');
    if (!spotlightsList) return
    
    members.forEach(member => {
        const memberContainer = document.createElement('li');
        const name = document.createElement('h2');
        const phone = document.createElement('p');
        const address = document.createElement('p');
        const logo = document.createElement('img');
        const webLink = document.createElement('a');
        const membership = document.createElement('p')

        name.textContent = member.name;
        phone.textContent =  member.phoneNumber;
        address.textContent = member.address;
        logo.setAttribute('src', 'images/' + member.imageName);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', '50');
        webLink.setAttribute('href', member.websiteUrl)
        webLink.textContent = 'visit website'
        membership.textContent = 'Membership: ' + membershipLevels[member.membershipLevel]


        memberContainer.appendChild(logo);
        memberContainer.appendChild(name);
        memberContainer.appendChild(address);
        memberContainer.appendChild(phone);
        memberContainer.appendChild(webLink);
        memberContainer.appendChild(membership);
    
        spotlightsList.appendChild(memberContainer)
    })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { 
        // Generate random index 
        const j = Math.floor(Math.random() * (i + 1));
                      
        // Swap elements at indices i and j
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}