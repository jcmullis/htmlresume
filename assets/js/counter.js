const countEl = document.getElementById('visits');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/jcmresume/hello/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
};
xhttp.open("GET", "https://h1dqwvt5p4.execute-api.us-east-1.amazonaws.com/prod/counter", true);
xhttp.send();
