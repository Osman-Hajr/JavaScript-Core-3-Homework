let divElem = document.querySelector("#programmer-humour");
function programmersHumour(title, number, date, content, image) {
	divElem.innerHTML = `<h2>${title}</h2>
						 <h6>Humour Number: ${number}
						 <p>Release Date: ${date}</p>
						 <p>${content}</p>
						 <img src = "${image}"/>
	
	`;
	return divElem;
}
fetch("https://xkcd.now.sh/?comic=latest")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		let humourTitle = `${data.title}`;
		let humourNum = `${data.num}`;
		let humourDate = `${data.day}/${data.month}/${data.year}`;
		let humourContent = `${data.alt}`;
		let humourImage = `${data.img}`;
		divElem.appendChild(
			programmersHumour(
				humourTitle,
				humourNum,
				humourDate,
				humourContent,
				humourImage
			)
		);
	})
	.catch(function (error) {
		return `No Jokes ${error}`;
	});
