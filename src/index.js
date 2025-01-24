function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "roses are red...";

    new Typewriter('#poem', {
        strings: ['Roses are red..'],
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);