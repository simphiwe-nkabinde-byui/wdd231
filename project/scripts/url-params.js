const searchParams = new URLSearchParams(window.location.search)
const results = document.querySelector('#contact-results');

results.innerHTML = `
<p><strong>Name:</strong> ${searchParams.get('firstname')} ${searchParams.get('lastname')}</p>
<p><strong>Email:</strong> ${searchParams.get('email')}</p>
<p><strong>Message:</strong> ${searchParams.get('message')}</p>
`
