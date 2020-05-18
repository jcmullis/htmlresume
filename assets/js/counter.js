const countEl = document.getElementById('visits');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/jcmresume/hello/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}