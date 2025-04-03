const searchParams = new URLSearchParams(window.location.search)
const results = document.querySelector('#results');

results.innerHTML = `
<p><strong>Name:</strong> ${searchParams.get('firstname')} ${searchParams.get('lastname')}</p>
<p><strong>Email:</strong> ${searchParams.get('email')}</p>
<p><strong>Phone:</strong> ${searchParams.get('phone')}</p>
<p><strong>Organisation:</strong> ${searchParams.get('organization-name')}</p>
<p><strong>Organisational Title:</strong> ${searchParams.get('organization-title')}</p>
<p><strong>Organisation Description:</strong> ${searchParams.get('description')}</p>
<p><strong>Membership Level:</strong> ${searchParams.get('membership-level')}</p>
<p><strong>Submitted at:</strong> ${searchParams.get('timestamp')}</p>

`
