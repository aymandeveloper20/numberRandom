function randomNumber() {
  let image = document.querySelector(".img");

  let randomNumber = Math.floor(Math.random() * 6) + 1;

  image.style.background = `url(./assets/img0${randomNumber}.svg) no-repeat`;

  let history = document.querySelector(".history");
  let element = document.createElement("div");
  let randomNum = document.createElement("h3");
  let img = document.createElement("img");
  img.src = `./assets/img0${randomNumber}.svg`;

  randomNum.innerHTML = `Number : <h2>${randomNumber}</h2>`;
  element.classList.add("element");
  randomNum.classList.add("RandomNumber");

  let elements = document.querySelectorAll(".element");
  for (let i = 0; i < elements.length; i++) {
    if (elements.length === 5) {
      elements[i].remove();
    }
  }
  element.appendChild(randomNum);
  element.appendChild(img);
  history.appendChild(element);
}
// Add an event listener to the button to trigger the randomNumber function on click
