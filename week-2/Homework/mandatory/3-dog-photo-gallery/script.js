let randomPhoto = {
	message: "https://images.dog.ceo/breeds/bulldog-boston/n02096585_5104.jpg",
	status: "success",
};
function makeRandomPhoto(photo) {
	const randomizedPhoto = Math.floor(Math.random() * randomPhoto.message);
	photo = randomizedPhoto;
	return photo;
}
let btnElem = document.querySelector(".btn-element");
//console.log(btnElem);
btnElem.addEventListener("click", function () {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			const ulElem = document.getElementById("ul-element");
			const liElem = document.createElement("li");
			const imgElem = document.createElement("img");
			imgElem.src = `${randomPhoto.message}`;
			liElem.appendChild(imgElem);
			ulElem.appendChild(liElem);
			data = makeRandomPhoto(ulElem);
			return data;
		})
		.catch(function (error) {
			return `No photos ${error}`;
		});
});

/**
 * 
 * Let's make a randomized dog photo gallery!

Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

- Create an `index.html` file that will display your random image
- Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
- When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
- After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
- Incorporate error handling
 */
