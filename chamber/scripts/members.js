const url = '/chamber/data/members.json';
const membersList = document.querySelector('#card-list');


async function getMembers(params) {
    const response = await fetch('/chamber/data/members.json');
    const data = await response.json();
    displayMembers(data);
}

getMembers();

const displayMembers = (members) => {
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
        // portrait.setAttribute('width', 655 / 6);
        // portrait.setAttribute('height', 812 / 6);

        memberContainer.appendChild(logo);
        memberContainer.appendChild(name);
        memberContainer.appendChild(address);
        memberContainer.appendChild(phone);
        memberContainer.appendChild(webLink);
    
        membersList.appendChild(memberContainer)

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