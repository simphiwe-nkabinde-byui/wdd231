const dialog = document.querySelector('dialog');
const membershipList = document.querySelector('#membership-list')
const memberships = [
    {
        name: 'Non Profit',
        monthlyCost: 0,
        yearlyCost: 0,
        benefits: ['quarterly events', 'training']
    },
    {
        name: 'Bronze',
        monthlyCost: 50.00,
        yearlyCost: 510.00,
        benefits: ['quarterly events', 'training', 'special events',]
    },
    {
        name: 'Silver',
        monthlyCost: 75.00,
        yearlyCost: 795.00,
        benefits: ['quarterly events', 'training', 'special events', 'spotlight feature on the home page', 'event discounts']
    },
    {
        name: 'Gold',
        monthlyCost: 100.00,
        yearlyCost: 995.00,
        benefits: ['quarterly events', 'training', 'special events', 'spotlight feature on the home page', 'event discounts', 'advertising']
    }
]

function displayMembershipList() {
    memberships.forEach(item => {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        h3.textContent = `${item.name} Membership level`;
        const btn = document.createElement('button');
        btn.textContent = 'Learn More';

        li.append(h3, btn);

        btn.addEventListener('click', () => displayModal(item))
        membershipList.appendChild(li)
    })
}

function displayModal(data) {
    const html = `
        <form class='close' method='dialog'><button>❌</button></form>
        <div class='head'>${data.name} Membership level</div>
        <p>Benefits</p>
        <ul>${data.benefits.map(item => `<li>${item}</li>`).join('')}</ul>
        <p>R${data.monthlyCost}/month OR R${data.yearlyCost}/year</p>
    `
    dialog.innerHTML = html;
    dialog.showModal();
}
dialog.addEventListener('focusout', () => dialog.close())
displayMembershipList()